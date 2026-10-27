import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';
import {APP_STORE_URL, GOOGLE_PLAY_URL} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

export default function DownloadSection() {
	const appStoreBadge = useBaseUrl('/img/app-store-badge.svg');
	const googlePlayBadge = useBaseUrl('/img/google-play-badge.svg');

	return (
		<section
			id="download"
			className={styles.section}
			aria-labelledby="download-heading">
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.content}>
						<h2 id="download-heading" className={styles.title}>
							<Translate id="homepage.download.title">
								Download WAGGURACY
							</Translate>
						</h2>
						<p className={styles.description}>
							<Translate id="homepage.download.description">
								Track location, track habits, and keep your pets safe — all from
								your phone. Available on iOS and Android.
							</Translate>
						</p>
						<ul className={styles.requirements}>
							<li>
								<Translate id="homepage.download.ios">
									iPhone with iOS 16 or above
								</Translate>
							</li>
							<li>
								<Translate id="homepage.download.android">
									Android 5.1+ with Google Play Services
								</Translate>
							</li>
						</ul>
					</div>
					<div className={styles.badges}>
						<a
							href={APP_STORE_URL}
							className={styles.badgeLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={translate({
								id: 'homepage.download.appStoreAria',
								message: 'Download WAGGURACY on the Apple App Store',
							})}>
							<img
								src={appStoreBadge}
								alt=""
								className={styles.badge}
								width={156}
								height={52}
								aria-hidden="true"
							/>
						</a>
						<a
							href={GOOGLE_PLAY_URL}
							className={styles.badgeLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={translate({
								id: 'homepage.download.googlePlayAria',
								message: 'Download WAGGURACY on Google Play',
							})}>
							<img
								src={googlePlayBadge}
								alt=""
								className={styles.badge}
								width={156}
								height={52}
								aria-hidden="true"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
