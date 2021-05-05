<template>
  <div class="zmot-audit-page px-4 pb-12">
    <lazy-hydrate when-visible>
      <section-zmot-audit-hero />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-zmot-audit-features-list />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-zmot-step />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-zmot-reviews />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-zmot-audit-lead-form />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-zmot-audit-faq />
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
          content: process.env.BASE_URL + require('~/assets/img/zmot-logo.png')
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
      en: '/digital-marketing-services',
      es: '/servicios-de-marketing-digital',
      'pt-br': '/consultoria-de-marketing-digital'
    }
  }
}
</script>
