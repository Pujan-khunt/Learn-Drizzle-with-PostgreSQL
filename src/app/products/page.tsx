import { ProductsBrowser } from "@/components/products-browser";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Products | Pujan's Shop",
	description: "Browse all products and search for what you need.",
};

export default function ProductsPage() {
	return (
		<main className="mx-auto max-w-6xl px-6 py-24">
			<section className="mb-8">
				<h1 className="text-3xl font-semibold tracking-tight">All Products</h1>
				<p className="text-muted-foreground mt-1">
					Explore our catalog and use the search to find products quickly.
				</p>
			</section>
			<ProductsBrowser />
		</main>
	);
}
