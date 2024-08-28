import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const ExperiencesTable = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  industry: varchar("industry", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }).notNull(),
  yearsOfExperience: varchar("years_of_experience", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Experience = InferSelectModel<typeof ExperiencesTable>;
export type NewExperience = InferInsertModel<typeof ExperiencesTable>;
