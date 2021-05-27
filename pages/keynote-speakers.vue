<template>
  <div class="keynote-events-page px-2 pb-12">
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-hero />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-why-hire />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-our-talks />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-gallery />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-customer-review />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <contact-form />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-related-services />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-keynote-speaker-faq />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  data: () => ({
    serviceNum: '2'
  }),
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
  },
  jsonld () {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: this.$t('keynote_speakers.faq.question_1_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('keynote_speakers.faq.question_1_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('keynote_speakers.faq.question_2_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('keynote_speakers.faq.question_2_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('keynote_speakers.faq.question_4_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('keynote_speakers.faq.question_4_answer')
          }
        }
      ]
    }
  }
}
</script>
