<template>
  <div id="privacy-policy-page" class="privacy-policy-page pt-20 pb-12 my-20">
    <section class="px-4">
      <div id="intro" class="container mx-auto mb-3">
        <h1 class="text-black text-center pb-8">
          {{ $t('privacy.intro.title') }}
        </h1>
        <p>{{ $t('privacy.intro.text_1') }}</p>
        <p>{{ $t('privacy.intro.text_2') }}</p>
        <p>{{ $t('privacy.intro.text_3') }}</p>
      </div>
      <div id="consent" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.consent.title') }}</h2>
        <p>{{ $t('privacy.consent.text_1') }}</p>
      </div>
      <div id="collected_info" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.collected_info.title') }}</h2>
        <p>{{ $t('privacy.collected_info.text_1') }}</p>
        <p>{{ $t('privacy.collected_info.text_2') }}</p>
        <p>{{ $t('privacy.collected_info.text_3') }}</p>
      </div>
      <div id="used_info" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.used_info.title') }}</h2>
        <p>{{ $t('privacy.used_info.text_1') }}</p>
        <ul class="pl-10">
          <li>{{ $t('privacy.used_info.ul_1') }}</li>
          <li>{{ $t('privacy.used_info.ul_2') }}</li>
          <li>{{ $t('privacy.used_info.ul_3') }}</li>
          <li>{{ $t('privacy.used_info.ul_4') }}</li>
          <li>{{ $t('privacy.used_info.ul_5') }}</li>
          <li>{{ $t('privacy.used_info.ul_6') }}</li>
          <li>{{ $t('privacy.used_info.ul_7') }}</li>
        </ul>
      </div>
      <div id="log_files" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.log_files.title') }}</h2>
        <p>{{ $t('privacy.log_files.text_1') }}</p>
      </div>
      <div id="cookies" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.cookies.title') }}</h2>
        <p>{{ $t('privacy.cookies.text_1') }}</p>
        <p>{{ $t('privacy.cookies.text_2') }}</p>
      </div>
      <div id="doubleclick" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.doubleclick.title') }}</h2>
        <p>{{ $t('privacy.doubleclick.text_1') }}</p>
      </div>
      <div id="advertising_partners" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.advertising_partners.title') }}</h2>
        <p>{{ $t('privacy.advertising_partners.text_1') }}</p>
        <p>{{ $t('privacy.advertising_partners.text_2') }}</p>
      </div>
      <div id="advertising_partners_policy" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.advertising_partners_policy.title') }}</h2>
        <p>{{ $t('privacy.advertising_partners_policy.text_1') }}</p>
        <p>{{ $t('privacy.advertising_partners_policy.text_2') }}</p>
        <p>{{ $t('privacy.advertising_partners_policy.text_3') }}</p>
      </div>
      <div id="3rd_partners_policy" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.3rd_partners_policy.title') }}</h2>
        <p>{{ $t('privacy.3rd_partners_policy.text_1') }}</p>
        <p>{{ $t('privacy.3rd_partners_policy.text_2') }}</p>
      </div>
      <div id="ccpa_privacy" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.ccpa_privacy.title') }}</h2>
        <p>{{ $t('privacy.ccpa_privacy.text_1') }}</p>
        <p>{{ $t('privacy.ccpa_privacy.text_2') }}</p>
        <p>{{ $t('privacy.ccpa_privacy.text_3') }}</p>
        <p>{{ $t('privacy.ccpa_privacy.text_4') }}</p>
        <p>{{ $t('privacy.ccpa_privacy.text_5') }}</p>
      </div>
      <div id="gdpr_privacy" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.gdpr_privacy.title') }}</h2>
        <p>{{ $t('privacy.gdpr_privacy.text_1') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_2') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_3') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_4') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_5') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_6') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_7') }}</p>
        <p>{{ $t('privacy.gdpr_privacy.text_8') }}</p>
      </div>
      <div id="children" class="container mx-auto mb-3">
        <h2>{{ $t('privacy.children.title') }}</h2>
        <p>{{ $t('privacy.children.text_1') }}</p>
        <p>{{ $t('privacy.children.text_2') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('privacy.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('privacy.seo.description')
        },
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.$t('privacy.seo.title')
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.$t('privacy.seo.description')
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
  nuxtI18n: {
    paths: {
      en: '/privacy',
      es: '/privacidad',
      'pt-br': '/privacidade'
    }
  }
}
</script>
