import { Bots, Channel } from "./../enum/DiscordServer.ts";
import { DiscordMessage } from "./../models/Discord.ts";
import { envs } from "../settings.ts";
import { HttpClient } from "./HttpClient.ts";

class Discord {
  private readonly Notificator = new HttpClient(envs.NOTIFICATIONS);
  private readonly CronNotificator = new HttpClient(envs.GENERAL);

  async sendDiscordMessage(message: DiscordMessage, channel: Channel) {
    switch (channel) {
      case Channel.geral:
        return await this.CronNotificator.post(JSON.stringify(message));
      default:
        return await this.Notificator.post(JSON.stringify(message));
    }
  }

  getDiscordMessageBot(bot?: Bots): Partial<DiscordMessage> {
    switch (bot) {
      case Bots.github:
        return {
          username: Bots.github,
          "avatar_url":
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        };
      case Bots.jira:
        return {
          username: Bots.jira,
          "avatar_url":
            "https://symbols.getvecta.com/stencil_85/33_jira-icon.6a60be29f8.png",
        };
      default:
        return {
          username: Bots.alien,
          "avatar_url": "https://avatars.githubusercontent.com/u/51447939?v=4",
        };
    }
  }
}

export default new Discord();
