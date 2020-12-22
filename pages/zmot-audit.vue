<template>
  <div class="zmot-audit-page px-4 bg-primary pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-zmot-audit />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  head () {
    return {
      title: this.$t('zmot_audit.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('zmot_audit.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('zmot_audit.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('zmot_audit.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: require('~/assets/img/zmot-logo.png')
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: this.$route.path
        }

      ]
    }
  },
  nuxtI18n: {
    paths: {
      en: '/zmot-audit',
      es: '/auditoria-zmot',
      'pt-br': '/auditoria-zmot'
    }
  },
  layout: 'noheader'
}
</script>
