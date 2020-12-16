<template>
  <div class="bg-white">
    <lazy-hydrate when-visible>
      <section-banner />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-whyzmot />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-specialists />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-services />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-sayaboutus />
    </lazy-hydrate>

    <news-letter />
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate
  },
  head () {
    return {
      title: this.$t('homepage.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('homepage.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('homepage.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('homepage.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: '../assets/img/header-zmot.jpg'
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: this.$route.path
        }
      ]
    }
  }
}
</script>
