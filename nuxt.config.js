import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Treelar",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#3399ff' },
      { name: 'og-name', content: "Treelar.wtf" },
      { name: 'og:type', content: "website" },
      { name: 'og:url', content: "https://treelar.com" },
      { name: 'og:description', content: "Why not learn about some dude that makes bad (good) robots, epic games (Reverse Game), horribly inefficient code, can speak very broken japanese, and becomes idol fan because some filipino guy shows him a circle clicking game." },
      { name: 'og:image', content: "https://treelar.xyz/logoassets/logo2020.png" }
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
    // '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "@/plugins/lazysizes",
    '@/plugins/animate',
    '@/plugins/promised'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    'nuxt-i18n',
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    [
      "@nuxtjs/pwa",
      { icon: false }
    ]
  ],

  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true
    }
  },

  buildModules: [
    "@nuxtjs/vuetify",
    "@nuxt/typescript-build"
  ],

  vuetify: {
    theme: {
      dark: true
    }
  },

  sitemap: {
    hostname: 'https://treelar.wtf'
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [],
    loaders: {
      stylus: {
        // import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.module.rules.forEach((r) => {
        if(r.test.toString() === `/\.(png|jpe?g|gif|svg|webp)$/i`) {
          r.use = [
            {
              loader: "url-loader",
              options: {
                limit: 1000,
                name: 'img/[name].[hash:7].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
            }
          ]
          delete r.loader;
          delete r.options;
        }
      })
      config.module.rules.push(
        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader'
        }
      )
    },
  },
  server:
  {
    port: 1234
  }
}
