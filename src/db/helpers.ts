import { timestamp } from "drizzle-orm/pg-core";

const timestamps = {
	updatedAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
	createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
};

export default timestamps;
