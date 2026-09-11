<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/.github/assets/e2b-open-source-dark.png">
  <img alt="E2B Open Source" src="/.github/assets/e2b-open-source-light.png" width="100%">
</picture>

## About E2B

[E2B](https://e2b.dev/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org) is the AI agent cloud. It gives every agent session an isolated Linux machine that boots from a snapshot and works with any model or agent framework. You ship the agent. We run the infrastructure. Our cloud or yours.

This GitHub organization hosts every layer of that stack in the open, under Apache-2.0: the Firecracker runtime, the control plane, the in-VM agent, the SDKs, and the dashboard. The code running E2B Cloud is the code in these repositories. Read the documentation at [docs.e2b.dev](https://docs.e2b.dev).

<h3>Getting started</h3>

- Start with the [Quickstart guide in our documentation](https://docs.e2b.dev/quickstart).
- Get an API key at [e2b.dev](https://e2b.dev/?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org), then `npm i e2b` or `pip install e2b`.
- Want the whole stack on a machine you own? [E2B Embed](https://github.com/e2b-dev/runtime/tree/main/embed) brings it up with `docker compose up`.

<h3>Repositories</h3>

- [E2B Runtime](https://github.com/e2b-dev/runtime): The runtime behind every E2B stack: Cloud, Enterprise, and your own machine. Control plane, Firecracker orchestrator, in-VM agent, edge router, and template builder, in Go.
- [E2B SDK](https://github.com/e2b-dev/E2B): The SDK & CLI for JavaScript and Python. Create sandboxes, run commands, move files, expose ports, pause and resume.
- [E2B Code Interpreter](https://github.com/e2b-dev/code-interpreter): Python & JS/TS SDK for running AI-generated code with stateful execution, charts, and streaming output. Built on the E2B SDK.
- [E2B Desktop](https://github.com/e2b-dev/desktop): E2B Sandbox with a graphical desktop that you can connect to any LLM for secure computer use.
- [E2B Dashboard](https://github.com/e2b-dev/dashboard): Open-source dashboard for a runtime you host yourself. Sandboxes, templates, and builds behind a team API key.

<h3>Examples</h3>

- [Fragments](https://github.com/e2b-dev/fragments): Open-source template for building apps like Anthropic's Claude Artifacts, Vercel v0, or GPT Engineer.
- [Surf](https://github.com/e2b-dev/surf): A computer-use agent that drives an E2B desktop through natural language instructions.
- [Open Computer Use](https://github.com/e2b-dev/open-computer-use): Open-source AI computer use powered by open-source LLMs and the E2B Desktop Sandbox.
- [AI Analyst](https://github.com/e2b-dev/ai-analyst): Upload a CSV, ask questions, get interactive charts. An open-source AI analyst on E2B.
- [E2B Cookbook](https://github.com/e2b-dev/e2b-cookbook): Example code and guides for every major model provider and agent framework.

E2B also ships sandbox backends for [Vercel AI SDK](https://github.com/e2b-dev/ai-sdk-sandbox), [LangChain Deep Agents](https://github.com/e2b-dev/langchain-e2b), [Google ADK](https://github.com/e2b-dev/e2b-adk-plugin), [n8n](https://github.com/e2b-dev/n8n-nodes-e2b), and [Hermes Agent](https://github.com/e2b-dev/hermes-plugin-e2b), and maintains [awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents), the list of AI autonomous agents.

<h3>Where to find us</h3>

Need help setting up E2B? We are happy to connect! Give us any feedback on your experience with E2B.
<div align='center'>
<a href="https://x.com/e2b" target="_blank">
<img src="https://img.shields.io/badge/x (twitter)-%2300acee.svg?color=000000&style=for-the-badge&logo=x&logoColor=white" alt="X" style="margin-bottom: 5px;"/></a>
<a href="https://discord.gg/e2b" target="_blank">
<img src="https://img.shields.io/badge/discord -%2300acee.svg?color=143D52&style=for-the-badge&logo=discord&logoColor=white" alt="Discord" style="margin-bottom: 5px;"/></a>
<a href="https://www.linkedin.com/company/e2b-dev/" target="_blank">
<img src="https://img.shields.io/badge/linkedin-%2300acee.svg?color=000000&style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" style="margin-bottom: 5px;"/></a>
</div>

<h3>We are hiring!</h3>

We are building the infrastructure layer for AI agents. Check out the [open positions](https://e2b.dev/careers?utm_source=github&utm_medium=referral&utm_campaign=readme&utm_content=org) at E2B.
