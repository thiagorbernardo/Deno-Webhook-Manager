import { Context, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
const discordUrl = 'https://discordapp.com/api/webhooks/852911931340619857/wXqxVCXzl9DunFbLkpFYa_QeCtaxW17CBSJjKAYPtActwseMOST6joXy86nev-n2vFHg';

router.post("/", async ({ request, response }: Context) => {
  if (!request.hasBody) {
    response.status = 400
    response.body = 'Body is empty'
  }

  const params = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(await request.body().value)
  };

  try {
    const res = await fetch(discordUrl, params);
    // const res = await fetch('https://cat-fact.herokuapp.com/facts/random');
    response.status = res.status

  } catch (error) {
    console.log(`Endpoint error ` + JSON.stringify(error))
    response.status = 500
    response.body = error
  }

});



export default router;
