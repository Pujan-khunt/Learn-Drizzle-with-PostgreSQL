import { pgTable, varchar, integer, text, pgEnum } from "drizzle-orm/pg-core";
import timestamps from "../helpers";

const userRoleEnum = pgEnum("user_role", ["admin", "customer"]);

const userTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  fullName: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  age: integer().notNull(),
  passwordHash: text().notNull(),
  role: userRoleEnum().default("customer").notNull(),
  ...timestamps
});

export { userRoleEnum, userTable };