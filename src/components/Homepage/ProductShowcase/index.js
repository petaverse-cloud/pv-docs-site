import React from 'react';
import Link from '@docusaurus/Link';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

const highlights = [
	{
		title: 'Lightweight Design',
		description:
			'Polycarbonate construction keeps PHAST 1 comfortable for pets of all sizes without excessive burden.',
	},
	{
		title: 'Waterproof & Dustproof',
		description:
			'Built to function seamlessly in rainy or humid conditions, protecting the device from moisture and dust.',
	},
	{
		title: 'Real-time GPS',
		description:
			'Reliable GPS signals and network coverage keep you informed about your pet\'s location at all times.',
	},
	{
		title: 'LED Status Indicators',
		description:
			'Clear LED lights show charging, pairing, and device status at a glance.',
	},
];

export default function ProductShowcase() {
	return (
		<section className={styles.section} aria-labelledby="product-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<p className={styles.eyebrow}>Hardware</p>
					<h2 id="product-heading" className={styles.sectionTitle}>
						WAGGURACY PHAST 1
					</h2>
					<p className={styles.sectionSubtitle}>
						A sleek, minimalist wearable designed to monitor your pet&apos;s
						habit and activity — crafted for comfort, built for durability.
					</p>
				</div>

				<div className={styles.productVisual}>
					<img
						src={require('@site/static/img/devices/PHAST-1.png').default}
						alt="WAGGURACY PHAST 1 pet tracking device"
						className={styles.productImage}
					/>
				</div>

				<div className={styles.highlights}>
					{highlights.map((item) => (
						<div key={item.title} className={styles.highlightCard}>
							<h3 className={styles.highlightTitle}>{item.title}</h3>
							<p className={styles.highlightDescription}>
								{item.description}
							</p>
						</div>
					))}
				</div>

				<div className={styles.ctaWrapper}>
					<Link
						className={styles.ctaButton}
						to={DOC_PATHS.devicesIntro}>
						View Device Docs
					</Link>
				</div>
			</div>
		</section>
	);
}
