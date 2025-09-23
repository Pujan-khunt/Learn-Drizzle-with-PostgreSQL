import { integer, pgTable, decimal, text } from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { products } from "./products";
import { relations } from "drizzle-orm";

// The order_items table definition
export const orderItems = pgTable("order_items", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	orderId: integer("order_id")
		.notNull()
		.references(() => orders.id, { onDelete: "cascade" }),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id, { onDelete: "set null" }), // Keep item in order history
	quantity: integer("quantity").notNull(),
	pricePerQuantity: decimal("price_per_quantity", {
		precision: 10,
		scale: 2,
	}).notNull(),
	// Store variant details as a denormalized string or JSON
	productVariant: text("product_variant"),
});

// Defining relations for the order_items table
export const orderItemsRelations = relations(orderItems, ({ one }) => ({
	order: one(orders, {
		fields: [orderItems.orderId],
		references: [orders.id],
	}),
	product: one(products, {
		fields: [orderItems.productId],
		references: [products.id],
	}),
}));
