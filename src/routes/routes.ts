import { Context, Router } from "https://deno.land/x/oak/mod.ts";

import Github from "./Github.ts";

const router = new Router();

router.get("/healthcheck", ({ response }: Context): void => {
  response.body = "OK!";
});

router.post("/test", async ({ response, request }: Context) => {
  console.log(
    `Has body: ${request.hasBody} value: ${
      JSON.stringify(await request.body().value)
    }`,
  );
  response.body = "OK!";
});

router.use("/github", Github.routes(), Github.allowedMethods());

export default router;
