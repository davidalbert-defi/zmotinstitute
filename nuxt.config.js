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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'shortcut icon', href: '/favicon.png' },
      // { rel: 'canonical', href: 'https://zmotinstitute.com/' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }
    ]
  },
  // Environment Variables
  env: {
    hubSpotAPIKey: process.env.hubSpotAPIKey,
    hubSpotPortalId: process.env.hubSpotPortalId,
    hubSpotFormGuid: process.env.hubSpotFormGuid,
    contactFormGuid: process.env.contactFormGuid,
    hubSpotNewsLetterFormGuid: process.env.hubSpotNewsLetterFormGuid,
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000'
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
    '~/plugins/jsonld',
    { src: '~/plugins/ga', ssr: false },
    // { src: '~/plugins/recaptcha', ssr: false },
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/components', ssr: false }
  ],

  // Rendering Configuration
  render: {
    // csp: true
    // http2: {
    //   push: true,
    // pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //   .filter(f => f.asType === 'script' && f.file === 'runtime.js')
    //   .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    // }
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/device',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-compress',
    '@nuxtjs/dotenv'
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
    }],
    'nuxt-ssr-cache',
    ['@dansmaculotte/nuxt-security', {
      additionalHeaders: false
    }],
    'nuxt-hsts-module'
    // '@nuxtjs/gtm'
  ],
  serverMiddleware: [
    //server side redirects
    '~/serverMiddleware/redirects',
  ],

  // Hsts module configuration
  hsts: process.env.NODE_ENV === 'production',

  // Tailwindcss Configuration
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/scss/tailwind.css'
  },

  // Google Tag Manager Configuration (https://www.npmjs.com/package/@nuxtjs/gtm)
  // gtm: {
  //   id: process.env.GTM_ID,
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

  // Nuxt SSR cache configuration
  cache: {
    useHostPrefix: false,
    pages: [
      '/'
    ],

    key (route, context) {
      // custom function to return cache key, when used previous
      // properties (useHostPrefix, pages) are ignored. return
      // falsy value to bypass the cache
    },

    store: {
      type: 'memory',
      // maximum number of pages to store in memory
      max: 100,
      // number of seconds to store this page in cache
      ttl: 31536000
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
      const { data } = await axios.get('https://thezmot.com/wp-json/wp/v2/posts?_embed=1&per_page=100')
      // https://thezmot.com/wp-json/wp/v2/posts?_embed=1&per_page=100
      const staticSitemap = [
        {
          url: '/',
          links: [
            { lang: 'en', url: '/' },
            { lang: 'es', url: 'es/' },
            { lang: 'pt-br', url: 'pt-br/' }
          ]
        },
        {
          url: '/contact',
          links: [
            { lang: 'en', url: '/contact' },
            { lang: 'es', url: 'es/contacto' },
            { lang: 'pt-br', url: 'pt-br/contato' }
          ]
        },
        {
          url: '/blog',
          links: [
            { lang: 'en', url: '/blog' },
            { lang: 'es', url: 'es/blog' },
            { lang: 'pt-br', url: 'pt-br/blog' }
          ]
        },
        {
          url: '/privacy',
          links: [
            { lang: 'en', url: '/privacy' },
            { lang: 'es', url: 'es/privacidad' },
            { lang: 'pt-br', url: 'pt-br/privacidade' }
          ]
        },
        {
          url: '/digital-marketing-courses',
          links: [
            { lang: 'en', url: '/digital-marketing-courses' },
            { lang: 'es', url: 'es/cursos-de-marketing-digital' },
            { lang: 'pt-br', url: 'pt-br/cursos-de-marketing-digital' }
          ]
        },
        {
          url: '/keynote-speakers',
          links: [
            { lang: 'en', url: '/keynote-speakers' },
            { lang: 'es', url: 'es/ponentes' },
            { lang: 'pt-br', url: 'pt-br/palestrantes' }
          ]
        },
        {
          url: '/digital-marketing-services',
          links: [
            { lang: 'en', url: '/digital-marketing-services' },
            { lang: 'es', url: 'es/servicios-de-marketing-digital' },
            { lang: 'pt-br', url: 'pt-br/consultoria-de-marketing-digital' }
          ]
        }
      ]
      const sitemaps = data.map(blog => ({
        url: `/blog/${blog.slug}`,
        links: [
          { lang: 'en', url: blog.slug },
          { lang: 'es', url: `es/${blog.slug}` },
          { lang: 'pt-br', url: `pt-br/${blog.slug}` }
        ]
      }))
      return sitemaps.concat(staticSitemap)
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
    extend (config, { isDev, isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls['img'] = ['src', 'data-src']
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
  pwa: {
    manifest: {
      name: 'zmotinstitute',
      short_name: 'zmotinstitute',
      lang: 'en',
      theme_color: '#fc642e',
      background_color: '#ffffff',
      display: 'standalone'
    }
  }
}
