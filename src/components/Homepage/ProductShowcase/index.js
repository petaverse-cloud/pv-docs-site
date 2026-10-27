import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

export default function ProductShowcase() {
	const highlights = [
		{
			title: (
				<Translate id="homepage.product.lightweight.title">
					Lightweight Design
				</Translate>
			),
			description: (
				<Translate id="homepage.product.lightweight.description">
					Polycarbonate construction keeps PHAST 1 comfortable for pets of all
					sizes without excessive burden.
				</Translate>
			),
		},
		{
			title: (
				<Translate id="homepage.product.waterproof.title">
					Waterproof &amp; Dustproof
				</Translate>
			),
			description: (
				<Translate id="homepage.product.waterproof.description">
					Built to function seamlessly in rainy or humid conditions, protecting
					the device from moisture and dust.
				</Translate>
			),
		},
		{
			title: (
				<Translate id="homepage.product.gps.title">Real-time GPS</Translate>
			),
			description: translate({
				id: 'homepage.product.gps.description',
				message:
					"Reliable GPS signals and network coverage keep you informed about your pet's location at all times.",
			}),
		},
		{
			title: (
				<Translate id="homepage.product.led.title">
					LED Status Indicators
				</Translate>
			),
			description: (
				<Translate id="homepage.product.led.description">
					Clear LED lights show charging, pairing, and device status at a
					glance.
				</Translate>
			),
		},
	];

	return (
		<section className={styles.section} aria-labelledby="product-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<p className={styles.eyebrow}>
						<Translate id="homepage.product.eyebrow">Hardware</Translate>
					</p>
					<h2 id="product-heading" className={styles.sectionTitle}>
						WAGGURACY PHAST 1
					</h2>
					<p className={styles.sectionSubtitle}>
						{translate({
							id: 'homepage.product.sectionSubtitle',
							message:
								"A sleek, minimalist wearable designed to track your pet's habit and activity — crafted for comfort, built for durability.",
						})}
					</p>
				</div>

				<div className={styles.productVisual}>
					<img
						src={require('@site/static/img/devices/PHAST-1.png').default}
						alt={translate({
							id: 'homepage.product.imageAlt',
							message: 'WAGGURACY PHAST 1 pet tracking device',
						})}
						className={styles.productImage}
					/>
				</div>

				<div className={styles.highlights}>
					{highlights.map((item, idx) => (
						<div key={idx} className={styles.highlightCard}>
							<h3 className={styles.highlightTitle}>{item.title}</h3>
							<p className={styles.highlightDescription}>{item.description}</p>
						</div>
					))}
				</div>

				<div className={styles.ctaWrapper}>
					<Link className={styles.ctaButton} to={DOC_PATHS.devicesIntro}>
						<Translate id="homepage.product.viewDocs">
							View Device Docs
						</Translate>
					</Link>
				</div>
			</div>
		</section>
	);
}
