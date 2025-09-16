import { integer, pgEnum, pgTable } from "drizzle-orm/pg-core";
import { timestamps } from "../../lib/helpers";
import { users } from "./users";

const orderStatusEnum = pgEnum("order_status", [
	"pending",
	"processing",
	"shipped",
	"delivered",
	"cancelled",
]);

const orders = pgTable("orders", {
	id: integer().notNull().generatedAlwaysAsIdentity(),
	userId: integer()
		.references(() => users.id)
		.notNull(),
	status: orderStatusEnum().default("pending").notNull(),
	total: integer().notNull(),
	...timestamps(),
});

export { orderStatusEnum, orders };
