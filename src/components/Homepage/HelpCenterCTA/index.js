import React from 'react';
import Link from '@docusaurus/Link';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

const cards = [
	{
		title: 'Devices',
		subtitle: 'PHAST 1 Hardware',
		description:
			'Setup guides, battery & charging, GPS, LED indicators, warranty, and returns for your WAGGURACY device.',
		href: DOC_PATHS.devicesIntro,
	},
	{
		title: 'WAGGURACY App',
		subtitle: 'Mobile Application',
		description:
			'Account management, live tracking, habit monitoring, virtual fences, alerts, and troubleshooting.',
		href: DOC_PATHS.appIntro,
	},
];

export default function HelpCenterCTA() {
	return (
		<section className={styles.section} aria-labelledby="help-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<h2 id="help-heading" className={styles.sectionTitle}>
						Need help getting started?
					</h2>
					<p className={styles.sectionSubtitle}>
						Browse our Help Center for step-by-step guides on your device and
						app.
					</p>
				</div>
				<div className={styles.cardGrid}>
					{cards.map((card) => (
						<Link
							key={card.href}
							to={card.href}
							className={styles.card}>
							<p className={styles.cardEyebrow}>{card.subtitle}</p>
							<h3 className={styles.cardTitle}>{card.title}</h3>
							<p className={styles.cardDescription}>{card.description}</p>
							<span className={styles.cardLink}>Browse docs &rarr;</span>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
