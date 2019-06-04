import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Treelar.xyz",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#3399ff'},
      { name: 'og-name', content: "Tyler's Website"},
      { name: 'og:type', content: "website"},
      { name: 'og:url', content: "https://treelar.com"},
      { name: 'og:description', content: "Why not learn about some dude that makes bad (good) robots, epic games (Reverse Game), horribly inefficient code, can speak very english sounding japanese, and starts watching anime because some filipino guy shows him a circle clicking game...also check out my GitHub please."},
      { name: 'og:image', content: "https://treelar.xyz/logoassets/avatar8192x8192.png"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Comfortaa"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3399ff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/promised'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    ['nuxt-i18n', {
      locales: [{code: "en", iso: "en-US"}, {code: "ja", iso: "ja-JP"}],
      defaultLocale: "en",
      vueI18nLoader: true,
      detectBrowserLanguage: {
        useCookie: false
      }
    }],
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  server:
  {
    port: 8080
  }
}
