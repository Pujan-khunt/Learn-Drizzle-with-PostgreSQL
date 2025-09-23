import {
	integer,
	pgEnum,
	pgTable,
	timestamp,
	decimal,
	varchar,
} from "drizzle-orm/pg-core";
import { orders } from "./orders";
import { relations } from "drizzle-orm";

// Enum for payment status
export const paymentStatusEnum = pgEnum("payment_status", [
	"pending",
	"completed",
	"failed",
	"refunded",
]);

// The payments table definition
export const payments = pgTable("payments", {
	id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
	orderId: integer("order_id")
		.notNull()
		.references(() => orders.id, { onDelete: "cascade" })
		.unique(),
	amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
	status: paymentStatusEnum("status").default("pending").notNull(),
	provider: varchar("provider", { length: 50 }).notNull(), // e.g., 'stripe', 'paypal'
	transactionId: varchar("transaction_id", { length: 255 }), // From the payment provider
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Defining relations for the payments table
export const paymentsRelations = relations(payments, ({ one }) => ({
	order: one(orders, {
		fields: [payments.orderId],
		references: [orders.id],
	}),
}));
