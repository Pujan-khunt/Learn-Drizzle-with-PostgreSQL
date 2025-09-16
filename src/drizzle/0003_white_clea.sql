ALTER TABLE "products" ALTER COLUMN "description" SET DEFAULT 'default description';--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "order_items" ADD COLUMN "updatedAt" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "order_items" ADD COLUMN "createdAt" timestamp with time zone DEFAULT now() NOT NULL;