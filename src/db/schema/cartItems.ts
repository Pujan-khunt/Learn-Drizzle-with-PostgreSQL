import { integer, pgTable } from "drizzle-orm/pg-core";
import { cart } from "./cart";
import { products } from "./products";
import { relations } from "drizzle-orm";
import { productVariants } from "./productVariants";

// The cart_items table definition
export const cartItems = pgTable("cart_items", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	cartId: integer("cart_id")
		.notNull()
		.references(() => cart.id, { onDelete: "cascade" }),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id, { onDelete: "cascade" }),
	variantId: integer("variant_id").references(() => productVariants.id, {
		onDelete: "set null",
	}), // For products with variants
	quantity: integer("quantity").notNull().default(1),
});

// Defining relations for the cart_items table
export const cartItemsRelations = relations(cartItems, ({ one }) => ({
	cart: one(cart, {
		fields: [cartItems.cartId],
		references: [cart.id],
	}),
	product: one(products, {
		fields: [cartItems.productId],
		references: [products.id],
	}),
	variant: one(productVariants, {
		fields: [cartItems.variantId],
		references: [productVariants.id],
	}),
}));
