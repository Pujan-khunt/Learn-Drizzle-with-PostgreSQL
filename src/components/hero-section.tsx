import { ChevronRight, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { HeroHeader } from "./header";

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

function Ratings() {
	return (
		<>
			{[...Array(5)].map((_, idx) => (
				<Star key={idx} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
			))}
		</>
	);
}

export default function HeroSection() {
	return (
		<>
			<HeroHeader />
			<main className="overflow-hidden">
				<section>
					<div className="relative pt-24">
						<div className="absolute inset-0 -z-10 size-full bg-background"></div>
						<div className="mx-auto max-w-5xl px-6">
							<div className="sm:mx-auto lg:mr-auto lg:mt-0">
								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="h1"
									className="mt-8 max-w-2xl  text-5xl font-medium md:text-6xl lg:mt-16"
								>
									Shop Premium Products at Best Prices
								</TextEffect>
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
									<Button
										key={2}
										asChild
										size="lg"
										variant="ghost"
										className="h-10.5 rounded-xl px-5 text-base"
									>
										<Link href="/categories">
											<span className="text-nowrap">Browse Categories</span>
										</Link>
									</Button>
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
										<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
											{/* Featured Product Cards */}
											<div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-shadow">
												<div className="bg-muted rounded-lg h-32 mb-4 flex items-center justify-center">
													<span className="text-muted-foreground text-sm">
														Product Image
													</span>
												</div>
												<h3 className="font-semibold mb-2">
													Premium Headphones
												</h3>
												<div className="flex items-center gap-2 mb-2">
													<div className="flex">
														<Ratings />
													</div>
													<span className="text-sm text-muted-foreground">
														(2.4k)
													</span>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-xl font-bold">$199.99</span>
													<Button size="sm">Add to Cart</Button>
												</div>
											</div>

											<div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-shadow">
												<div className="bg-muted rounded-lg h-32 mb-4 flex items-center justify-center">
													<span className="text-muted-foreground text-sm">
														Product Image
													</span>
												</div>
												<h3 className="font-semibold mb-2">Smart Watch Pro</h3>
												<div className="flex items-center gap-2 mb-2">
													<div className="flex">
														<Ratings />
													</div>
													<span className="text-sm text-muted-foreground">
														(1.8k)
													</span>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-xl font-bold">$299.99</span>
													<Button size="sm">Add to Cart</Button>
												</div>
											</div>

											<div className="bg-card border rounded-xl p-4 hover:shadow-lg transition-shadow">
												<div className="bg-muted rounded-lg h-32 mb-4 flex items-center justify-center">
													<span className="text-muted-foreground text-sm">
														Product Image
													</span>
												</div>
												<h3 className="font-semibold mb-2">Wireless Speaker</h3>
												<div className="flex items-center gap-2 mb-2">
													<div className="flex">
														<Ratings />
														<Star className="w-3 h-3 text-gray-300" />
													</div>
													<span className="text-sm text-muted-foreground">
														(956)
													</span>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-xl font-bold">$89.99</span>
													<Button size="sm">Add to Cart</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>
				<section className="bg-background pb-16 pt-16 md:pb-32">
					<div className="group relative m-auto max-w-5xl px-6">
						<div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
							<Link
								href="/brands"
								className="block text-sm duration-150 hover:opacity-75"
							>
								<span>
									{" "}
									Shop from trusted brands. Quality guaranteed by retailers
									like:
								</span>

								<ChevronRight className="ml-1 inline-block size-3" />
							</Link>
						</div>
						<div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
							<div className="flex">
								<Image
									className="mx-auto h-5 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/nvidia.svg"
									alt="Nvidia Logo"
									height="20"
									width={20}
								/>
							</div>

							<div className="flex">
								<Image
									className="mx-auto h-4 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/column.svg"
									alt="Column Logo"
									height="16"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									className="mx-auto h-4 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/github.svg"
									alt="GitHub Logo"
									height="16"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									className="mx-auto h-5 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/nike.svg"
									alt="Nike Logo"
									height="20"
									width={20}
								/>
							</div>
							<div className="flex">
								<Image
									className="mx-auto h-5 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
									alt="Lemon Squeezy Logo"
									height="20"
									width={20}
								/>
							</div>
							<div className="flex">
								<Image
									className="mx-auto h-4 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/laravel.svg"
									alt="Laravel Logo"
									height="16"
									width={16}
								/>
							</div>
							<div className="flex">
								<Image
									className="mx-auto h-7 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/lilly.svg"
									alt="Lilly Logo"
									height="28"
									width={28}
								/>
							</div>

							<div className="flex">
								<Image
									className="mx-auto h-6 w-fit dark:invert"
									src="https://html.tailus.io/blocks/customers/openai.svg"
									alt="OpenAI Logo"
									height="24"
									width={24}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
