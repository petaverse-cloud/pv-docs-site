import React from 'react';
import Layout from '@theme/Layout';
import {translate} from '@docusaurus/Translate';
import Hero from '@site/src/components/Homepage/Hero';
import FeatureShowcase from '@site/src/components/Homepage/FeatureShowcase';
import ProductShowcase from '@site/src/components/Homepage/ProductShowcase';
import DownloadSection from '@site/src/components/Homepage/DownloadSection';
import HelpCenterCTA from '@site/src/components/Homepage/HelpCenterCTA';

export default function Home() {
	const metaDescription = translate({
		id: 'homepage.meta.description',
		message:
			'Know More, Worry Less. Powered by Accuracy, Driven by Love.',
	});

	return (
		<Layout title="WAGGURACY" description={metaDescription}>
			<Hero />
			<main>
				<FeatureShowcase />
				<ProductShowcase />
				<DownloadSection />
				<HelpCenterCTA />
			</main>
		</Layout>
	);
}
