import FeaturesSection from "@/components/features-section";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

const HomePage = () => {
	return (
		<div>
			<HeroHeader />
			<HeroSection />
			<FeaturesSection />
		</div>
	);
};

export default HomePage;
