import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

if (!process.env?.DATABASE_URL) {
	throw new Error("DATABASE_URL must be set in .env");
}

const db = drizzle({
	connection: process.env.DATABASE_URL,
	casing: "snake_case", // Converts TS's camelCase into snake_case for naming columns in DB.
});

export default db;
