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

// Escape characters that have special meaning in Slack mrkdwn link labels.
// Prevents injection via PR titles (e.g. <!everyone> or pipe breaking links).
function escapeSlackLabel(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "&#124;");
}

function getPR(ev) {
  // Support manual trigger via workflow_dispatch.
  // The caller workflow passes PR details as env vars.
  if (process.env.PR_NUMBER) {
    return {
      number: parseInt(process.env.PR_NUMBER, 10),
      title: process.env.PR_TITLE || "PR",
      html_url: process.env.PR_URL || "",
      user: { login: process.env.PR_AUTHOR || "unknown" },
      draft: false,
    };
  }

  return ev.pull_request || null;
}

(async () => {
  const ev = getEvent();
  const pr = getPR(ev);

  if (!pr) {
    console.log("No pull_request in event; exiting.");
    return;
  }

  if (pr.draft) {
    console.log(`PR #${pr.number} is a draft; skipping.`);
    return;
  }

  const safeTitle = escapeSlackLabel(pr.title);
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
