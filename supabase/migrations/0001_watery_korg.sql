ALTER TABLE "users_table" ADD COLUMN "invitecode" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ADD CONSTRAINT "users_table_invitecode_unique" UNIQUE("invitecode");