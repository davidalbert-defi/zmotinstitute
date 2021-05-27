<template>
  <div class="online-courses-page px-2 bg-white pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-course-hero />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-course-why-hire />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-course-our-courses />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-course-customer-review />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <contact-form />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-courses-related-services />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-course-faq />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  data: () => ({
    serviceNum: '3'
  }),
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
      en: '/digital-marketing-courses',
      es: '/cursos-de-marketing-digital',
      'pt-br': '/cursos-de-marketing-digital'
    }
  },
  jsonld () {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: this.$t('online_courses.faq.question_1_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('online_courses.faq.question_1_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('online_courses.faq.question_3_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('online_courses.faq.question_3_answer')
          }
        },
        {
          '@type': 'Question',
          name: this.$t('online_courses.faq.question_4_question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: this.$t('online_courses.faq.question_4_answer')
          }
        }
      ]
    }
  }
}
</script>
