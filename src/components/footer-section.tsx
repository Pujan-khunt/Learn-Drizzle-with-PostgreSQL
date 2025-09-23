import { Pyramid } from "lucide-react";

interface MenuItem {
	title: string;
	links: {
		text: string;
		url: string;
	}[];
}

interface Footer2Props {
	logo?: {
		url: string;
		src: string;
		alt: string;
		title: string;
	};
	tagline?: string;
	menuItems?: MenuItem[];
	copyright?: string;
	bottomLinks?: {
		text: string;
		url: string;
	}[];
}

const Footer2 = ({
	tagline = "Your trusted online marketplace.",
	menuItems = [
		{
			title: "Shop",
			links: [
				{ text: "All Products", url: "/" },
				{ text: "Electronics", url: "#" },
				{ text: "Clothing", url: "#" },
				{ text: "Home & Garden", url: "#" },
				{ text: "Sports", url: "#" },
				{ text: "Books", url: "#" },
			],
		},
		{
			title: "Account",
			links: [
				{ text: "Sign In", url: "/signin" },
				{ text: "Sign Up", url: "/signup" },
				{ text: "My Orders", url: "#" },
				{ text: "Wishlist", url: "#" },
				{ text: "Profile", url: "#" },
				{ text: "Cart", url: "/cart" },
			],
		},
		{
			title: "Support",
			links: [
				{ text: "Help Center", url: "#" },
				{ text: "Contact Us", url: "#" },
				{ text: "Shipping Info", url: "#" },
			],
		},
		{
			title: "Connect",
			links: [
				{ text: "Facebook", url: "#" },
				{ text: "Instagram", url: "#" },
				{ text: "Twitter", url: "#" },
			],
		},
	],
	copyright = "© 2025 ShopHub. Your trusted marketplace.",
	bottomLinks = [
		{ text: "Terms of Service", url: "#" },
		{ text: "Privacy Policy", url: "#" },
	],
}: Footer2Props) => {
	return (
		<section className="py-32 border-t bg-background dark:bg-background-dark">
			<div className="container mx-auto max-w-6xl">
				<footer>
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
						<div className="col-span-2 mb-8 lg:mb-0">
							<div className="flex items-center gap-2 lg:justify-start">
								<Pyramid />
								ShopHub
							</div>
							<p className="mt-4 font-bold">{tagline}</p>
						</div>
						{menuItems.map((section, sectionIdx) => (
							<div key={sectionIdx}>
								<h3 className="mb-4 font-bold">{section.title}</h3>
								<ul className="text-muted-foreground space-y-4">
									{section.links.map((link, linkIdx) => (
										<li
											key={linkIdx}
											className="hover:text-primary font-medium"
										>
											<a href={link.url}>{link.text}</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
						<p>{copyright}</p>
						<ul className="flex gap-4">
							{bottomLinks.map((link, linkIdx) => (
								<li key={linkIdx} className="hover:text-primary underline">
									<a href={link.url}>{link.text}</a>
								</li>
							))}
						</ul>
					</div>
				</footer>
			</div>
		</section>
	);
};

export { Footer2 };
