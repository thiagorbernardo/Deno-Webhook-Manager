import { registerDailyCrons } from "./cron/daily.ts";
import app from "./server.ts";
import { envs } from "./settings.ts";

const {
  HOSTNAME: hostname,
  PORT: port,
} = envs;

registerDailyCrons();
console.log(`Deno is running: ${hostname}:${port}`);

await app.listen({ port });
