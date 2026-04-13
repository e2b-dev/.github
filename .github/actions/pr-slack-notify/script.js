const { WebClient } = require("@slack/web-api");
const fs = require("fs");

const slackToken = process.env.SLACK_BOT_TOKEN;
const channelId = process.env.SLACK_CHANNEL_ID;
const reviewGroup = process.env.SLACK_REVIEW_GROUP;

if (!slackToken || !channelId || !reviewGroup) {
  console.error("Missing required env vars: SLACK_BOT_TOKEN, SLACK_CHANNEL_ID, SLACK_REVIEW_GROUP");
  process.exit(1);
}

const slack = new WebClient(slackToken);

function getEvent() {
  return JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
}

(async () => {
  const ev = getEvent();
  const pr = ev.pull_request;

  if (!pr) {
    console.log("No pull_request in event; exiting.");
    return;
  }

  if (pr.draft) {
    console.log(`PR #${pr.number} is a draft; skipping.`);
    return;
  }

  // Escape Slack mrkdwn control characters to prevent injection via PR title.
  // A fork contributor could craft a title with > or <!everyone> to break
  // formatting or trigger channel-wide pings.
  const safeTitle = pr.title
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const repo = process.env.GITHUB_REPOSITORY || "unknown";
  const message = `<!subteam^${reviewGroup}> — new PR needs review\n*<${pr.html_url}|${repo}#${pr.number} — ${safeTitle}>* by ${pr.user.login}`;

  await slack.chat.postMessage({
    channel: channelId,
    text: message,
    unfurl_links: false,
    unfurl_media: false,
  });

  console.log(`Posted PR #${pr.number} to channel ${channelId}.`);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
