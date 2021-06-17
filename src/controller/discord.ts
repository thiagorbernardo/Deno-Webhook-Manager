import { Channel, Bots } from './../enum/DiscordServer.ts';
import { DiscordMessage } from './../models/Discord.ts';

class Discord {
    private readonly githubNotifications = 'https://discordapp.com/api/webhooks/852911931340619857/wXqxVCXzl9DunFbLkpFYa_QeCtaxW17CBSJjKAYPtActwseMOST6joXy86nev-n2vFHg';
    private readonly cronNotifications = 'https://discord.com/api/webhooks/854822970279460875/emsTiya3IOoAyaR_o01yEzahsjleO6OTLt25YLAivqPkkN4VQekKl726bHdx6VMLUrIH';
    private readonly headers = {
        'Content-Type': 'application/json'
    }

    async sendDiscordMessage(message: DiscordMessage, channel: Channel) {
        const params: RequestInit = {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify(message)
        };

        switch (channel) {
            case Channel.notifications:
                return await fetch(this.githubNotifications, params);
            case Channel.geral:
                return await fetch(this.githubNotifications, params);
            default:
                return await fetch(this.githubNotifications, params);
                
        }
    }

    getDiscordMessageBot(bot?: Bots): Partial<DiscordMessage> {
        switch (bot) {
            case Bots.github:
                return {
                    username: Bots.github,
                    "avatar_url": 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                }
            case Bots.jira:
                return {
                    username: Bots.jira,
                    "avatar_url": 'https://symbols.getvecta.com/stencil_85/33_jira-icon.6a60be29f8.png'
                }
            default:
                return {
                    username: Bots.alien,
                    "avatar_url": 'https://avatars.githubusercontent.com/u/51447939?v=4'
                }
        }
    }
}

export default new Discord()