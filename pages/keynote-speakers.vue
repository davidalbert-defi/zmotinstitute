<template>
  <div class="lectures-events-page px-4 pb-12">
    <lazy-hydrate when-visisble>
      <section-keynote-hero />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-why-hire />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-out-keynotes />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-gallery />
    </lazy-hydrate>
    <section-keynote-customer-review />
    <lazy-hydrate when-visisble>
      <contact-form />
    </lazy-hydrate>
    <section-keynote-faq />
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  head () {
    return {
      title: this.$t('keynote_speakers.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('keynote_speakers.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('keynote_speakers.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('keynote_speakers.seo.description')
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
      en: '/keynote-speakers',
      es: '/ponentes',
      'pt-br': '/palestrantes'
    }
  }
}
</script>
