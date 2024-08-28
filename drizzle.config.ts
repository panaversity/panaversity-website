import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });

export default defineConfig({
  schema: [
    './src/lib/schema/users.ts',
    './src/lib/schema/otpCodes.ts',
    './src/lib/schema/experiences.ts',
    './src/lib/schema/entrance_exam_result.ts',
  ],
  out: './src/lib/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
