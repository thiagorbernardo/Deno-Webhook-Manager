import { Router, Context } from "https://deno.land/x/oak/mod.ts";

import Github from "./Github.ts";

const router = new Router();

router.get("/healthcheck", ({ response }: Context): void => {
    response.body = "OK!";
});

router.use("/github", Github.routes(), Github.allowedMethods());

export default router;
