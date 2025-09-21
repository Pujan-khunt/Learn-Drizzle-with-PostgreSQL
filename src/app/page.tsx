import FeaturesSection from "@/components/features-section";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { TextRevealSection } from "@/components/text-reveal-section";

const HomePage = () => {
	return (
		<div>
			<HeroHeader />
			<HeroSection />
			<FeaturesSection />
			<TextRevealSection />
		</div>
	);
};

export default HomePage;
