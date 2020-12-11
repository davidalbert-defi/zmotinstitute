<template>
  <div class="lectures-events-page px-4 bg-primary pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-lecture-banner />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-lecture-content />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  head () {
    return {
      title: this.$t('lectures_events.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('lectures_events.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('lectures_events.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('lectures_events.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: '../assets/img/zmot-logo.webp'
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
      en: '/lectures-events',
      es: '/conferencias-eventos',
      'pt-br': '/palestras-eventos'
    }
  },
  layout: 'noheader'
}
</script>
