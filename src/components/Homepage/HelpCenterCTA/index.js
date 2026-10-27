import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

export default function HelpCenterCTA() {
	return (
		<section className={styles.section} aria-labelledby="help-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<h2 id="help-heading" className={styles.sectionTitle}>
						<Translate id="homepage.help.sectionTitle">
							Need help getting started?
						</Translate>
					</h2>
					<p className={styles.sectionSubtitle}>
						<Translate id="homepage.help.sectionSubtitle">
							Browse our Help Center for step-by-step guides on your device and
							app.
						</Translate>
					</p>
				</div>
				<div className={styles.cardGrid}>
					<Link to={DOC_PATHS.devicesIntro} className={styles.card}>
						<p className={styles.cardEyebrow}>
							<Translate id="homepage.help.devices.subtitle">
								PHAST 1 Hardware
							</Translate>
						</p>
						<h3 className={styles.cardTitle}>
							<Translate id="homepage.help.devices.title">Devices</Translate>
						</h3>
						<p className={styles.cardDescription}>
							<Translate id="homepage.help.devices.description">
								Setup guides, battery &amp; charging, GPS, LED indicators,
								warranty, and returns for your WAGGURACY device.
							</Translate>
						</p>
						<span className={styles.cardLink}>
							<Translate id="homepage.help.browseDocs">Browse docs</Translate>
							{' \u2192'}
						</span>
					</Link>
					<Link to={DOC_PATHS.appIntro} className={styles.card}>
						<p className={styles.cardEyebrow}>
							<Translate id="homepage.help.app.subtitle">
								Mobile Application
							</Translate>
						</p>
						<h3 className={styles.cardTitle}>
							<Translate id="homepage.help.app.title">WAGGURACY App</Translate>
						</h3>
						<p className={styles.cardDescription}>
							<Translate id="homepage.help.app.description">
								Account management, live tracking, habit tracking, virtual
								fences, alerts, and troubleshooting.
							</Translate>
						</p>
						<span className={styles.cardLink}>
							<Translate id="homepage.help.browseDocs">Browse docs</Translate>
							{' \u2192'}
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
