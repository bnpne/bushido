// https://nuxt.com/docs/api/configuration/nuxt-config
import glsl from "vite-plugin-glsl";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  pages: true,

  build: {
    transpile: ["gsap", "three"],
  },

  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
    },
  },

  css: ["@/assets/styles/globals.scss"],

  modules: ["@nuxtjs/sanity", "@nuxtjs/device", "@pinia/nuxt"],

  sanity: {
    projectId: "f1w91lhf",
    dataset: "production",
    apiVersion: "2022-04-26",
    useCdn: false,
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true,
      },
    },
  },

  vite: {
    plugins: [glsl()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_functions.scss" as *;',
        },
      },
    },
  },
});
