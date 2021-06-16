import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import routes from "./routes/routes.ts";
import { Logger } from "./middlewares/Logger.ts";

const app = new Application();
const router = new Router();

// Logger
app.use(Logger);

router.use("/api", routes.routes(), routes.allowedMethods());

app.use(router.routes(), router.allowedMethods());

export default app;
