import "dotenv/config";
import type { Config } from "drizzle-kit";

if (!process.env?.DATABASE_URL) {
	throw new Error("DATABASE_URL must be set in .env");
}

export default {
	out: "./src/drizzle",
	schema: "./src/db/schema",
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
} satisfies Config;
