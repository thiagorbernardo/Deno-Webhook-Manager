import { Channel } from './../enum/Channels.ts';
import { cron } from 'https://deno.land/x/deno_cron/cron.ts';

import Discord from './../controller/discord.ts';

export const registerDailyCrons = () => {
    // cron("*/5 * * * * *", async () => { // test
    cron("58 9 * * 1-5", async () => {
        await Discord.sendDiscordMessage("Hora de ir pra daily", Channel.notifications)
    })
}

