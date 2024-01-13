// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // page title
  // import https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js
  modules: ["nuxt-lodash"],
  css: ["~/assets/css/style.css"],

  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      title: "😶‍🌫️ kuzey k.",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "15 year old self-taught web developer from Turkiye",
        },
        { name: "theme-color", content: "#f3eef8" },
        { name: "og:title", content: "😶‍🌫️ Hey, I'm Kuzey" },
        {
          name: "og:description",
          content: "🫠 15 year old self-taught web developer from Turkiye",
        },
        { name: "og:image", content: "/icon.png" },
        { name: "og:theme-color", content: "#f3eef8" },
      ],
    },
  },
});
