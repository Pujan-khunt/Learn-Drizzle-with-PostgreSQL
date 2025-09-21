import iphoneImage from "@/public/iphone.jpg";
import macbookImage from "@/public/macbook.jpg";
import mouseImage from "@/public/mouse.jpg";
import { ShoppingCart, Star } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";

type FeatureProductCard = {
	id: number;
	productImage: StaticImageData;
	productName: string;
	ratingCount: string;
	ratingStars: number;
	productPrice: number;
	height: number;
	width: number;
};

const featuredProducts: FeatureProductCard[] = [
	{
		id: 1,
		productImage: macbookImage,
		productName: "Macbook M4 Pro",
		ratingCount: "89.6K",
		productPrice: 1799.99,
		ratingStars: 5,
		height: 1000,
		width: 600,
	},
	{
		id: 2,
		productImage: iphoneImage,
		productName: "Iphone 17 Pro",
		ratingCount: "29.7K",
		productPrice: 1299.99,
		ratingStars: 4,
		height: 500,
		width: 400,
	},
	{
		id: 3,
		productImage: mouseImage,
		productName: "Apple Magic Mouse",
		ratingCount: "7.6K",
		productPrice: 299.99,
		ratingStars: 4,
		height: 200,
		width: 300,
	},
];

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring" as const,
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

type FeatureProductCardProps = Omit<FeatureProductCard, "id">;

function FeatureProductCard({
	productImage,
	productName,
	ratingCount,
	ratingStars,
	productPrice,
	height,
	width,
}: FeatureProductCardProps) {
	return (
		<div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-shadow">
			<div className="bg-muted rounded-lg  mb-4 flex items-center justify-center">
				<Image
					className="text-muted-foreground text-sm"
					src={productImage}
					alt={"Featured product image"}
					height={height}
					width={width}
				/>
			</div>
			<h3 className="font-semibold mb-2">{productName}</h3>
			<div className="flex items-center gap-2 mb-2">
				<div className="flex">
					{[...Array(ratingStars)].map((_, idx) => (
						<Star
							key={idx}
							className="w-3 h-3 fill-yellow-400 text-yellow-400"
						/>
					))}
				</div>
				<span className="text-sm text-muted-foreground">({ratingCount})</span>
			</div>
			<div className="flex items-center justify-between">
				<span className="text-xl font-bold">₹{productPrice}</span>
				<Button size="sm">Add to Cart</Button>
			</div>
		</div>
	);
}

type BrandLogo = {
	id: number;
	logoSrc: string;
	alt: string;
	height: number;
	width: number;
};

const brandLogos: BrandLogo[] = [
	{
		id: 1,
		logoSrc: "https://html.tailus.io/blocks/customers/nike.svg",
		alt: "Nike Logo",
		height: 20,
		width: 20,
	},
	{
		id: 2,
		logoSrc: "https://html.tailus.io/blocks/customers/nvidia.svg",
		alt: "Nvidia Logo",
		height: 20,
		width: 20,
	},
	{
		id: 3,
		logoSrc: "https://html.tailus.io/blocks/customers/openai.svg",
		alt: "OpenAI Logo",
		height: 20,
		width: 20,
	},
	{
		id: 4,
		logoSrc: "https://html.tailus.io/blocks/customers/stripe.svg",
		alt: "Stripe Logo",
		height: 20,
		width: 20,
	},
	{
		id: 5,
		logoSrc: "https://html.tailus.io/blocks/customers/github.svg",
		alt: "GitHub Logo",
		height: 20,
		width: 20,
	},
	{
		id: 6,
		logoSrc: "https://html.tailus.io/blocks/customers/tailwindcss.svg",
		alt: "TailwindCSS Logo",
		height: 20,
		width: 20,
	},
	{
		id: 7,
		logoSrc: "https://html.tailus.io/blocks/customers/vercel.svg",
		alt: "Vercel Logo",
		height: 20,
		width: 20,
	},
	{
		id: 8,
		logoSrc: "https://html.tailus.io/blocks/customers/zapier.svg",
		alt: "Zapier Logo",
		height: 20,
		width: 20,
	},
];

type BrandLogoProps = Omit<BrandLogo, "id">;

function BrandLogo({ logoSrc, alt, height, width }: BrandLogoProps) {
	return (
		<div className="flex">
			<Image
				className="mx-auto h-7 w-fit dark:invert"
				src={logoSrc}
				alt={alt}
				height={height}
				width={width}
			/>
		</div>
	);
}

function HeroSection() {
	return (
		<>
			<main className="overflow-hidden">
				{/* Hero Section */}
				<section>
					<div className="relative pt-24">
						<div className="absolute inset-0 -z-10 size-full bg-background"></div>
						<div className="mx-auto max-w-5xl px-6">
							<div className="sm:mx-auto lg:mr-auto lg:mt-0">
								{/* Hero Heading */}
								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="h1"
									className="mt-8 max-w-2xl  text-5xl font-medium md:text-6xl lg:mt-16"
								>
									Shop Premium Products at Best Prices
								</TextEffect>

								{/* Hero Description */}
								<TextEffect
									per="line"
									preset="fade-in-blur"
									speedSegment={0.3}
									delay={0.5}
									as="p"
									className="mt-8 max-w-2xl text-pretty text-gray-200 text-lg"
								>
									Discover thousands of quality products with fast shipping and
									unbeatable prices. From electronics to fashion, find
									everything you need in one place.
								</TextEffect>

								<AnimatedGroup
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
									className="mt-12 flex items-center gap-2"
								>
									<div
										key={1}
										className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
									>
										<Button
											asChild
											size="lg"
											className="rounded-xl px-5 text-base"
										>
											<Link href="/products">
												<ShoppingCart className="mr-2 h-4 w-4" />
												<span className="text-nowrap">Start Shopping</span>
											</Link>
										</Button>
									</div>
								</AnimatedGroup>
							</div>
						</div>
						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75,
										},
									},
								},
								...transitionVariants,
							}}
						>
							<div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
								<div
									aria-hidden
									className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
								/>
								<div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
									<div className="bg-background aspect-15/8 relative rounded-2xl p-8">
										{/* Featured Product Cards */}
										<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
											{featuredProducts.map(
												(featuredProduct: FeatureProductCard) => (
													<FeatureProductCard
														key={featuredProduct.id}
														productImage={featuredProduct.productImage}
														productName={featuredProduct.productName}
														productPrice={featuredProduct.productPrice}
														ratingCount={featuredProduct.ratingCount}
														ratingStars={featuredProduct.ratingStars}
														height={featuredProduct.height}
														width={featuredProduct.width}
													/>
												),
											)}
										</div>
									</div>
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>

				{/* Brand Section */}
				<section className="bg-background pb-16 pt-16 md:pb-32">
					<div className="group relative m-auto max-w-5xl px-6">
						<div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
							<div className="blocktext-sm duration-150 hover:opacity-75">
								{/* Hover on brand component */}
								<span>
									{" "}
									Shop from trusted brands. Quality guaranteed by retailers
									like:
								</span>
							</div>
						</div>

						{/* Brand Logos */}
						<div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
							{brandLogos.map((brandLogo: BrandLogo) => (
								<BrandLogo
									key={brandLogo.id}
									logoSrc={brandLogo.logoSrc}
									alt={brandLogo.alt}
									height={brandLogo.height}
									width={brandLogo.width}
								/>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default HeroSection;
