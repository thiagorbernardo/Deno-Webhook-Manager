import { cron } from 'https://deno.land/x/deno_cron/cron.ts';

import { Channel, Roles } from './../enum/DiscordServer.ts';
import Discord from '../controller/Discord.ts';

export const registerDailyCrons = () => {
    // cron("*/5 * * * * *", async () => { // test
    cron("58 9 * * 1-5", async () => {

        await Discord.sendDiscordMessage({
            content: `Vai começar a daily!\n${Roles.sarg} ${Roles.devs} ${Roles.design} ${Roles.qa}\nhttps://meet.google.com/zzs-qzfs-pmm`,
            ...Discord.getDiscordMessageBot()
        }, Channel.notifications)
    })
}

