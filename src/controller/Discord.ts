import { Bots, Channel } from "./../enum/DiscordServer.ts";
import { DiscordMessage, Embed } from "./../models/Discord.ts";
import { envs } from "../settings.ts";
import { HttpClient } from "./HttpClient.ts";

import { GithubPayload } from "./../models/Github.ts";
import { Contributors } from "../enum/Contributors.ts";
import { Actions, ActionsColors } from "../enum/Actions.ts";

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
  getGithubEmbed(payload: GithubPayload): Embed {
    const action = Actions[payload.action as keyof typeof Actions];
    const repositoryHyperLink =
      `[${payload.repository.name}](${payload.repository.html_url})`;
    const description = action === Actions.review_requested
      ? `${payload.sender.login} ${action} no ${repositoryHyperLink}`
      : `PR ${action} do ${repositoryHyperLink}`;
    return {
      title: payload.pull_request.title,
      description,
      url: payload.pull_request.html_url,
      author: {
        name: payload.sender.login,
        url: payload.sender.url,
        icon_url: payload.sender.avatar_url,
      },
      color: ActionsColors[payload.action as keyof typeof ActionsColors],
      fields: [
        {
          name: "Reviewers",
          value: payload.pull_request.requested_reviewers.map((reviewer) =>
            Contributors[reviewer.login as keyof typeof Contributors]
          ).join("\n\n"),
          inline: true,
        },
        {
          name: "Labels",
          value: payload.pull_request.labels.map((label) => label.name).join(", "),
          inline: true,
        },
      ],
    };
  }
}

export default new Discord();
