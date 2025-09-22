import FeaturesSection from "@/components/features-section";
import { Footer2 } from "@/components/footer-section";
import HeroSection from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import IntegrationSection from "@/components/integration-section";
import PricingSection from "@/components/pricing-section";
import { StatsSection } from "@/components/stats-section";
import { TextRevealSection } from "@/components/text-reveal-section";

const HomePage = () => {
	return (
		<main className="w-full">
			<HeroSection />
			<FeaturesSection />
			<StatsSection />
			<TextRevealSection />
			<HowItWorks />
			<PricingSection />
			<IntegrationSection />
			<Footer2 />
		</main>
	);
};

export default HomePage;
