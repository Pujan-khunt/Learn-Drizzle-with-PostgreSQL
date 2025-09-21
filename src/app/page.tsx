import FeaturesSection from "@/components/features-section";
import { Footer2 } from "@/components/footer-section";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { TextRevealSection } from "@/components/text-reveal-section";

const HomePage = () => {
	return (
		<div>
			<HeroHeader />
			<HeroSection />
			<FeaturesSection />
			<TextRevealSection />
			<HowItWorks />
			<Footer2 />
		</div>
	);
};

export default HomePage;
