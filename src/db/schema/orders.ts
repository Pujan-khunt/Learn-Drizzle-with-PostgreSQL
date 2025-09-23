import {
	integer,
	pgEnum,
	pgTable,
	timestamp,
	decimal,
	text,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { relations } from "drizzle-orm";
import { orderItems } from "./orderItems";
import { payments } from "./payments";

// Enum for order status
export const orderStatusEnum = pgEnum("order_status", [
	"pending",
	"processing",
	"shipped",
	"delivered",
	"cancelled",
	"refunded",
]);

// The orders table definition
export const orders = pgTable("orders", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	userId: integer("user_id")
		.notNull()
		.references(() => users.id, { onDelete: "set null" }), // Keep order history even if user is deleted
	status: orderStatusEnum("status").default("pending").notNull(),
	total: decimal("total", { precision: 10, scale: 2 }).notNull(),
	shippingAddress: text("shipping_address").notNull(), // Storing as denormalized JSON string or text
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Defining relations for the orders table
export const ordersRelations = relations(orders, ({ one, many }) => ({
	user: one(users, {
		fields: [orders.userId],
		references: [users.id],
	}),
	orderItems: many(orderItems),
	payment: one(payments, {
		fields: [orders.id],
		references: [payments.orderId],
	}),
}));
