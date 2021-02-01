import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - smart-village-ryp',
    title: 'smart-village-ryp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/znu8ouz.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/image'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
  },

  image: {
    // Options
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#582DD2',
          accent: '#D02C75',
          secondary: '#1A0E60',
          info: '#1179F5',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#F4812E',
          background: '#ffffff',
          altBackground:'#f8edff',
          sectionBG: '#ddc5ff',
          brandPrimary: '#1179F5',
          fontColor: '#1A0E60'
        },
        dark: {
          primary: '#582DD2',
          accent: '#D02C75',
          secondary: '#1A0E60',
          info: '#1179F5',
          warning: colors.amber.base,
          error: colors.red.darken1,
          success: '#F4812E',
          background: '#1A0E40',
          altBackground:'#291471',
          sectionBG: '#382092',
          brandPrimary: '#1179F5',
          fontColor: '#FFFFFF'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
