import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";

// The addresses table definition
export const addresses = pgTable("addresses", {
	id: integer("id").generatedAlwaysAsIdentity().primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }), // Foreign key to users table
	street: text("street").notNull(),
	city: varchar("city", { length: 100 }).notNull(),
	state: varchar("state", { length: 100 }).notNull(),
	postalCode: varchar("postal_code", { length: 20 }).notNull(),
	country: varchar("country", { length: 100 }).notNull(),
});

// Defining relations for the addresses table
export const addressesRelations = relations(addresses, ({ one }) => ({
	// An address belongs to one user (many-to-one)
	user: one(users, {
		fields: [addresses.userId],
		references: [users.id],
	}),
}));
