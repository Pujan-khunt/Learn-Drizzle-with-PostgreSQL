import {
	boolean,
	integer,
	pgTable,
	text,
	varchar,
	decimal,
	timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { reviews } from "./reviews";
import { productVariants } from "./productVariants";
import { productToCategory } from "./productToCategory";

// The products table definition
export const products = pgTable("products", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	name: varchar("name", { length: 255 }).notNull(),
	description: text("description").notNull(),
	price: decimal("price", { precision: 10, scale: 2 }).notNull(), // Using decimal for currency
	stock: integer("stock").default(0).notNull(),
	isAvailable: boolean("is_available").default(true).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Defining relations for the products table
export const productsRelations = relations(products, ({ many }) => ({
	// A product can have many reviews (one-to-many)
	reviews: many(reviews),
	// A product can have many variants (one-to-many)
	variants: many(productVariants),
	// A product can belong to many categories (many-to-many)
	productToCategories: many(productToCategory),
}));
