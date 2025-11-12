// /packages/db/src/main-db/drizzle.config.ts
import "dotenv/config";
import { env } from "@workspace/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "src/main-db/schema/**/*.ts",
  out: "src/main-db/migrations",
  dbCredentials: { url: env.MAIN_DATABASE_URL },
  verbose: true,
  strict: true,
  tablesFilter: ["main_"], // avoids collisions across DBs
});
