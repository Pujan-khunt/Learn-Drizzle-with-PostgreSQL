"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

type Product = {
	id: string;
	name: string;
	price: number;
	description: string;
	category: string;
};

const mockProducts: Product[] = [
	{
		id: "p-1001",
		name: "Wireless Noise-Canceling Headphones",
		price: 199.99,
		description:
			"Immersive sound with active noise cancellation and 30-hour battery.",
		category: "Audio",
	},
	{
		id: "p-1002",
		name: "Mechanical Keyboard (Hot-Swappable)",
		price: 129.0,
		description:
			"Tactile switches, RGB, and aluminum top plate for premium feel.",
		category: "Accessories",
	},
	{
		id: "p-1003",
		name: '4K USB-C Monitor 27"',
		price: 349.5,
		description: "Vivid 4K IPS panel with 99% sRGB and ultra-thin bezels.",
		category: "Displays",
	},
	{
		id: "p-1004",
		name: "Ergonomic Office Chair",
		price: 289.99,
		description: "Adjustable lumbar support and breathable mesh back.",
		category: "Furniture",
	},
	{
		id: "p-1005",
		name: "Portable SSD 2TB",
		price: 179.99,
		description: "Blazing fast NVMe speeds in a pocket-size enclosure.",
		category: "Storage",
	},
	{
		id: "p-1006",
		name: "Smart LED Light Strip",
		price: 39.99,
		description: "16M colors, music sync, and voice assistant support.",
		category: "Smart Home",
	},
	{
		id: "p-1007",
		name: "Action Camera 5K",
		price: 399.0,
		description: "HyperSmooth stabilization and waterproof up to 10m.",
		category: "Cameras",
	},
	{
		id: "p-1008",
		name: "Gaming Mouse Wireless",
		price: 89.99,
		description: "Low-latency wireless with 100-hour battery life.",
		category: "Accessories",
	},
	{
		id: "p-1009",
		name: "Coffee Grinder Pro",
		price: 149.99,
		description: "Precision burr grinder with 60 grind settings.",
		category: "Kitchen",
	},
	{
		id: "p-1010",
		name: "Smartwatch LTE",
		price: 259.99,
		description: "Fitness, calls, and GPS with 7-day battery life.",
		category: "Wearables",
	},
];

export const ProductsBrowser: React.FC = () => {
	const [query, setQuery] = React.useState("");

	const filtered = React.useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return mockProducts;
		return mockProducts.filter((p) =>
			[p.name, p.description, p.category].some((field) =>
				field.toLowerCase().includes(q),
			),
		);
	}, [query]);

	return (
		<div className="space-y-6">
			<div className="relative">
				<Input
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search products by name, category, or description..."
					aria-label="Search products"
					className="h-11"
				/>
			</div>

			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{filtered.map((product) => (
					<Card key={product.id} className="group">
						<CardHeader>
							<div className="flex items-center justify-between gap-2">
								<CardTitle className="text-base font-semibold">
									{product.name}
								</CardTitle>
								<Badge variant="secondary">{product.category}</Badge>
							</div>
						</CardHeader>
						<CardContent>
							{/* Image placeholder */}
							<div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg border bg-gradient-to-br from-muted to-muted/60" />
							<p className="text-sm text-muted-foreground line-clamp-3">
								{product.description}
							</p>
						</CardContent>
						<CardFooter className="flex items-center justify-between">
							<span className="text-lg font-semibold">
								${product.price.toFixed(2)}
							</span>
							<Button
								size="sm"
								className="gap-2"
								aria-label={`Add ${product.name} to cart`}
							>
								<ShoppingCart className="h-4 w-4" />
								Add to cart
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>

			{filtered.length === 0 ? (
				<div className="text-muted-foreground text-center py-12">
					No products found for “{query}”. Try a different search.
				</div>
			) : null}
		</div>
	);
};
