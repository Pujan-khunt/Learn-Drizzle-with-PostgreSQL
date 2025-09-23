import { pgEnum, pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { addresses } from "./addresses";
import { orders } from "./orders";
import { reviews } from "./reviews";
import { cart } from "./cart";
import { timestamps } from "@/lib/helpers";

// Using pgEnum to define a user_role enum type
export const userRoleEnum = pgEnum("user_role", ["admin", "customer"]);

// The users table definition
export const users = pgTable("users", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	passwordHash: text("password_hash").notNull(),
	role: userRoleEnum("role").default("customer").notNull(),
	...timestamps(),
});

// Defining relations for the users table
export const usersRelations = relations(users, ({ one, many }) => ({
	// A user can have many addresses (one-to-many)
	addresses: many(addresses),
	// A user can place many orders (one-to-many)
	orders: many(orders),
	// A user can write many reviews (one-to-many)
	reviews: many(reviews),
	// A user has one cart (one-to-one)
	cart: one(cart, {
		fields: [users.id],
		references: [cart.userId],
	}),
}));
