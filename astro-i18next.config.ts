import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "zh"],
  routes: {
    zh: {
      about: "关于",
      posts: "博客",
      notes: "笔记"
    }
  },
  i18nextServer: {
    debug: false,
    initImmediate: false,
    backend: {
      loadPath: "./public/locales/{{lng}}/{{ns}}.json"
    }
  },
  showDefaultLocale: false,
  trailingSlash: "always"
};

export default config; 