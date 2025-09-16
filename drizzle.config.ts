import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  out: "./src/drizzle",
  schema: "./src/db/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
