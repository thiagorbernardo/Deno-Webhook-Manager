import { Context, Router } from "https://deno.land/x/oak/mod.ts";

import Github from "./Github.ts";
import Jira from "./Jira.ts";

const router = new Router();

router.get("/healthcheck", ({ response }: Context): void => {
  response.body = "OK!";
});

router.use("/github", Github.routes(), Github.allowedMethods());
router.use("/jira", Jira.routes(), Jira.allowedMethods());

export default router;
