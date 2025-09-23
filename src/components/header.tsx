"use client";

import { Menu, ShoppingCart, Store, X } from "lucide-react";
import { useScroll } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
	{ id: 1, name: "Categories", href: "/categories" },
	{ id: 2, name: "Deals", href: "/deals" },
	{ id: 3, name: "New Arrivals", href: "/new-arrivals" },
	{ id: 4, name: "Best Sellers", href: "/best-sellers" },
	{ id: 5, name: "About", href: "/about" },
	{ id: 6, name: "Products", href: "/products" },
];

export const HeroHeader = () => {
	const [menuState, setMenuState] = useState<boolean>(false);
	const [_scrolled, setScrolled] = useState<boolean>(false);

	const { scrollYProgress } = useScroll();

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (latest) => {
			setScrolled(latest > 0.05);
		});
		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<header>
			<nav
				data-state={menuState && "active"}
				className={cn(
					"fixed z-50 w-full border-b transition-colors duration-150",
					"bg-background/50 backdrop-blur-3xl",
				)}
			>
				<div className="mx-auto max-w-5xl px-6 transition-all duration-300">
					<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
						<div className="flex w-full items-center justify-between gap-12 lg:w-auto">
							{/* Logo and store name  */}
							<Link
								href="/"
								aria-label="home"
								className="flex items-center font-semibold gap-2 space-x-2"
							>
								<Store />
								Pujan's Shop
							</Link>

							{/* Icon for hamberger menu for mobile screens */}
							<button
								type="button"
								onClick={() => setMenuState(!menuState)}
								aria-label={menuState === true ? "Close Menu" : "Open Menu"}
								className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
							>
								<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
								<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
							</button>

							{/* Menu items displayed on large screens  */}
							<div className="hidden lg:block">
								<ul className="flex gap-8 text-sm">
									{menuItems.map((item) => (
										<li key={item.id}>
											<Link
												href={item.href}
												className="text-muted-foreground hover:text-accent-foreground block duration-150"
											>
												<span>{item.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Actual hamberger menu displayed on mobile screens  */}
						<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
							{/* Menu items displayed on mobile screen  */}
							<div className="lg:hidden">
								<ul className="space-y-6 text-base">
									{menuItems.map((item) => (
										<li key={item.id}>
											<Link
												href={item.href}
												className="text-muted-foreground hover:text-accent-foreground block duration-150"
											>
												<span>{item.name}</span>
											</Link>
										</li>
									))}
								</ul>
							</div>

							{/* Cart, Sign In and Sign Up buttons */}
							<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:items-center">
								<Button asChild variant="ghost" size="sm" className="lg:p-2">
									<Link href="/cart" className="flex items-center gap-2">
										<ShoppingCart className="h-4 w-4" />
										<span className="hidden sm:inline">Cart</span>
									</Link>
								</Button>
								<Button asChild variant="outline" size="sm">
									<Link href="/signin">
										<span>Sign In</span>
									</Link>
								</Button>
								<Button asChild size="sm">
									<Link href="/signup">
										<span>Sign Up</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};
