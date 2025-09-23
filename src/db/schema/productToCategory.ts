import { integer, pgTable, primaryKey } from "drizzle-orm/pg-core";
import { products } from "./products";
import { categories } from "./categories";
import { relations } from "drizzle-orm";

// Junction table for the many-to-many relationship between products and categories
export const productToCategory = pgTable(
	"product_to_category",
	{
		productId: integer("product_id")
			.notNull()
			.references(() => products.id, { onDelete: "cascade" }),
		categoryId: integer("category_id")
			.notNull()
			.references(() => categories.id, { onDelete: "cascade" }),
	},
	(t) => [
		// Composite primary key
		primaryKey({ columns: [t.productId, t.categoryId] }),
	],
);

// Defining relations for the product_to_category junction table
export const productToCategoryRelations = relations(
	productToCategory,
	({ one }) => ({
		product: one(products, {
			fields: [productToCategory.productId],
			references: [products.id],
		}),
		category: one(categories, {
			fields: [productToCategory.categoryId],
			references: [categories.id],
		}),
	}),
);
