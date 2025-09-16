import { integer, pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "../../lib/helpers";
import { orders } from "./orders";
import { products } from "./products";

const orderItems = pgTable("order_items", {
	id: integer().notNull().generatedAlwaysAsIdentity(),
	orderId: integer()
		.references(() => orders.id)
		.notNull(),
	productId: integer()
		.references(() => products.id)
		.notNull(),
	quantity: integer().notNull(),
	pricePerQuantity: integer().notNull(), // Price at the time of purchase (incase its changed later)
	...timestamps(),
});

export { orderItems };
