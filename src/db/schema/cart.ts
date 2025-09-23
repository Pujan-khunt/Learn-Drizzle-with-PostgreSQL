import { integer, pgTable } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { cartItems } from "./cartItems";
import { timestamps } from "@/lib/helpers";

// The cart table definition
export const cart = pgTable("cart", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" })
		.unique(), // Each user has only one cart, hence thi FK needs to be unique.
	...timestamps(),
});

// Defining relations for the cart table
export const cartRelations = relations(cart, ({ one, many }) => ({
	user: one(users, {
		fields: [cart.userId],
		references: [users.id],
	}),
	items: many(cartItems),
}));
