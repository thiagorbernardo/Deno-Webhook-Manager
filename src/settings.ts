import { config } from "https://deno.land/x/dotenv/mod.ts";

export const envs = ({
  HOSTNAME: config().HOSTNAME ?? "http://localhost",
  PORT: Number(config().PORT ?? 8080),
});
