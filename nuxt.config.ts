// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // page title
  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      title: "😶‍🌫️ kuzey k.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { hid: "description", name: "description", content: "15 year old self-taught web developer from Turkiye" },
        { name: "theme-color", content: "#f3eef8" },
        { name: "og:title", content: "😶‍🌫️ Hey, I'm Kuzey" },
        { name: "og:description", content: "🫠 15 year old self-taught web developer from Turkiye" },
        { name: "og:image", content: "/icon.png" },
        { name: "og:theme-color", content: "#f3eef8" },
      ]
    },
  },
  css: [
    "~/assets/css/style.css"
  ],
})
