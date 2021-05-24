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

    <lazy-hydrate when-visible>
      <section-bloghome />
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
          content: process.env.BASE_URL + require('~/assets/img/header-zmot.jpg')
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: this.$route.path
        }
      ]
    }
  },
  jsonld () {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: this.$t('homepage.faq.question_1_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('homepage.faq.question_1_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('homepage.faq.question_2_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('homepage.faq.question_2_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('homepage.faq.question_3_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('homepage.faq.question_3_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('homepage.faq.question_4_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('homepage.faq.question_4_answer')
          }
        }
      ]
    }
  }
}
</script>
