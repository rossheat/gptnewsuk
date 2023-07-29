# UK Latest News ChatGPT Plugin

This repository hosts the source code for the "UK Latest News ChatGPT Plugin", a Next.js project that fetches the latest news stories from the UK's top news outlets.

![Plugin showcase](./public/demo.png)

## Getting Started

The first step to get this project up and running locally is to clone the repository:

```bash
git clone https://github.com/rossheat/uk-latest-news-chatgpt-plugin.git
cd uk-latest-news-chatgpt-plugin
```

Then, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
```

Now you can run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Overview

This project exposes the "UK Latest News" API, which offers two main operations:

- `GET /api/v1/stories`: Fetches the latest news stories from multiple UK news sources and returns an array of Open Graph-compatible data for each story.
- `GET /api/v1/story`: Given a URL, extracts the story content from the webpage.

Detailed information about the API's operations, responses, and potential errors is available in the OpenApi.yaml file.

## Learning Resources

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Chat Plugin](https://platform.openai.com/docs/plugins/introduction) - learn how to make a plugin for ChatGPT.

## Deployment

The easiest way to deploy the plugin is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.