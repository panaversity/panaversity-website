import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { date, pgTable, serial, varchar, index } from "drizzle-orm/pg-core";
import { UsersTable } from "./users";

export const EntranceResultTable = pgTable(
  "entrance_exam_result",
  {
    id: serial("id").primaryKey().notNull(),
    status: varchar("status", { length: 50 }).notNull(),
    examDate: date("exam_date"),
    userId: serial("user_id")
      .references(() => UsersTable.id)
      .notNull(),
  },
  (entranceResult) => {
    return {
      index: index("idx_user_id").on(entranceResult.userId),
    };
  }
);

export type Result = InferSelectModel<typeof EntranceResultTable>;
export type NewResult = InferInsertModel<typeof EntranceResultTable>;
