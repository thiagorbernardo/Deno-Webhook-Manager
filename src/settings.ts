import { config } from "https://deno.land/x/dotenv/mod.ts";
import * as flags from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;

export const envs = ({
  HOSTNAME: config().HOSTNAME ?? "http://localhost",
  PORT: Number(flags.parse(args).port ?? 8080),
});
