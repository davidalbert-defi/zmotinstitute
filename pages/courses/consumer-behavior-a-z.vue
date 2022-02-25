<template>
  <div class="online-courses-page px-2 bg-white pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <hero-course-consumer-behavior />
    </lazy-hydrate>
    <!-- <lazy-hydrate when-visible>
      <divisor-course-consumer-behavior />
    </lazy-hydrate> -->
    <div class="item-center" id="will-learn">
            <will-learn-course-consumer-behavior />
        </div>
    <lazy-hydrate when-visible>
      <outline-course-consumer-behavior />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <pricing-course-consumer-behavior />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <testimonials-course-consumer-behavior />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-course-why-hire />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <faq-course-consumer-behavior />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  data: () => ({
    serviceNum: '4'
  }),
  head () {
    return {
      title: this.$t('courses_consumer_behavior.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('courses_consumer_behavior.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('courses_consumer_behavior.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('courses_consumer_behavior.seo.description')
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
      en: '/consumer-behavior-course',
      es: '/curso-comportamento-del-consumidor',
      'pt-br': '/curso-comportamento-do-consumidor'
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
