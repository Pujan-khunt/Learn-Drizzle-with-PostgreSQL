import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import z from "zod";
import { products } from "../../db/schema/products";

export const insertProductSchema = createInsertSchema(products, {
	name: z
		.string()
		.min(3, "Product name must be atleast 3 characters.")
		.max(255, "Product name can be a maximum of 255 characters"),
	description: z
		.string()
		.min(0)
		.max(1000, "Product description can be a maximum of 1000 characters."),
	price: z.coerce.number().positive("Price must be a positive value."),
	stock: z.coerce.number().int().min(0, "Stock can not be a negative integer."),
}).omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

export const selectProductSchema = createSelectSchema(products);

export type NewProduct = z.infer<typeof insertProductSchema>;
export type Product = z.infer<typeof selectProductSchema>;
