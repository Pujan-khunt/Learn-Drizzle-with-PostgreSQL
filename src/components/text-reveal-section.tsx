import { TextReveal } from "@/components/ui/text-reveal";

const TextRevealSection = () => {
	return (
		<section className="dark bg-background my-0 ">
			<div className=" flex flex-col items-center justify-center">
				<TextReveal className="font-medium">
					ShopSphere is the premier e-commerce platform designed to connect
					customers with premium products from trusted sellers worldwide.
					Discover quality, convenience, and exceptional shopping experiences.
				</TextReveal>
			</div>
		</section>
	);
};

export { TextRevealSection };
