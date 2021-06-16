import { Context, Router } from "https://deno.land/x/oak/mod.ts";

import Discord from './../controller/discord.ts';
import { Channel } from './../enum/Channels.ts';

const router = new Router();

router.post("/", async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400
    response.body = 'Body is empty'
  }

  try {
    const res = await Discord.sendDiscordMessage(await request.body().value, Channel.notifications)
    response.status = res.status

  } catch (error) {
    console.log(`Endpoint error ` + JSON.stringify(error))
    response.status = 500
    response.body = error
  }

});



export default router;
