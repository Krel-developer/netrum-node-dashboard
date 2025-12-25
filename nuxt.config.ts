// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  dir: {
    pages: 'app/providers/router/routes',

    assets: 'shared/assets',
  },
  srcDir: 'src/',
})
