import { integer, pgTable } from "drizzle-orm/pg-core";
import { orders } from "@/db/schema/orders";
import { products } from "@/db/schema/products";
import { timestamps } from "@/lib/helpers";

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
