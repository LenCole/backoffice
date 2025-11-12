declare module "@workspace/env" {
  // Import the actual runtime so we can mirror its type
  import type { env as exportedEnv } from "./env.mjs";

  export const env: typeof exportedEnv;
}
