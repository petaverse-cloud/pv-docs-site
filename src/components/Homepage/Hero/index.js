import React from 'react';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
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
						<p className={styles.eyebrow}>
							<Translate id="homepage.hero.eyebrow">
								Pet tracking, reimagined
							</Translate>
						</p>
						<h1 className={styles.title}>{siteConfig.title}</h1>
						<p className={styles.tagline}>
							<Translate id="homepage.hero.tagline">
								The next generation of pet tracking
							</Translate>
						</p>
						<p className={styles.valueProp}>
							<Translate id="homepage.hero.valueProp">
								Know More, Worry Less. Powered by Accuracy, Driven by Love.
							</Translate>
						</p>
						<div className={styles.ctaGroup}>
							<Link className={styles.ctaPrimary} to="#download">
								<Translate id="homepage.hero.downloadApp">
									Download App
								</Translate>
							</Link>
							<Link
								className={styles.ctaSecondary}
								to={DOC_PATHS.appIntro}>
								<Translate id="homepage.hero.exploreHelp">
									Explore Help Center
								</Translate>
							</Link>
						</div>
					</div>
					<div className={styles.heroVisual}>
						<img
							src={require('@site/static/img/wagguracy_living_tracking.png')
								.default}
							alt={translate({
								id: 'homepage.hero.imageAlt',
								message:
									'WAGGURACY app showing real-time pet location on a map',
							})}
							className={styles.heroImage}
						/>
					</div>
				</div>
			</div>
		</header>
	);
}
