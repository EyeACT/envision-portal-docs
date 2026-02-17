export default defineNuxtConfig({
  extends: ["docus"],
  // css: ['~/assets/css/main.css'],
  site: {
    name: "Envision Portal Docs",
  },
  mdc: {
    highlight: {
      shikiEngine: "javascript",
    },
  },
  compatibilityDate: "2025-07-18",
  vite: {
    build: {
      sourcemap: false,
    },
  },
  llms: {
    domain: "https://docus.dev",
    title: "Docus",
    description: "Write beautiful docs with Markdown.",
    full: {
      title: "Docus",
      description: "Write beautiful docs with Markdown.",
    },
  },
  mcp: {
    name: "Envision Portal Docs",
    browserRedirect: "/en/ai/mcp",
  },
});
