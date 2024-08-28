import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import {
  integer,
  pgTable,
  varchar,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

const currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 2);

export const otpCodes = pgTable(
  "otp_codes",
  {
    email: varchar("email", { length: 255 }).notNull(),
    code: integer("code").notNull(),
    expiryTime: timestamp("expiry_date").default(currentDate).notNull(),
  },
  (otpCodes) => {
    return {
      uniqueIdx: uniqueIndex().on(otpCodes.email),
    };
  }
);

export type OTPCode = InferSelectModel<typeof otpCodes>;
export type NewOTPCode = InferInsertModel<typeof otpCodes>;
