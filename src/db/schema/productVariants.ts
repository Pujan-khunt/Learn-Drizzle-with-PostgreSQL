import { integer, pgTable, varchar } from "drizzle-orm/pg-core";
import { products } from "./products";
import { relations } from "drizzle-orm";

// The product_variants table definition
export const productVariants = pgTable("product_variants", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id, { onDelete: "cascade" }), // Foreign key to products table
	// e.g., 'Color', 'Size'
	type: varchar("type", { length: 50 }).notNull(),
	// e.g., 'Red', 'Large'
	value: varchar("value", { length: 50 }).notNull(),
	stock: integer("stock_override").notNull(), // Stock specific to this variant
});

// Defining relations for the product_variants table
export const productVariantsRelations = relations(
	productVariants,
	({ one }) => ({
		// A variant belongs to one product (many-to-one)
		product: one(products, {
			fields: [productVariants.productId],
			references: [products.id],
		}),
	}),
);
