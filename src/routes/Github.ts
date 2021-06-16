import { Context, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.post("/", async ({ request, response }: Context) => {
  const discordUrl = 'https://discordapp.com/api/webhooks/852911931340619857/wXqxVCXzl9DunFbLkpFYa_QeCtaxW17CBSJjKAYPtActwseMOST6joXy86nev-n2vFHg';
  
  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(await request.body().value)
  };

  // await fetch(discordUrl, params);
  response.status = 201
});



export default router;
