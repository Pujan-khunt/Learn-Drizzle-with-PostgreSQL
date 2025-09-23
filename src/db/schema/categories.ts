import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { productToCategory } from "./productToCategory";

// The categories table definition
export const categories = pgTable("categories", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	name: varchar("name", { length: 255 }).notNull().unique(),
	description: text("description"),
});

// Defining relations for the categories table
export const categoriesRelations = relations(categories, ({ many }) => ({
	// A category can have many products (many-to-many)
	productToCategories: many(productToCategory),
}));
