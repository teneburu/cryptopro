DO $$ BEGIN
 CREATE TYPE "public"."tier" AS ENUM('free', 'bronze', 'silver', 'gold', 'premium', 'master', 'elite');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invite_codes" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"tier" "tier" NOT NULL,
	CONSTRAINT "invite_codes_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"prenom" text NOT NULL,
	"dob" date NOT NULL,
	"email" text NOT NULL,
	"invitecode" text NOT NULL,
	"tier" "tier" DEFAULT 'free' NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
