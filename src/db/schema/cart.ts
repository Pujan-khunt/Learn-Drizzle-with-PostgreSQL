import { integer, pgTable, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { cartItems } from "./cartItems";

// The cart table definition
export const cart = pgTable("cart", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" })
		.unique(), // Each user has only one cart, hence thi FK needs to be unique.
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Defining relations for the cart table
export const cartRelations = relations(cart, ({ one, many }) => ({
	user: one(users, {
		fields: [cart.userId],
		references: [users.id],
	}),
	items: many(cartItems),
}));
