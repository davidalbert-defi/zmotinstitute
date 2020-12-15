<template>
  <div class="leading-normal tracking-normal bg-white">
    <lazy-hydrate when-visible>
      <menu-header />
    </lazy-hydrate>
    <Nuxt />
    <lazy-hydrate when-visible>
      <menu-footer />
    </lazy-hydrate>
    <cookie />
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  data: () => ({
    visibleHeaderFooter: true
  }),
  mounted () {
    const navMenuDiv = document.getElementById('nav-content')
    const navMenu = document.getElementById('nav-toggle')

    document.onclick = check
    function check (e) {
      const target = (e && e.target) || (event && event.srcElement)

      // Nav Menu
      if (!checkParent(target, navMenuDiv)) {
        // click NOT on the menu
        if (checkParent(target, navMenu)) {
          // click on the link
          if (navMenuDiv.classList.contains('hidden')) {
            navMenuDiv.classList.remove('hidden')
          } else {
            navMenuDiv.classList.add('hidden')
          }
        } else {
          // click both outside link and outside menu, hide menu
          navMenuDiv.classList.add('hidden')
        }
      }
    }
    function checkParent (t, elm) {
      while (t.parentNode) {
        if (t === elm) {
          return true
        }
        t = t.parentNode
      }
      return false
    }
  },
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
