<template>
  <div class="online-courses-page px-4 bg-primary pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-courses-content />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  head () {
    return {
      title: this.$t('online_courses.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('online_courses.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('online_courses.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('online_courses.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: '../assets/img/zmot-logo.png'
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
      en: '/online-courses',
      es: '/cursos-online',
      'pt-br': '/cursos-online'
    }
  },
  layout: 'noheader'
}
</script>
