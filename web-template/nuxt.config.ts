// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 外掛Vuetify
  //...
  build:{
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // 全局CSS
  css: ["@/assets/styles/global.css"],
  // BACKEND API 
  runtimeConfig: {
    public: {
      // 開發環境 API
      API_BASE_DEV: '',
      // 生產環境 API
      API_BASE_PROD: ''
    }
  }
})
