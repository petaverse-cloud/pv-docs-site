import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {DOC_PATHS} from '@site/src/components/Homepage/constants';
import styles from './styles.module.css';

export default function Hero() {
	const {siteConfig} = useDocusaurusContext();

	return (
		<header className={styles.hero}>
			<div className={styles.heroGlow} aria-hidden="true" />
			<div className={styles.heroGrid} aria-hidden="true" />
			<div className="container">
				<div className={styles.heroInner}>
					<div className={styles.heroContent}>
						<p className={styles.eyebrow}>Pet tracking, reimagined</p>
						<h1 className={styles.title}>{siteConfig.title}</h1>
						<p className={styles.tagline}>{siteConfig.tagline}</p>
						<p className={styles.valueProp}>
							Know More, Worry Less. Powered by Accuracy, Driven by Love.
						</p>
						<div className={styles.ctaGroup}>
							<Link className={styles.ctaPrimary} to="#download">
								Download App
							</Link>
							<Link
								className={styles.ctaSecondary}
								to={DOC_PATHS.appIntro}>
								Explore Help Center
							</Link>
						</div>
					</div>
					<div className={styles.heroVisual}>
						<img
							src={require('@site/static/img/wagguracy_living_tracking.png')
								.default}
							alt="WAGGURACY app showing real-time pet location on a map"
							className={styles.heroImage}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
