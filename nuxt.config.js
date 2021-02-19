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
      dark: false,
      themes: {
        light: {
          primary: '#6DB41D',
          accent: '#FF6600',
          secondary: '#8D027E',
          info: '#4393C3',
          warning: '#FF9700',
          error: '#FF1900',
          success: '#6DB41D',
          background: '#ffffff',
          altBackground:'#F5F1E5',
          sectionBG: '#F2F0EC',
          brandPrimary: '#6DB41D',
          fontColor: '#000000',
          cardBackground:'#eaf5e8',
          cardBG: '#9e7a5a'
        },
        dark: {
          primary: '#6DB41D',
          accent: '#FF6600',
          secondary: '#8D027E',
          info: '#4393C3',
          warning: '#FF9700',
          error: '#FF1900',
          success: '#6DB41D',
          background: '#1A0E40',
          altBackground:'#291471',
          sectionBG: '#291471',
          brandPrimary: '#6DB41D',
          fontColor: '#FFFFFF',
          cardBackground:'#1f1151',
          cardBG: '#190d29'
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["gsap"],
  }
}
