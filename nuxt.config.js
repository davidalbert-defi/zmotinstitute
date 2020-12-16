import axios from 'axios'

export default {
  server: {
    host: '0.0.0.0',
    port: 3000
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { rel: 'shortcut icon', href: '/icon.png' },
      { rel: 'canonical', href: 'https://zmotinstitute.com/' },
      { rel: 'alternate', hreflang: 'en', href: 'https://zmotinstitute.com/' },
      { rel: 'alternate', hreflang: 'es', href: 'https://zmotinstitute.com/es' },
      { rel: 'alternate', hreflang: 'pt-br', href: 'https://zmotinstitute.com/pt-br' }
    ]
  },
  // Environment Variables
  env: {
    hubSpotAPIKey: process.env.hubSpotAPIKey,
    hubSpotPortalId: process.env.hubSpotPortalId,
    hubSpotFormGuid: process.env.hubSpotFormGuid,
    contactFormGuid: process.env.contactFormGuid
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/scss/style.scss',
    '@assets/scss/tailwind.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/bus',
    { src: '~/plugins/GoogleAnalytics', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/components', ssr: false }
  ],

  // Rendering Configuration
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
        .filter(f => f.asType === 'script' && f.file === 'runtime.js')
        .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    }
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-compress'
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
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 2, // Version
        size: 'normal' // Size: 'compact', 'normal', 'invisible' (v2)
      }
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-lazy-load',
    [
      'nuxt-sweetalert2',
      {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674'
      }
    ],
    ['nuxt-i18n', {
      baseUrl: 'https://zmotinstitute.com', // need to change it when HTTPS
      seo: false,
      strategy: 'prefix_except_default',
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US'
        },
        {
          name: 'Português',
          code: 'pt-br',
          iso: 'pt-BR'
        },
        {
          name: 'Español',
          code: 'es',
          iso: 'es-ES'
        }
      ],
      defaultLocale: 'en',
      detectBrowserLanguage: {
        useCookie: true,
        alwaysRedirect: true
      },
      vueI18n: {
        fallbackLocale: 'en',
        messages: {
          en: require('./locales/en.json'),
          'pt-br': require('./locales/pt-br.json'),
          es: require('./locales/es.json')
        }
      }
    }]
    // '@nuxtjs/gtm'
  ],

  // Tailwindcss Configuration
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/scss/tailwind.css'
  },

  // Google Tag Manager Configuration (https://www.npmjs.com/package/@nuxtjs/gtm)
  // gtm: {
  //   id: "GTM-K3SW4XN",
  //   pageTracking: true
  // },

  // ROBOTS configuration (https://www.npmjs.com/package/@nuxtjs/robots)
  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  // Nuxt compress Configuration (https://www.npmjs.com/package/nuxt-compress)
  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },

  // Sitemap Configuration (https://www.npmjs.com/package/@nuxtjs/sitemap)
  sitemap: {
    hostname: 'https://zmotinstitute.com',
    // gzip: false,
    // i18n:true
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es', 'pt-br'],
      routesNameSeparator: '___'
    },

    routes: async () => {
      const { data } = await axios.get('https://thezmot.com/wp-json/wp/v2/posts')
      return data.map(blog => ({
        url: `/blog/${blog.slug}`,
        links: [
          { lang: 'en', url: blog.slug },
          { lang: 'es', url: `es/${blog.slug}` },
          { lang: 'pt-br', url: `pt-br/${blog.slug}` }
        ]
      }))
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }

      config.module.rules.unshift({
        test: /\.jpe?g$/,
        use: {
          loader: 'responsive-loader',
          options: {
            name: 'images/[hash:hex:7]_[width]x.[ext]',
            min: 320,
            max: 2880,
            steps: 9,
            quality: 80,
            placeholder: true,
            placeholderSize: 32,
            adapter: require('responsive-loader/sharp')
          }
        }
      })

      config.module.rules.unshift({
        test: /\.png$/,
        use: {
          loader: 'responsive-loader',
          options: {
            name: 'images/[hash:hex:7]_[width]x.[ext]',
            min: 320,
            max: 2880,
            steps: 9,
            quality: 80,
            placeholder: true,
            placeholderSize: 32,
            adapter: require('responsive-loader/sharp')
          }
        }
      })
    }
  },
  manifest: {
    name: 'Zmotinstitute',
    short_name: 'Zmotinstitute',
    lang: 'en',
    display: 'standalone'
  },
  pwa: {
    icon: false
  }
}
