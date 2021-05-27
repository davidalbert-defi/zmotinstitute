<template>
  <div class="blog-index-page">
      <!-- <section-list-blog /> -->
    <!-- </lazy-hydrate> -->
    <!-- search bar -->
    <client-only>
      <section-search-blog />
    </client-only>
    <!-- blog title -->
    <client-only>
      <section-list-blog />
    </client-only>
    <!-- rendered posts -->
    <client-only>
      <!-- <section-blog /> -->
      <section-blog :key="blogListComponent" />
    </client-only>
    <!-- newsletter form -->
    <lazy-hydrate when-visible>
      <news-letter />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate
  },
  data: () => ({
    blogListComponent: ''
  }),
  head () {
    return {
      title: this.$t('blog.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('blog.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('blog.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('blog.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: process.env.BASE_URL + require('~/assets/img/header-zmot.jpg')
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
