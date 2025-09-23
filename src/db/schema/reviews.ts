import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { products } from "./products";
import { relations } from "drizzle-orm";

// The reviews table definition
export const reviews = pgTable("reviews", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	productId: integer("product_id")
		.notNull()
		.references(() => products.id, { onDelete: "cascade" }),
	rating: integer("rating").notNull(), // Rating from 1 to 5
	comment: text("comment"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Defining relations for the reviews table
export const reviewsRelations = relations(reviews, ({ one }) => ({
	user: one(users, {
		fields: [reviews.userId],
		references: [users.id],
	}),
	product: one(products, {
		fields: [reviews.productId],
		references: [products.id],
	}),
}));
