<template>
  <div class="digital-page px-2 bg-white pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-digital-hero />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-digital-what-we-do />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-digital-how-we-do />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-digital-reviews />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <contact-form />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-digital-related-services />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-digital-faq />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  data: () => ({
    serviceNum: '1'
  }),
  head () {
    return {
      title: this.$t('marketing_services.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('marketing_services.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('marketing_services.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('marketing_services.seo.description')
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
  },
  jsonld () {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: this.$t('marketing_services.faq.question_1_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('marketing_services.faq.question_1_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('marketing_services.faq.question_5_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('marketing_services.faq.question_5_answer_line_1')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('marketing_services.faq.question_2_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('marketing_services.faq.question_2_answer')
          }
        }
      ]
    }
  }
}
</script>
