// https://nuxt.com/docs/api/configuration/nuxt-config

// import { startCrontab } from './server/crontab/crontab'
// import fetchAndSave from './server/crontab/fetch-endpoint'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  dir: {
    pages: 'app/providers/router/routes',

    assets: 'shared/assets',
  },

  srcDir: 'src/',

  // hooks: {
  //   'nitro:init'() {
  //     console.log('start crontab')
  //     // fetchAndSave()
  //     // startCrontab()
  //   },
  // },

  modules: ['@nuxtjs/tailwindcss'],
})
