<template>
  <div class="blog-index-page pt-20">
    <client-only>
      <section-blog />
    </client-only>

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
