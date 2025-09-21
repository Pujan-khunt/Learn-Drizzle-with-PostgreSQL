"use client";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

// Mock product data - in real app this would come from your database
const products = [
	{
		id: 1,
		name: "Wireless Bluetooth Headphones",
		price: 79.99,
		originalPrice: 99.99,
		rating: 4.5,
		reviews: 1250,
		image: "/api/placeholder/300/300",
		badge: "Best Seller",
	},
	{
		id: 2,
		name: "Premium Coffee Maker",
		price: 149.99,
		originalPrice: null,
		rating: 4.7,
		reviews: 890,
		image: "/api/placeholder/300/300",
		badge: "Popular",
	},
	{
		id: 3,
		name: "Smart Fitness Tracker",
		price: 199.99,
		originalPrice: 249.99,
		rating: 4.3,
		reviews: 2100,
		image: "/api/placeholder/300/300",
		badge: null,
	},
];

export default function PricingSection() {
	return (
		<section id="pricing" className="py-16 max-w-5xl mx-auto md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl space-y-6 text-center">
					<motion.h2
						initial={{ opacity: 0, filter: "blur(4px)" }}
						whileInView={{ opacity: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-foreground text-balance text-3xl font-semibold md:text-5xl"
					>
						<span className="text-muted-foreground">
							Discover Amazing Products at
						</span>{" "}
						Unbeatable Prices
					</motion.h2>
				</div>
				<p className="text-muted-foreground mx-auto mt-8 max-w-[30rem] text-balance text-center text-base leading-snug tracking-wide sm:text-lg">
					Shop the latest tech, home essentials, and lifestyle products with
					fast shipping and great deals.
				</p>
			</div>

			<div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
				{products.map((product, _index) => (
					<Card
						key={product.id}
						className="flex flex-col hover:shadow-lg transition-shadow"
					>
						{product.badge && (
							<span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
								{product.badge}
							</span>
						)}

						<CardHeader className="pb-2">
							<div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
								<img
									src={product.image}
									alt={product.name}
									className="w-full h-full object-cover rounded-lg"
								/>
							</div>
							<CardTitle className="font-medium text-base leading-tight">
								{product.name}
							</CardTitle>

							<div className="flex items-center gap-2 mt-2">
								<div className="flex items-center">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`size-3 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
										/>
									))}
								</div>
								<span className="text-xs text-muted-foreground">
									({product.reviews})
								</span>
							</div>
						</CardHeader>

						<CardContent className="space-y-4 flex-grow">
							<div className="flex items-baseline gap-2">
								<span className="text-2xl font-semibold">${product.price}</span>
								{product.originalPrice && (
									<span className="text-sm text-muted-foreground line-through">
										${product.originalPrice}
									</span>
								)}
							</div>
							<CardDescription className="text-sm">
								Free shipping available
							</CardDescription>
						</CardContent>

						<CardFooter className="gap-2">
							<Button asChild className="flex-1">
								<Link href={`/products/${product.id}`}>
									<ShoppingCart className="size-4 mr-2" />
									Add to Cart
								</Link>
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
}
