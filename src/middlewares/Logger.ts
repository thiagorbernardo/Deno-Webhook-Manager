import { Context } from "https://deno.land/x/oak/mod.ts";

// Logger
export const Logger = async (ctx: Context, next: () => any) => {
  await next();

  const log = {
    method: ctx.request.method,
    url: ctx.request.url,
    body: await ctx.request.body().value,
  };
  console.log(JSON.stringify(log));
  // console.log(`${ctx.request.method} ${ctx.request.url}`);
};
