import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  bigint,
  date,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const UsersTable = pgTable(
  "applied_user",
  {
    id: serial("id").primaryKey().notNull(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    fatherName: varchar("father_name", { length: 255 }).notNull(),
    cnic: bigint("cnic", { mode: "number" }).notNull(),
    phoneNumber: bigint("phone_number", { mode: "number" }).notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    gender: varchar("gender", { length: 255 }).notNull(),
    dateOfBirth: date("date_of_birth").notNull(),
    highestQualification: text("highest_qualification").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(
        users.cnic,
        users.phoneNumber,
        users.email
      ),
      index: index("idx_sort_id").on(users.id.desc()),
    };
  }
);

export type User = InferSelectModel<typeof UsersTable>;
export type NewUser = InferInsertModel<typeof UsersTable>;
