"use client";
import {
	Award,
	CheckCircle,
	CreditCard,
	Globe,
	Package,
	Shield,
	ShoppingCart,
	Star,
	Truck,
	Users,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { Card } from "./ui/card";

export default function FeaturesSection() {
	return (
		<section id="features">
			<div className="py-24">
				<div className="mx-auto w-full max-w-3xl px-6">
					<motion.h2
						initial={{ opacity: 0, filter: "blur(4px)" }}
						whileInView={{ opacity: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
					>
						<span className="text-muted-foreground">
							Shop Premium Products with Confidence
						</span>{" "}
						Why Choose Us
					</motion.h2>
					<div className="mt-12 grid gap-12 sm:grid-cols-2">
						{/* Feature 1 */}
						<div className="col-span-full space-y-4">
							<Card className="overflow-hidden px-6 sm:col-span-2">
								<motion.div
									initial={{ opacity: 0, filter: "blur(4px)" }}
									whileInView={{ opacity: 1, filter: "blur(0px)" }}
									transition={{ duration: 0.6, delay: 0.1 }}
									className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
								>
									<TrustedShoppingIllustration />
								</motion.div>
							</Card>
							<div className="max-w-md sm:col-span-3">
								<motion.h3 className="text-foreground text-lg font-semibold">
									Trusted by Millions Worldwide
								</motion.h3>
								<motion.p className="text-muted-foreground mt-3 text-balance">
									Join over 2 million satisfied customers who trust us for
									quality products, secure transactions, and exceptional
									service.
								</motion.p>
							</div>
						</div>
						{/* Feature 2 */}
						<div className="grid grid-rows-[1fr_auto] space-y-4">
							<Card className="p-6">
								<motion.div
									initial={{ opacity: 0, filter: "blur(4px)" }}
									whileInView={{ opacity: 1, filter: "blur(0px)" }}
									transition={{ duration: 0.6, delay: 0.1 }}
									viewport={{ once: true }}
								>
									<FastDeliveryIllustration />
								</motion.div>
							</Card>
							<div>
								<h3 className="text-foreground text-lg font-semibold">
									Lightning Fast Delivery
								</h3>
								<p className="text-muted-foreground mt-3 text-balance">
									Get your orders delivered in 24-48 hours with our premium
									shipping network.
								</p>
							</div>
						</div>
						{/* Feature 3 */}
						<div className="grid grid-rows-[1fr_auto] space-y-4">
							<Card className="overflow-hidden p-6">
								<motion.div
									initial={{ opacity: 0, filter: "blur(4px)" }}
									whileInView={{ opacity: 1, filter: "blur(0px)" }}
									transition={{ duration: 0.6, delay: 0.1 }}
									viewport={{ once: true }}
								>
									<SecurePaymentIllustration />
								</motion.div>
							</Card>
							<div>
								<h3 className="text-foreground text-lg font-semibold">
									100% Secure Checkout
								</h3>
								<p className="text-muted-foreground mt-3 text-balance">
									Shop with confidence using our encrypted payment system and
									buyer protection guarantee.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

const TrustedShoppingIllustration = () => {
	return (
		<Card
			aria-hidden
			className="p-4 transition-transform duration-200 group-hover:translate-y-0"
		>
			{/* Store Header */}
			<div className="mb-4 flex items-center gap-3">
				<div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
					<ShoppingCart className="size-4 text-foreground/60" />
				</div>
				<div>
					<div className="text-sm font-medium">Premium Store</div>
					<div className="text-muted-foreground text-xs">Verified merchant</div>
				</div>
			</div>

			{/* Store Stats */}
			<div className="mb-4 flex gap-4 text-muted-foreground">
				<div className="flex items-center gap-1">
					<Star className="size-3" />
					<span className="text-xs">4.9k</span>
				</div>
				<div className="flex items-center gap-1">
					<Users className="size-3" />
					<span className="text-xs">2.1M</span>
				</div>
				<div className="flex items-center gap-1">
					<Award className="size-3" />
					<span className="text-xs">A+</span>
				</div>
			</div>

			{/* Customer Reviews */}
			<div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
				<div className="text-muted-foreground text-xs font-medium mb-2">
					Recent Reviews
				</div>
				<div className="space-y-1.5 text-xs">
					<div className="flex items-center gap-2 text-muted-foreground">
						<div className="bg-foreground/20 size-1.5 rounded-full"></div>
						<span>"Amazing quality products!"</span>
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<div className="bg-foreground/20 size-1.5 rounded-full"></div>
						<span>"Fast shipping, great service"</span>
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<div className="bg-foreground/20 size-1.5 rounded-full"></div>
						<span>"Highly recommended store"</span>
					</div>
					<div className="flex items-center gap-2 text-muted-foreground">
						<div className="bg-foreground/20 size-1.5 rounded-full"></div>
						<span>"Best prices online"</span>
					</div>
				</div>
			</div>

			{/* Trust Badge */}
			<div className="mt-3 flex justify-center">
				<div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
					Trusted Seller
				</div>
			</div>
		</Card>
	);
};

const FastDeliveryIllustration = () => {
	return (
		<Card aria-hidden className="p-4">
			{/* Delivery Truck */}
			<div className="mb-4 flex justify-center">
				<div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
					<Truck className="size-5 text-foreground/60" />
				</div>
			</div>

			{/* Delivery Status */}
			<div className="mb-4 text-center">
				<div className="text-sm font-medium">Express Delivery</div>
				<div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
					<div className="bg-foreground/40 size-1.5 rounded-full"></div>
					24-48 Hours
				</div>
			</div>

			{/* Delivery Progress */}
			<div className="space-y-3">
				<div className="flex items-center gap-3">
					<div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
						<Package className="size-3 text-foreground/60" />
					</div>
					<div className="flex-1">
						<div className="text-xs font-medium text-foreground/80">
							Order Packed
						</div>
						<div className="bg-foreground/10 h-1 rounded-full mt-1">
							<div className="bg-foreground/40 h-full w-full rounded-full"></div>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
						<Truck className="size-3 text-foreground/60" />
					</div>
					<div className="flex-1">
						<div className="text-xs font-medium text-foreground/80">
							In Transit
						</div>
						<div className="bg-foreground/10 h-1 rounded-full mt-1">
							<div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
						<CheckCircle className="size-3 text-foreground/60" />
					</div>
					<div className="flex-1">
						<div className="text-xs font-medium text-foreground/80">
							Delivered
						</div>
						<div className="bg-foreground/10 h-1 rounded-full mt-1">
							<div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Tracking Info */}
			<div className="mt-4 text-center">
				<div className="text-muted-foreground text-xs">
					Real-time tracking available...
				</div>
			</div>
		</Card>
	);
};

const SecurePaymentIllustration = () => {
	return (
		<div aria-hidden className="relative">
			{/* Main Payment Hub */}
			<Card className="p-4">
				<div className="mb-3 flex items-center justify-center">
					<div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
						<Shield className="size-4 text-foreground/60" />
					</div>
				</div>

				<div className="text-center mb-4">
					<div className="text-sm font-medium">Secure Checkout</div>
					<div className="text-muted-foreground text-xs">
						256-bit SSL Encrypted
					</div>
				</div>

				{/* Payment Methods */}
				<div className="grid grid-cols-2 gap-2">
					<div className="bg-foreground/5 rounded-lg p-2 text-center border">
						<CreditCard className="size-3 mx-auto mb-1 text-foreground/60" />
						<div className="text-xs font-medium text-muted-foreground">
							Credit Cards
						</div>
					</div>
					<div className="bg-foreground/5 rounded-lg p-2 text-center border">
						<Zap className="size-3 mx-auto mb-1 text-foreground/60" />
						<div className="text-xs font-medium text-muted-foreground">
							Digital Wallet
						</div>
					</div>
					<div className="bg-foreground/5 rounded-lg p-2 text-center border">
						<Globe className="size-3 mx-auto mb-1 text-foreground/60" />
						<div className="text-xs font-medium text-muted-foreground">
							PayPal
						</div>
					</div>
					<div className="bg-foreground/5 rounded-lg p-2 text-center border">
						<Shield className="size-3 mx-auto mb-1 text-foreground/60" />
						<div className="text-xs font-medium text-muted-foreground">
							Buy Protection
						</div>
					</div>
				</div>
			</Card>

			{/* Connection Lines */}
			<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
				<div className="bg-foreground/10 h-px w-full"></div>
			</div>
		</div>
	);
};
