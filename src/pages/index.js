import React from 'react';
import Layout from '@theme/Layout';
import Hero from '@site/src/components/Homepage/Hero';
import FeatureShowcase from '@site/src/components/Homepage/FeatureShowcase';
import ProductShowcase from '@site/src/components/Homepage/ProductShowcase';
import DownloadSection from '@site/src/components/Homepage/DownloadSection';
import HelpCenterCTA from '@site/src/components/Homepage/HelpCenterCTA';

const META_DESCRIPTION =
	'Know More, Worry Less. WAGGURACY is the next generation of pet tracking — real-time location, habit monitoring, virtual fences, and pulse tracking for your furry friends.';

export default function Home() {
	return (
		<Layout title="WAGGURACY" description={META_DESCRIPTION}>
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
