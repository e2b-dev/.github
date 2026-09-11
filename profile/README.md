<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/.github/assets/e2b-open-source-dark.png">
  <img alt="E2B Open Source" src="/.github/assets/e2b-open-source-light.png" width="100%">
</picture>

## About E2B

[E2B](https://e2b.dev/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org) is the AI agent cloud. It gives every agent session an isolated Linux machine that boots from a snapshot and works with any model or agent framework. You ship the agent. We run the infrastructure. Our cloud or yours.

This GitHub organization hosts every layer of that stack in the open, under Apache-2.0: the Firecracker runtime, the control plane, the in-VM agent, the SDKs, and the dashboard. The code running E2B Cloud is the code in these repositories. Read the documentation at [docs.e2b.dev](https://docs.e2b.dev).

### Getting started

- Start with the [Quickstart guide in our documentation](https://docs.e2b.dev/quickstart).
- Get an API key at [e2b.dev](https://e2b.dev/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org), then `npm i e2b` or `pip install e2b`.
- Want the whole stack on a machine you own? [E2B Embed](https://github.com/e2b-dev/runtime/tree/main/embed) brings it up with `docker compose up`.

### Repositories

- [E2B Runtime](https://github.com/e2b-dev/runtime): The runtime behind every E2B stack: Cloud, Enterprise, and your own machine. Control plane, Firecracker orchestrator, in-VM agent, edge router, and template builder, in Go.
- [E2B SDK](https://github.com/e2b-dev/E2B): The SDK & CLI for JavaScript and Python. Create sandboxes, run commands, move files, expose ports, pause and resume.
- [E2B Code Interpreter](https://github.com/e2b-dev/code-interpreter): Python & JS/TS SDK for running AI-generated code with stateful execution, charts, and streaming output. Built on the E2B SDK.
- [E2B Desktop](https://github.com/e2b-dev/desktop): E2B Sandbox with a graphical desktop that you can connect to any LLM for secure computer use.
- [E2B Dashboard](https://github.com/e2b-dev/dashboard): Open-source dashboard for a runtime you host yourself. Sandboxes, templates, and builds behind a team API key.

### Examples

- [Fragments](https://github.com/e2b-dev/fragments): Open-source template for building apps like Anthropic's Claude Artifacts, Vercel v0, or GPT Engineer.
- [Surf](https://github.com/e2b-dev/surf): A computer-use agent that drives an E2B desktop through natural language instructions.
- [Open Computer Use](https://github.com/e2b-dev/open-computer-use): Open-source AI computer use powered by open-source LLMs and the E2B Desktop Sandbox.
- [AI Analyst](https://github.com/e2b-dev/ai-analyst): Upload a CSV, ask questions, get interactive charts. An open-source AI analyst on E2B.
- [E2B Cookbook](https://github.com/e2b-dev/e2b-cookbook): Example code and guides for every major model provider and agent framework.

E2B also ships sandbox backends for [Vercel AI SDK](https://github.com/e2b-dev/ai-sdk-sandbox), [LangChain Deep Agents](https://github.com/e2b-dev/langchain-e2b), [Google ADK](https://github.com/e2b-dev/e2b-adk-plugin), [n8n](https://github.com/e2b-dev/n8n-nodes-e2b), and [Hermes Agent](https://github.com/e2b-dev/hermes-plugin-e2b), and maintains [awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents), the list of AI autonomous agents.

### Where to find us

Questions, feedback, or need help getting set up? Join the community or reach out on social.

[![Discord](https://img.shields.io/badge/discord-join-5865F2.svg?logo=discord&logoColor=white)](https://discord.gg/e2b)
[![X](https://img.shields.io/badge/follow-%40e2b-000000.svg?logo=x&logoColor=white)](https://x.com/e2b)
[![LinkedIn](https://img.shields.io/badge/linkedin-e2b--dev-0A66C2.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/company/e2b-dev/)

### We are hiring!

We are building the infrastructure layer for AI agents. Check out the [open positions](https://e2b.dev/careers?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org) at E2B.
