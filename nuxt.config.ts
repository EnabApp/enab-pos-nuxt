// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@anu-vue/nuxt',
    "@unocss/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],

  css: [
    '@anu-vue/preset-theme-default/dist/style.css',
    '@/assets/style.css'
  ],

  colorMode: {
    preference: 'dark',
    dataValue: 'dark',
    classSuffix: '',
    fallback: 'dark',
    classPrefix: '',
  },

  runtimeConfig: {
    public: {
      BASE_URL: "http://localhost:8000",
      VERSION: "0.0.1"
    }
  },

  imports: {
    dirs: ['stores']
  }

});
