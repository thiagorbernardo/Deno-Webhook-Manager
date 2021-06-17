import { DiscordMessage } from "./../models/Discord.ts";
import { Context, Router } from "https://deno.land/x/oak/mod.ts";

import Discord from "../controller/Discord.ts";
import { Bots, Channel } from "./../enum/DiscordServer.ts";

const router = new Router();

router.post("/", async ({ request, response }: Context) => {
  try {
    const message: DiscordMessage = {
      content: "Teste Jira",
      ...Discord.getDiscordMessageBot(Bots.jira),
    };
    const res = await Discord.sendDiscordMessage(
      message,
      Channel.notifications,
    );
    response.status = res.status;
  } catch (error) {
    console.log(`Endpoint error ` + JSON.stringify(error));
    response.status = 500;
    response.body = error;
  }
});

export default router;
