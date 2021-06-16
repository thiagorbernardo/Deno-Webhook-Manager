import { Channel } from './../enum/Channels.ts';

class Discord {
    private readonly githubNotifications = 'https://discordapp.com/api/webhooks/852911931340619857/wXqxVCXzl9DunFbLkpFYa_QeCtaxW17CBSJjKAYPtActwseMOST6joXy86nev-n2vFHg';
    private readonly cronNotifications = 'https://discord.com/api/webhooks/854822970279460875/emsTiya3IOoAyaR_o01yEzahsjleO6OTLt25YLAivqPkkN4VQekKl726bHdx6VMLUrIH';

    async sendDiscordMessage(content: string | Record<string, unknown>, channel: Channel) {
        const params = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(typeof content === 'string' ? {content} : content)
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
}

export default new Discord()