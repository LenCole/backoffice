import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { createEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { z } from "zod";

// ------------------------------------------------
// 1️⃣ Choose correct .env file
// ------------------------------------------------
const nodeEnv = process.env.NODE_ENV ?? "development";

let envFile = ".env.local";
if (nodeEnv === "production") {
  envFile = ".env.production";
} else if (nodeEnv === "test") {
  envFile = ".env.test";
}

// Always resolve relative to repo root
const envPath = resolve(__dirname, "../../", envFile);

// ------------------------------------------------
// 2️⃣ Load dotenv before createEnv
// ------------------------------------------------
if (existsSync(envPath)) {
  config({ path: envPath });
  console.log(`✅ Loaded environment file: ${envPath}`);
} else {
  config(); // fallback to .env
  console.warn("⚠️  Fallback to default .env");
}

// ------------------------------------------------
// 3️⃣ Validate with T3 Env + Zod
// ------------------------------------------------
export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    MAIN_DATABASE_URL: z
      .string()
      .min(1, "MAIN_DATABASE_URL is missing")
      // PostgreSQL URLs are not RFC URLs, so don't use z.url()
      .refine((val) => val.startsWith("postgres"), "Invalid Postgres URL"),

    BETTER_AUTH_SECRET: z.string().min(16, "Must be at least 16 chars"),
    GOOGLE_CLIENT_ID: z.string().min(1, "GOOGLE_CLIENT_ID is missing"),
    GOOGLE_CLIENT_SECRET: z.string().min(1, "GOOGLE_CLIENT_SECRET is missing"),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1, "NEXT_PUBLIC_APP_URL is missing"),
    WEB_URL: z.string().min(1, "WEB_URL is missing"),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    MAIN_DATABASE_URL: process.env.MAIN_DATABASE_URL,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    WEB_URL: process.env.WEB_URL,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
