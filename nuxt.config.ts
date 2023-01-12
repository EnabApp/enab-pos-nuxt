// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});
