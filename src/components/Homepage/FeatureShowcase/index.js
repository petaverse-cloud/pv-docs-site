import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

const features = [
	{
		title: 'LIVE Tracking',
		description:
			'Track your pet\'s real-time location with strong GPS and reliable network coverage. View movement paths, get immediate alerts when they leave safe zones, and enjoy peace of mind wherever you are.',
		image: require('@site/static/img/wagguracy_living_tracking.png').default,
		alt: 'WAGGURACY app live tracking map with pet location',
		href: DOC_PATHS.liveTracking,
	},
	{
		title: 'Habit Monitoring',
		description:
			'Review your pet\'s habit data over daily, weekly, and monthly views. Trace their activities, understand daily routines, and stay informed about exercise levels and pulse trends.',
		image: require('@site/static/img/wagguracy_health_monitoring.png').default,
		alt: 'WAGGURACY app habit monitoring dashboard',
		href: DOC_PATHS.healthMonitoring,
		reversed: true,
	},
	{
		title: 'Virtual Fence',
		description:
			'Set up virtual fences to define safe areas for your pet. Receive instant notifications on your phone if they leave designated zones, keeping them safe and you informed.',
		image: require('@site/static/img/wagguracy_fence.png').default,
		alt: 'WAGGURACY app virtual fence alert screen',
		href: DOC_PATHS.fence,
	},
	// {
	// 	title: 'Real-time Pulse',
	// 	description:
	// 		'Monitor your pet\'s pulse in real time and track daily exercise. Receive alerts if irregularities are detected, helping you spot potential health issues early on.',
	// 	image: require('@site/static/img/get-to-know/Exercise-Monitoring-and-Real-time-Heart-Rate-Tracking.jpg')
	// 		.default,
	// 	alt: 'WAGGURACY app exercise and pulse monitoring',
	// 	href: DOC_PATHS.heartRate,
	// 	reversed: true,
	// },
];

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
					Learn more &rarr;
				</Link>
			</div>
		</div>
	);
}

export default function FeatureShowcase() {
	return (
		<section className={styles.section} aria-labelledby="features-heading">
			<div className="container">
				<div className={styles.sectionHeader}>
					<h2 id="features-heading" className={styles.sectionTitle}>
						Everything you need to keep them safe
					</h2>
					<p className={styles.sectionSubtitle}>
						Cutting-edge features that ensure the habit, safety, and happiness
						for your furry friends.
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
