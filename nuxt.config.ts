export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",
  devtools: { enabled: true },
  css: ["~/assets/style.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "keywords",
          content:
            "Sencraft, SenCraft, 森世界, minecraft, 我的世界, 创造服, 建筑服, 原神, wiki, 百科, 指南, 创世神, help wiki, guide, 插件教程, SC, 下载, minecraft server, ezedits 教程,ezedits 插件, minecraft ezedits, ezedits mod",
        },
        { name: "twitter:image", content: "/cover.png" },
      ],
    },
  },
  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    "nuxt-og-image",
    "nuxt-schema-org",
  ],
  site: {
    url: "https://xn--rhqx00c95nv9a.wiki",
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        verbatimModuleSyntax: false,
      },
    },
  },
  // routeRules: {
  //   "/*": { ssr: true },
  // },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/","/sitemap.xml"],
    },
  },
  // ssr: true,
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "SenCraft server",
      logo: "https://xn--rhqx00c95nv9a.wiki/logo.svg",
    },
  },
});
