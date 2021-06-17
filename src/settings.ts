import { config } from "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;

const parsedFlags = flags.parse(args);

export const envs = ({
  HOSTNAME: config().HOSTNAME ?? "http://localhost",
  NOTIFICATIONS: config().NOTIFICATIONS ?? parsedFlags.notifications,
  GENERAL: config().GENERAL ?? parsedFlags.general,
  PORT: Number(flags.parse(args).port ?? 8080),
});
