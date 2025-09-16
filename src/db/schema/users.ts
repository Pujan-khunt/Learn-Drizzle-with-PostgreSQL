import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { timestamps } from "../../lib/helpers";

const userRoleEnum = pgEnum("user_role", ["admin", "customer"]);

const users = pgTable("users", {
	id: integer().notNull().primaryKey().generatedAlwaysAsIdentity(),
	fullName: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull().unique(),
	passwordHash: text().notNull(),
	role: userRoleEnum().default("customer").notNull(),
	...timestamps(),
});

export { userRoleEnum, users };
