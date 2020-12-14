<template>
  <div class="leading-normal tracking-normal bg-white">
    <Nuxt />
  </div>
</template>

<script>
export default {
  head () {
    const i18nSeo = this.$nuxtI18nSeo()
    return {
      htmlAttrs: {
        // myAttribute: 'My Value',
        ...i18nSeo.htmlAttrs
      },
      meta: [
        // {
        //   hid: 'description',
        //   name: 'description',
        //   content: 'My Custom Description'
        // },
        ...i18nSeo.meta
      ],
      link: [
        // {
        //   hid: 'apple-touch-icon',
        //   rel: 'apple-touch-icon',
        //   sizes: '180x180',
        //   href: '/apple-touch-icon.png'
        // },
        ...i18nSeo.link
      ]
    }
  }
}
</script>
