import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
	{
		key: 1,
		title: 'Getting Started',
		src: require('@site/static/img/petority_getting_started.png').default,
		href: '/docs/devices/getting-started/getting-started',
		description: <>What is Petority?</>,
	},
	{
		key: 2,
		title: 'Tracking Range',
		src: require('@site/static/img/petority_tracking_range.png').default,
		href: '/docs/devices/network-bluetooth/tracking-range',
		description: <>How Far Can It Track My Dog?</>,
	},
	{
		key: 3,
		title: 'Attaching to the Collar',
		src: require('@site/static/img/petority_attaching_collar.png').default,
		href: '/docs/devices/general-information/attaching',
		description: <>How to Properly Wear Petority Tag?</>,
	},
	{
		key: 4,
		title: 'LIVE Tracking',
		src: require('@site/static/img/petority_living_tracking.png').default,
		href: '/docs/petority/features/live-tracking',
		description: <>How to use Real-time Location Tracking?</>,
	},
	{
		key: 5,
		title: 'Health Monitoring',
		src: require('@site/static/img/petority_health_monitoring.png').default,
		href: '/docs/petority/features/health-monitoring',
		description: (
			<>How to Track Your Pet's Well-being with Petority's Health Feature?</>
		),
	},
	{
		key: 6,
		title: 'Fence',
		src: require('@site/static/img/petority_fence.png').default,
		href: '/docs/petority/features/Fence',
		description: <>How do I create a virtual fence for my pet?</>,
	},
];

function Feature({ src, href, title, description }) {
	return (
		<div className={clsx('col col--4 margin-top--xl')}>
			<Link to={href} className={styles.linkColor}>
				<div className="text--center">
					<img src={src} className={styles.featureSvg} role="img" />
				</div>
				<div className="text--center padding-horiz--md">
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
			</Link>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={props.href} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
