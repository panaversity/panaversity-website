CREATE TABLE IF NOT EXISTS "applied_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar(255) NOT NULL,
	"father_name" varchar(255) NOT NULL,
	"cnic" bigint NOT NULL,
	"phone_number" bigint NOT NULL,
	"city" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"gender" varchar(255) NOT NULL,
	"date_of_birth" date NOT NULL,
	"highest_qualification" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "otp_codes" (
	"email" varchar(255) NOT NULL,
	"code" integer NOT NULL,
	"expiry_date" timestamp DEFAULT '2024-08-27 09:57:52.304' NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"industry" varchar(255) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"years_of_experience" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "entrance_exam_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(50) NOT NULL,
	"exam_date" date,
	"user_id" serial NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "entrance_exam_result" ADD CONSTRAINT "entrance_exam_result_user_id_applied_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."applied_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "unique_idx" ON "applied_user" USING btree ("cnic","phone_number","email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_sort_id" ON "applied_user" USING btree ("id" DESC NULLS LAST);--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "otp_codes_email_index" ON "otp_codes" USING btree ("email");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "idx_user_id" ON "entrance_exam_result" USING btree ("user_id");