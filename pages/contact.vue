<template>
  <div id="contact-page" class="pt-16 pb-12">
    <lazy-hydrate when-visible>
      <section-contact-banner />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-contact-form />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate
  },
  nuxtI18n: {
    paths: {
      en: '/contact',
      es: '/contacto',
      'pt-br': '/contato'
    }
  },
  head () {
    return {
      title: this.$t('contact.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('contact.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('contact.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('contact.seo.description')
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: process.env.BASE_URL + require('~/assets/img/contact/contact_hero.png')
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
