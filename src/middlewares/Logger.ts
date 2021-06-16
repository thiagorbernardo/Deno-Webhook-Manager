import { Context } from "https://deno.land/x/oak/mod.ts";

// Logger
export const Logger = async (ctx: Context, next: () => any) => {
  await next();
  console.log(`${ctx.request.method} ${ctx.request.url}`);
};
