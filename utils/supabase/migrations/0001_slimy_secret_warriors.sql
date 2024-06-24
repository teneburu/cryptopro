ALTER TABLE "invite_codes" ADD COLUMN "max_uses" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "invite_codes" ADD COLUMN "times_used" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "invite_codes" ADD COLUMN "uses_left" integer DEFAULT 1 NOT NULL;