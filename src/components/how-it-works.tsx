"use client";
import { Heart, Search, ShoppingCart } from "lucide-react";

import { motion } from "motion/react";

const HowItWorks = () => {
	return (
		<section className="" id="how-it-works">
			<div className="mx-auto max-w-7xl px-0 sm:px-8">
				<div className="container max-w-6xl px-4">
					<div className="mx-auto flex  max-w-4xl flex-col  gap-6 ">
						<div className="mb-2 max-w-4xl">
							<motion.h2
								initial={{ opacity: 0, filter: "blur(4px)" }}
								whileInView={{ opacity: 1, filter: "blur(0px)" }}
								transition={{ duration: 0.6, delay: 0.1 }}
								viewport={{ once: true }}
								className="text-foreground text-balance text-3xl font-semibold md:text-5xl"
							>
								<span className="text-muted-foreground">
									Shop Premium Products with
								</span>{" "}
								Smart Commerce Experience
							</motion.h2>
						</div>
						<p className="text-muted-foreground max-w-[30rem] text-balance text-left text-base leading-snug tracking-wide sm:text-lg">
							Discover, compare, and purchase premium products with our
							intelligent shopping platform and seamless checkout.
						</p>
					</div>
				</div>
				<div className="relative mt-16 aspect-[1.2/1] overflow-hidden sm:-right-[10%] sm:right-auto sm:mt-16 sm:aspect-[2.788990826/1]">
					<div
						aria-hidden
						className="bg-linear-to-b to-background absolute inset-0 z-40 from-transparent from-35% "
					/>
					<div className="absolute left-[8%] top-[11%] z-10 aspect-[0.7/1] w-[80%] sm:left-[4%] sm:w-[45%]">
						<div className="size-full [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
							<div className="block size-full object-cover object-left bg-card border rounded-lg p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold">Product Catalog</h3>
									<Search className="h-5 w-5 text-muted-foreground" />
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="bg-muted/20 rounded-md p-3">
										<div className="w-full h-16 bg-muted/40 rounded mb-2"></div>
										<div className="h-3 bg-muted/40 rounded mb-1"></div>
										<div className="h-2 bg-muted/40 rounded w-3/4"></div>
									</div>
									<div className="bg-muted/20 rounded-md p-3">
										<div className="w-full h-16 bg-muted/40 rounded mb-2"></div>
										<div className="h-3 bg-muted/40 rounded mb-1"></div>
										<div className="h-2 bg-muted/40 rounded w-3/4"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute left-[70%] top-0 z-20 aspect-[0.7/1] w-[73%] -translate-x-1/2 sm:left-1/2 sm:w-[38%]">
						<div className="size-full shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)] [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
							<div className="block size-full object-cover object-left bg-card border rounded-lg p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold">Shopping Cart</h3>
									<ShoppingCart className="h-5 w-5 text-muted-foreground" />
								</div>
								<div className="space-y-3">
									<div className="flex items-center gap-3 p-2 bg-muted/20 rounded">
										<div className="w-12 h-12 bg-muted/40 rounded"></div>
										<div className="flex-1">
											<div className="h-3 bg-muted/40 rounded mb-1"></div>
											<div className="h-2 bg-muted/40 rounded w-1/2"></div>
										</div>
									</div>
									<div className="flex items-center gap-3 p-2 bg-muted/20 rounded">
										<div className="w-12 h-12 bg-muted/40 rounded"></div>
										<div className="flex-1">
											<div className="h-3 bg-muted/40 rounded mb-1"></div>
											<div className="h-2 bg-muted/40 rounded w-1/2"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute -right-[45%] top-[3%] z-30 aspect-[0.7/1] w-[85%] sm:-right-[2%] sm:w-[50%]">
						<div className="size-full shadow-[-25px_0px_20px_0px_rgba(0,0,0,.04)] [transform:rotateY(-30deg)_rotateX(-18deg)_rotate(-4deg)]">
							<div className="block size-full object-cover object-left bg-card border rounded-lg p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-semibold">User Account</h3>
									<Heart className="h-5 w-5 text-muted-foreground" />
								</div>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 bg-muted/40 rounded-full"></div>
										<div>
											<div className="h-3 bg-muted/40 rounded mb-1 w-20"></div>
											<div className="h-2 bg-muted/40 rounded w-16"></div>
										</div>
									</div>
									<div className="space-y-2">
										<div className="h-3 bg-muted/40 rounded"></div>
										<div className="h-3 bg-muted/40 rounded w-4/5"></div>
										<div className="h-3 bg-muted/40 rounded w-3/5"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { HowItWorks };
