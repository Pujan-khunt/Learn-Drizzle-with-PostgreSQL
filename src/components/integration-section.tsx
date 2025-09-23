import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import { InfiniteSlider } from "@/components/infinite-slider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FeaturedProductsSection() {
	return (
		<section className="mt-0">
			<div className="bg-muted dark:bg-background py-24 md:py-32">
				<div className="mx-auto max-w-7xl px-6">
					<div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
						<div
							role="presentation"
							className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"
						></div>
						<div>
							<InfiniteSlider gap={24} speed={20} speedOnHover={10}>
								<ProductCard
									product={{
										name: "Wireless Headphones",
										price: 299,
										rating: 4.5,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Smart Watch Pro",
										price: 499,
										rating: 4.8,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Gaming Mouse",
										price: 89,
										rating: 4.3,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "USB-C Hub",
										price: 59,
										rating: 4.6,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Bluetooth Speaker",
										price: 149,
										rating: 4.4,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Phone Case",
										price: 29,
										rating: 4.2,
										image: "/api/placeholder/120/120",
									}}
								/>
							</InfiniteSlider>
						</div>

						<div>
							<InfiniteSlider gap={24} speed={20} speedOnHover={10} reverse>
								<ProductCard
									product={{
										name: "Laptop Stand",
										price: 79,
										rating: 4.7,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Wireless Charger",
										price: 39,
										rating: 4.1,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Desk Lamp LED",
										price: 69,
										rating: 4.5,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Mechanical Keyboard",
										price: 159,
										rating: 4.9,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Monitor 4K",
										price: 399,
										rating: 4.6,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Cable Organizer",
										price: 19,
										rating: 4.0,
										image: "/api/placeholder/120/120",
									}}
								/>
							</InfiniteSlider>
						</div>
						<div>
							<InfiniteSlider gap={24} speed={20} speedOnHover={10}>
								<ProductCard
									product={{
										name: "Power Bank",
										price: 49,
										rating: 4.3,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Smart Home Hub",
										price: 129,
										rating: 4.4,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Gaming Controller",
										price: 89,
										rating: 4.7,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Webcam HD",
										price: 99,
										rating: 4.2,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Tablet Stand",
										price: 35,
										rating: 4.1,
										image: "/api/placeholder/120/120",
									}}
								/>
								<ProductCard
									product={{
										name: "Fitness Tracker",
										price: 199,
										rating: 4.5,
										image: "/api/placeholder/120/120",
									}}
								/>
							</InfiniteSlider>
						</div>
						<div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
							<div className="shadow-black-950/10 size-16 bg-white/5 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15 relative z-20 flex rounded-full border">
								<div className="m-auto size-fit">
									<ShoppingCart className="size-8 text-foreground" />
								</div>
							</div>
						</div>
					</div>
					<div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
						<h2 className="text-balance text-3xl font-semibold md:text-4xl">
							Discover Amazing Products: your premium tech marketplace
						</h2>
						<p className="text-muted-foreground">
							Shop the latest tech gadgets and accessories with fast shipping
							and unbeatable prices on premium products.
						</p>

						<Button variant="outline" size="sm" asChild>
							<Link href="/products">Browse All Products</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

const ProductCard = ({
	product,
	className,
}: {
	product: {
		name: string;
		price: number;
		rating: number;
		image: string;
	};
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"bg-background relative z-20 flex size-32 rounded-lg border p-2 flex-col items-center justify-center group hover:shadow-lg transition-all duration-200",
				className,
			)}
		>
			<div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
				<Heart className="size-3 text-muted-foreground hover:text-red-500 cursor-pointer" />
			</div>
			<div className="w-full h-16 bg-muted/50 rounded mb-1 flex items-center justify-center">
				<Eye className="size-4 text-muted-foreground" />
			</div>
			<div className="text-center space-y-1">
				<p className="text-xs font-medium truncate w-full">{product.name}</p>
				<div className="flex items-center justify-center gap-1">
					<Star className="size-2 fill-yellow-400 text-yellow-400" />
					<span className="text-xs text-muted-foreground">
						{product.rating}
					</span>
				</div>
				<p className="text-xs font-semibold">${product.price}</p>
			</div>
		</div>
	);
};
