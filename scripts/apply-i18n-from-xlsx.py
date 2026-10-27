#!/usr/bin/env python3
"""Apply Excel EN→DE/FR/NL translations into Docusaurus i18n folders.

- UI JSON: fill message fields by matching English message text
- Docs: mirror English docs, replace matched strings, preserve markdown bold/code
- Legal pages listed in ENGLISH_ONLY_DOCS stay English (copied as-is)
"""

from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "openpyxl", "-q"])
    import openpyxl

ROOT = Path(__file__).resolve().parents[1]
XLSX = Path(
    "/Users/zhaosong/Desktop/入微/二代定位器项目/素材/多语言资料/"
    "Wagguracy_PHAST_1_EU_DE_FR_NL_By Kate_official_site20261008.xlsx"
)
LOCALES = ("de", "fr", "nl")
DOCS_SRC = ROOT / "docs"
ENGLISH_ONLY_DOCS = {
    "privacy-policy.md",
    "terms-of-service.md",
    "devices/6-returns-exchanges/1_returns-exchanges.md",
    "devices/6-returns-exchanges/2_limited-warranty.md",
}

GAPS_UI: list[str] = []
GAPS_DOCS: list[str] = []
GAPS_FORMAT: list[str] = []


def norm(s: str) -> str:
    s = s.replace("\u2019", "'").replace("\u2018", "'")
    s = s.replace("\u201c", '"').replace("\u201d", '"')
    s = s.replace("\u2014", "—").replace("\u2013", "-")
    s = s.replace("，", ",").replace("：", ":")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def strip_md_inline(s: str) -> str:
    """Remove inline markdown markers for lookup keys; keep link text."""
    s = re.sub(r"!\[([^\]]*)\]\([^)]+\)", r"\1", s)
    s = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", s)
    s = s.replace("**", "").replace("__", "")
    s = re.sub(r"`([^`]+)`", r"\1", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def load_excel() -> dict[str, dict[str, str]]:
    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb["official site"]
    mapping: dict[str, dict[str, str]] = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        en = (row[1] or "").strip()
        if not en:
            continue
        entry = {
            "de": (row[2] or "").strip(),
            "fr": (row[3] or "").strip(),
            "nl": (row[4] or "").strip(),
        }
        mapping[en] = entry
        mapping[norm(en)] = entry
        plain = strip_md_inline(en)
        mapping[norm(plain)] = entry
        # also without trailing colon
        if en.endswith(":"):
            mapping[en[:-1]] = entry
            mapping[norm(en[:-1])] = entry
        else:
            mapping[en + ":"] = entry
            mapping[norm(en + ":")] = entry
    wb.close()
    return mapping


def lookup(mapping: dict[str, dict[str, str]], en: str, locale: str) -> str | None:
    if not en or not en.strip():
        return None
    # Collapse JSX/Translate whitespace to match Excel single-line sources
    collapsed = re.sub(r"\s+", " ", en).strip()
    candidates = [
        en.strip(),
        collapsed,
        norm(en),
        norm(collapsed),
        strip_md_inline(en),
        strip_md_inline(collapsed),
        norm(strip_md_inline(en)),
        norm(strip_md_inline(collapsed)),
    ]
    for c in candidates:
        if c in mapping and mapping[c].get(locale):
            return mapping[c][locale]
        if c.endswith(":") and c[:-1] in mapping and mapping[c[:-1]].get(locale):
            return mapping[c[:-1]][locale]
        if (c + ":") in mapping and mapping[c + ":"].get(locale):
            # keep colon if source had it
            t = mapping[c + ":"][locale]
            if en.strip().endswith(":") and not t.endswith(":"):
                return t + ":"
            return t
    return None


def apply_format_spans(en_md: str, translated_plain: str) -> str | None:
    """Re-apply **bold** and `code` from English MD onto translated plain text.

    Strategy:
    - Extract bold/code spans from English
    - Look up each span's plain EN in mapping context via provided translated_plain
      for whole sentence already translated
    - For each span, try to find translation of the span alone; if found, bold that
      substring in the sentence translation. If span translation not in sentence,
      try case-insensitive substring of span translation.
    Returns None if we cannot safely place formats (caller keeps English).
    """
    # If English has no format markers, return translated as-is
    if "**" not in en_md and "`" not in en_md and "__" not in en_md:
        return translated_plain

    result = translated_plain
    # Process code spans first (shorter / more exact UI labels)
    for m in re.finditer(r"`([^`]+)`", en_md):
        en_span = m.group(1)
        # Prefer keeping same English UI label in backticks if not separately translated
        # Caller should pass span translations via side channel — we look up globally later
        # Here we only wrap if en_span appears in translation (unlikely) or we keep EN label
        if en_span in result:
            result = result.replace(en_span, f"`{en_span}`", 1)
        else:
            # keep English UI token with backticks appended near end if missing — skip
            pass

    bold_spans = re.findall(r"\*\*([^*]+)\*\*", en_md) + re.findall(
        r"__([^_]+)__", en_md
    )
    if not bold_spans and "`" not in en_md:
        return result

    # If we still have no bold applied but English had bold, signal soft success
    # when whole-sentence bold only
    plain_en = strip_md_inline(en_md)
    if plain_en == strip_md_inline(en_md.replace("**", "").replace("__", "")):
        pass

    # Whole-phrase bold: if EN is entirely bolded once
    whole = re.fullmatch(r"\*\*([^*]+)\*\*", en_md.strip())
    if whole:
        return f"**{translated_plain}**"

    return result


def reapply_inline_format(
    en_md: str, translated: str, mapping: dict, locale: str
) -> tuple[str, bool]:
    """Return (text, format_ok).

    Always prefer the translated sentence. Log unplaced bold/code spans to
    GAPS_FORMAT but do not revert the whole sentence to English.
    """
    if "**" not in en_md and "`" not in en_md and "__" not in en_md:
        return translated, True

    whole = re.fullmatch(r"\s*\*\*([^*]+)\*\*\s*", en_md)
    if whole:
        return f"**{translated}**", True

    result = translated
    missed: list[str] = []

    for m in re.finditer(r"`([^`]+)`", en_md):
        en_span = m.group(1)
        tr = lookup(mapping, en_span, locale) or en_span
        if tr in result and f"`{tr}`" not in result:
            result = result.replace(tr, f"`{tr}`", 1)
        elif en_span in result and f"`{en_span}`" not in result:
            result = result.replace(en_span, f"`{en_span}`", 1)
        else:
            missed.append(f"`{en_span}`")

    for m in re.finditer(r"\*\*([^*]+)\*\*", en_md):
        en_span = m.group(1)
        tr = lookup(mapping, en_span, locale)
        placed = False
        if tr and tr in result and f"**{tr}**" not in result:
            result = result.replace(tr, f"**{tr}**", 1)
            placed = True
        elif en_span in result and f"**{en_span}**" not in result:
            result = result.replace(en_span, f"**{en_span}**", 1)
            placed = True
        elif tr:
            idx = result.lower().find(tr.lower())
            if idx >= 0:
                orig = result[idx : idx + len(tr)]
                if not result[max(0, idx - 2) : idx + len(tr) + 2].startswith("**"):
                    result = result[:idx] + f"**{orig}**" + result[idx + len(tr) :]
                    placed = True
        if not placed:
            missed.append(f"**{en_span}**")

    if missed:
        return result, False
    return result, True


def translate_markdown_line(
    line: str, mapping: dict, locale: str, rel_path: str
) -> str:
    if not line.strip():
        return line

    # Preserve leading list/quote/heading markers
    m = re.match(r"^(\s*(?:>\s+|[-*+]\s+|\d+\.\s+|#+\s+)?)(.*)$", line)
    if not m:
        return line
    prefix, body = m.group(1), m.group(2)
    if not body.strip():
        return line

    # Skip pure image / table separator / html
    if body.startswith("![") or body.startswith("<") or re.match(r"^\|?\s*:?-+:?\s*\|", body):
        return line

    # Table cells: translate cell by cell
    if body.startswith("|") and body.endswith("|"):
        cells = body.split("|")
        out_cells = []
        for cell in cells:
            raw = cell
            text = cell.strip()
            if not text or set(text) <= set("-: "):
                out_cells.append(raw)
                continue
            # preserve spacing
            lead = len(cell) - len(cell.lstrip(" "))
            trail = len(cell) - len(cell.rstrip(" "))
            tr = translate_inline_unit(text, mapping, locale, rel_path)
            out_cells.append(" " * lead + tr + " " * trail)
        return prefix + "|".join(out_cells)

    # Link-heavy lines: replace link labels when whole visible text matches
    def repl_link(mm: re.Match) -> str:
        label, url = mm.group(1), mm.group(2)
        plain = strip_md_inline(label)
        tr = lookup(mapping, plain, locale)
        if tr is None:
            return mm.group(0)
        new_label, fok = reapply_inline_format(label, tr, mapping, locale)
        if not fok:
            GAPS_FORMAT.append(f"{rel_path}: link label format: {label[:80]}")
        return f"[{new_label}]({url})"

    body_work = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl_link, body)

    # If body unchanged and no links translated, try whole-body lookup
    plain = strip_md_inline(body)
    # Remove leading emoji-ish noise for lookup? keep as-is
    tr = lookup(mapping, plain, locale)
    if tr is None:
        # try original body without md
        tr = lookup(mapping, body, locale)

    if tr is not None:
        # If we already rewrote links in body_work and plain equals full body, rebuild
        if "[" not in body or body_work == body:
            new_body, fok = reapply_inline_format(body, tr, mapping, locale)
            if not fok:
                GAPS_FORMAT.append(f"{rel_path}: partial format: {body[:100]}")
            return prefix + new_body
        # Mixed: prefer per-link; also try translate remaining text chunks
        return prefix + body_work

    # Partial: only links may have been translated
    if body_work != body:
        return prefix + body_work

    if len(plain) >= 12:
        GAPS_DOCS.append(f"{rel_path}: {plain[:120]}")
    return line


def translate_inline_unit(text: str, mapping: dict, locale: str, rel_path: str) -> str:
    plain = strip_md_inline(text)
    tr = lookup(mapping, plain, locale)
    if tr is None:
        return text
    new_t, fok = reapply_inline_format(text, tr, mapping, locale)
    if not fok:
        GAPS_FORMAT.append(f"{rel_path}: cell format: {text[:80]}")
    return new_t


def translate_markdown_file(
    src: Path, dest: Path, mapping: dict, locale: str, rel: str
) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if rel in ENGLISH_ONLY_DOCS:
        shutil.copy2(src, dest)
        return

    text = src.read_text(encoding="utf-8")
    # Split frontmatter
    fm = ""
    body = text
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            fm = text[: end + 4]
            body = text[end + 4 :]
            # translate title in frontmatter (always double-quote for YAML safety)
            def tr_title(m: re.Match) -> str:
                val = m.group(1).strip().strip("\"'")
                t = lookup(mapping, val, locale) or val
                escaped = t.replace("\\", "\\\\").replace('"', '\\"')
                return f'title: "{escaped}"'

            fm = re.sub(r"^title:\s*(.+)$", tr_title, fm, flags=re.M)

    lines = body.split("\n")
    out = [translate_markdown_line(ln, mapping, locale, rel) for ln in lines]
    dest.write_text(fm + "\n".join(out) + ("" if body.endswith("\n") or not out else ""), encoding="utf-8")


def translate_category_json(path: Path, mapping: dict, locale: str) -> None:
    data = json.loads(path.read_text(encoding="utf-8"))
    if "label" in data and isinstance(data["label"], str):
        tr = lookup(mapping, data["label"], locale)
        if tr:
            data["label"] = tr
        else:
            GAPS_DOCS.append(f"{path}: category label {data['label']}")
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def fill_json_messages(path: Path, mapping: dict, locale: str) -> None:
    if not path.exists():
        return
    data = json.loads(path.read_text(encoding="utf-8"))
    changed = False

    def walk(obj, key_path: str = ""):
        nonlocal changed
        if isinstance(obj, dict):
            if "message" in obj and isinstance(obj["message"], str):
                msg = obj["message"]
                tr = lookup(mapping, msg, locale)
                if tr:
                    if obj["message"] != tr:
                        obj["message"] = tr
                        changed = True
                else:
                    track = (
                        key_path.startswith("homepage.")
                        or key_path.startswith("item.label.")
                        or key_path.startswith("link.title.")
                        or key_path.startswith("link.item.label.")
                        or "sidebar.devicesSidebar" in key_path
                        or "sidebar.petoritySidebar" in key_path
                    )
                    if track and msg and len(msg) > 1:
                        if not re.search(
                            r"[äöüÄÖÜßàâéèêëïîôùûçÀÂÉÈÊËÏÎÔÙÛÇ]", msg
                        ):
                            GAPS_UI.append(f"{path.name}/{key_path}: {msg[:100]}")
            for k, v in obj.items():
                walk(v, k if not key_path else key_path)
        elif isinstance(obj, list):
            for v in obj:
                walk(v, key_path)

    # Top-level keys are translation ids
    if all(isinstance(v, dict) and "message" in v for v in data.values()):
        for k, v in data.items():
            walk(v, k)
    else:
        walk(data)
    if changed:
        path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def mirror_and_translate_docs(mapping: dict) -> None:
    for locale in LOCALES:
        dest_root = (
            ROOT
            / "i18n"
            / locale
            / "docusaurus-plugin-content-docs"
            / "current"
        )
        if dest_root.exists():
            shutil.rmtree(dest_root)
        dest_root.mkdir(parents=True, exist_ok=True)

        for src in DOCS_SRC.rglob("*"):
            if "backup" in src.parts:
                continue
            rel = src.relative_to(DOCS_SRC).as_posix()
            dest = dest_root / rel
            if src.is_dir():
                dest.mkdir(parents=True, exist_ok=True)
                continue
            if src.suffix == ".md":
                translate_markdown_file(src, dest, mapping, locale, rel)
            elif src.name == "_category_.json":
                shutil.copy2(src, dest)
                translate_category_json(dest, mapping, locale)
            else:
                dest.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(src, dest)


def write_gap_reports() -> None:
    reports = ROOT / "scripts" / "i18n-reports"
    reports.mkdir(parents=True, exist_ok=True)

    def uniq(items: list[str]) -> list[str]:
        seen = set()
        out = []
        for i in items:
            if i not in seen:
                seen.add(i)
                out.append(i)
        return out

    (reports / "i18n-gaps-ui.md").write_text(
        "# UI translation gaps\n\n"
        + "\n".join(f"- {x}" for x in uniq(GAPS_UI)[:500])
        + f"\n\nTotal unique: {len(uniq(GAPS_UI))}\n",
        encoding="utf-8",
    )
    (reports / "i18n-gaps-docs.md").write_text(
        "# Docs translation gaps (kept English)\n\n"
        + "\n".join(f"- {x}" for x in uniq(GAPS_DOCS)[:800])
        + f"\n\nTotal unique: {len(uniq(GAPS_DOCS))}\n",
        encoding="utf-8",
    )
    (reports / "i18n-gaps-format.md").write_text(
        "# Format mapping failures (kept English sentence)\n\n"
        + "\n".join(f"- {x}" for x in uniq(GAPS_FORMAT)[:500])
        + f"\n\nTotal unique: {len(uniq(GAPS_FORMAT))}\n",
        encoding="utf-8",
    )
    print(
        f"Gaps UI={len(uniq(GAPS_UI))} docs={len(uniq(GAPS_DOCS))} format={len(uniq(GAPS_FORMAT))}"
    )


def main() -> None:
    if not XLSX.exists():
        print("Excel not found:", XLSX, file=sys.stderr)
        sys.exit(1)
    mapping = load_excel()
    print(f"Loaded {len(mapping)} lookup keys from Excel")

    for locale in LOCALES:
        base = ROOT / "i18n" / locale
        fill_json_messages(base / "code.json", mapping, locale)
        fill_json_messages(
            base / "docusaurus-theme-classic" / "navbar.json", mapping, locale
        )
        fill_json_messages(
            base / "docusaurus-theme-classic" / "footer.json", mapping, locale
        )
        fill_json_messages(
            base / "docusaurus-plugin-content-docs" / "current.json", mapping, locale
        )
        print(f"Filled UI JSON for {locale}")

    mirror_and_translate_docs(mapping)
    write_gap_reports()
    print("Done.")


if __name__ == "__main__":
    main()
