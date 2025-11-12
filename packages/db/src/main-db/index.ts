import { env } from "@workspace/env";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let _mainDb: NeonHttpDatabase<typeof schema> | null = null;

export const getMainDb = () => {
  if (_mainDb) {
    return _mainDb;
  }

  const connectionString = env.MAIN_DATABASE_URL;
  if (!connectionString) {
    throw new Error("MAIN_DATABASE_URL environment variable is not set.");
  }

  _mainDb = drizzle(connectionString, { schema });
  return _mainDb;
};

export const mainDb = new Proxy({} as NeonHttpDatabase<typeof schema>, {
  get: (_, prop) => getMainDb()[prop as keyof NeonHttpDatabase<typeof schema>],
});
