import React from 'react';
import Link from '@docusaurus/Link';
import {APP_STORE_URL, GOOGLE_PLAY_URL} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

export default function DownloadSection() {
	return (
		<section
			id="download"
			className={styles.section}
			aria-labelledby="download-heading">
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.content}>
						<h2 id="download-heading" className={styles.title}>
							Download WAGGURACY
						</h2>
						<p className={styles.description}>
							Track location, monitor habits, and keep your pets safe — all
							from your phone. Available on iOS and Android.
						</p>
						<ul className={styles.requirements}>
							<li>iPhone with iOS 11 or above</li>
							<li>Android 7.0+ with Google Play Services</li>
						</ul>
					</div>
					<div className={styles.badges}>
						<Link
							href={APP_STORE_URL}
							className={styles.badgeLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Download WAGGURACY on the Apple App Store">
							<img
								src="/img/app-store-badge.svg"
								alt=""
								className={styles.badge}
								aria-hidden="true"
							/>
						</Link>
						<Link
							href={GOOGLE_PLAY_URL}
							className={styles.badgeLink}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Download WAGGURACY on Google Play">
							<img
								src="/img/google-play-badge.svg"
								alt=""
								className={styles.badge}
								aria-hidden="true"
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
