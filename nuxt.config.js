export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'zmotinstitute',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/scss/style.scss'
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
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/recaptcha', {
        /* reCAPTCHA options */
        hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
        siteKey: "6LdXyQEVAAAAAD5ECL2PFXuM39YFgpUpUY05_loV",
        version: 2,     // Version
        size: "normal"        // Size: 'compact', 'normal', 'invisible' (v2)
      }
    ],
    '@nuxtjs/robots',
    // '@nuxtjs/gtm'
  ],

  //Google Tag Manager Configuration (https://www.npmjs.com/package/@nuxtjs/gtm)
  // gtm: {
  //   id: "GTM-K3SW4XN",
  //   pageTracking: true
  // },

  //ROBOTS configuration (https://www.npmjs.com/package/@nuxtjs/robots)
  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
