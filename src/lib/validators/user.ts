import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";
import { users } from "../../db/schema/users";

// Schema for creating a new user (e.g. for a registration form)
export const insertUserSchema = createInsertSchema(users, {
	fullName: z.string().min(3, "Full name must be atleast 3 characters."),
	email: z.email("Invalid email address."),
}).omit({
	id: true,
	passwordHash: true,
	role: true,
	createdAt: true,
	updatedAt: true,
});

// Schema for the data we get back from the DB server.
export const selectUserSchema = createSelectSchema(users);

// TypeScript types inferred from above schemas.
export type NewUser = z.infer<typeof insertUserSchema>;
export type User = z.infer<typeof selectUserSchema>;
