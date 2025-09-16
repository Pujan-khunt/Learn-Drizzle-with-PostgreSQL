import { boolean, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";
import timestamps from "../helpers";

const products = pgTable("products", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	description: text(),
	price: integer().notNull(), // Storing price as integer as each price in decimal will be multiplied by 100.
	stock: integer().default(0).notNull(),
	isAvailable: boolean().default(false).notNull(),
	...timestamps,
});

export { products };
