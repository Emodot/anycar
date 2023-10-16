export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'anycar',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/toaster', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  loading: {
    height: '2px',
    color: '#150A41'
  },
  toast: {
    position: 'top-right',
    register: [
      {
        name: 'custom_success',
        message: message => message,
        options: {
          type: 'success',
          duration: 4000,
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      },
      {
        name: 'custom_error',
        message: message => message,
        options: {
          type: 'error',
          duration: 3000,
          action: {
            icon: 'close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
            }
          }
        }
      }
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: 'http://54.162.191.53:5000/'
    baseURL: 'https://average-toga-cow.cyclic.cloud/'
    // baseURL: 'https://api.api-ninjas.com/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
