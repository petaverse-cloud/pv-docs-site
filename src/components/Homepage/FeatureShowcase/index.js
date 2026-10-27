import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

function FeatureRow({title, description, image, alt, href, reversed}) {
	return (
		<div className={clsx(styles.row, reversed && styles.rowReversed)}>
			<div className={styles.imageCol}>
				<img src={image} alt={alt} className={styles.featureImage} />
			</div>
			<div className={styles.textCol}>
				<h3 className={styles.featureTitle}>{title}</h3>
				<p className={styles.featureDescription}>{description}</p>
				<Link to={href} className={styles.learnMore}>
					<Translate id="homepage.features.learnMore">Learn more</Translate>
					{' \u2192'}
				</Link>
			</div>
		</div>
	);
}

export default function FeatureShowcase() {
	const features = [
		{
			title: (
				<Translate id="homepage.features.liveTracking.title">
					LIVE Tracking
				</Translate>
			),
			description: translate({
				id: 'homepage.features.liveTracking.description',
				message:
					"Track your pet's real-time location with strong GPS and reliable network coverage. View movement paths, get immediate alerts when they leave safe zones, and enjoy peace of mind wherever you are.",
			}),
			image: require('@site/static/img/wagguracy_living_tracking.png').default,
			alt: translate({
				id: 'homepage.features.liveTracking.alt',
				message: 'WAGGURACY app live tracking map with pet location',
			}),
			href: DOC_PATHS.liveTracking,
		},
		{
			title: (
				<Translate id="homepage.features.habitTracking.title">
					Habit Tracking
				</Translate>
			),
			description: translate({
				id: 'homepage.features.habitTracking.description',
				message:
					"Review your pet's habit data over daily, weekly, and monthly views. Trace their activities, understand daily routines, and stay informed about exercise levels and pulse trends.",
			}),
			image: require('@site/static/img/wagguracy_health_monitoring.png').default,
			alt: translate({
				id: 'homepage.features.habitTracking.alt',
				message: 'WAGGURACY app habit monitoring dashboard',
			}),
			href: DOC_PATHS.healthMonitoring,
			reversed: true,
		},
		{
			title: (
				<Translate id="homepage.features.virtualFence.title">
					Virtual Fence
				</Translate>
			),
			description: translate({
				id: 'homepage.features.virtualFence.description',
				message:
					'Set up virtual fences to define safe areas for your pet. Receive instant notifications on your phone if they leave designated zones, keeping them safe and you informed.',
			}),
			image: require('@site/static/img/wagguracy_fence.png').default,
			alt: translate({
				id: 'homepage.features.virtualFence.alt',
				message: 'WAGGURACY app virtual fence alert screen',
			}),
			href: DOC_PATHS.fence,
		},
	];

	return (
		<section className={styles.section} aria-labelledby="features-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<h2 id="features-heading" className={styles.sectionTitle}>
						<Translate id="homepage.features.sectionTitle">
							Everything you need to keep them safe
						</Translate>
					</h2>
					<p className={styles.sectionSubtitle}>
						<Translate id="homepage.features.sectionSubtitle">
							Cutting-edge features that ensure the habit, safety, and happiness
							for your furry friends.
						</Translate>
					</p>
				</div>
				<div className={styles.featureList}>
					{features.map((feature) => (
						<FeatureRow key={feature.href} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
}
