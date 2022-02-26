<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white bg-primary">
    <div class="container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 w-1/2 md:w-auto">
        <nuxt-link :to="localePath('index')" class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
          <img
            v-bind="logoProp"
            :data-src="require('~/assets/img/zmot-logo.png').src"
            :srcset="require('~/assets/img/zmot-logo.png').srcSet"
            :blank-src="require('~/assets/img/zmot-logo.png').placeholder"
            class="lazy"
            alt="zmot-institute white logo"
          >
        </nuxt-link>
      </div>
      <div class="block lg:hidden relative text-center">
        <div>
          <button
            id="options-menu1"
            type="button"
            class="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded="true"
            @click="isOpen = !isOpen"
          >
            <img v-if="flagVisible === 1" v-lazy-load data-src="~/assets/img/svg/en.svg" width="25" alt="EN Flag">
            <img v-if="flagVisible === 2" v-lazy-load data-src="~/assets/img/svg/br.svg" width="25" alt="BR Flag">
            <img v-if="flagVisible === 3" v-lazy-load data-src="~/assets/img/svg/es.svg" width="25" alt="ES Flag">
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <button v-if="isOpen" class="fixed inset-0 h-full w-full bg-black opacity-0" tabindex="-1" @click="isOpen = false" />
        <div v-if="isOpen" class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu1">
            <ul>
              <li class="text-128px" @click="isOpen = false">
                <nuxt-link :to="switchLocalePath('en')" class="w-full inline-flex block text-black px-6 py-2">
                  <img data-not-lazy src="~/assets/img/svg/en.svg" class="mr-4 h-6" width="25" alt="USA Flag">
                  English
                </nuxt-link>
              </li>
              <li class="text-128px" @click="isOpen = false">
                <nuxt-link :to="switchLocalePath('pt-br')" class="w-full inline-flex block text-black px-6 py-2">
                  <img data-not-lazy src="~/assets/img/svg/br.svg" class="mr-4 h-6" width="25" alt="Brazillian Flag">
                  Português
                </nuxt-link>
              </li>
              <li class="text-128px" @click="isOpen = false">
                <nuxt-link :to="switchLocalePath('es')" class="w-full inline-flex block text-black px-6 py-2">
                  <img data-not-lazy src="~/assets/img/svg/es.svg" class="mr-4 h-6" width="25" alt="Spanish Flag">
                  Español
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="block lg:hidden">
        <button id="nav-toggle" class="flex items-center pl-1 pr-3 text-white-400 text-opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div id="nav-content" ref="nav_content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black px-4 lg:p-0 z-20 mr-4 ml-4">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3 my-6 text-center" @click="hideNavContent">
            <nuxt-link :to="localePath('index')" class="w-full inline-block py-1 px-5 font-semibold text-primary lg:text-white text-base no-underline">
              {{ $t('navs.home.title') }}
            </nuxt-link>
          </li>
          <li class="mr-3 my-6 text-center" @click="hideNavContent">
            <nuxt-link :to="localePath('blog')" class="w-full inline-block py-1 px-5 font-semibold text-primary lg:text-white text-base no-underline">
              {{ $t('navs.blog.title') }}
            </nuxt-link>
          </li>
          <li class="mr-3 my-6 text-center" @click="hideNavContent">
            <nuxt-link :to="localePath('contact')" class="w-full inline-block py-1 px-5 font-semibold text-primary lg:text-white text-base no-underline">
              {{ $t('navs.contact.title') }}
            </nuxt-link>
          </li>
        </ul>
        <div class="relative text-center text-white hidden lg:block">
          <div>
            <button
              id="options-menu"
              type="button"
              class="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              aria-haspopup="true"
              aria-expanded="true"
              @click="isOpen = !isOpen"
            >
              <img v-if="flagVisible === 1" v-lazy-load data-src="~/assets/img/svg/en.svg" width="25" alt="EN Flag">
              <img v-if="flagVisible === 2" v-lazy-load data-src="~/assets/img/svg/br.svg" width="25" alt="BR Flag">
              <img v-if="flagVisible === 3" v-lazy-load data-src="~/assets/img/svg/es.svg" width="25" alt="ES Flag">
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <button v-if="isOpen" class="fixed inset-0 h-full w-full bg-black opacity-0" tabindex="-1" @click="isOpen = false" />
          <div v-if="isOpen" class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <ul>
                <li class="text-128px" @click="isOpen = false">
                  <nuxt-link :to="switchLocalePath('en')" class="w-full inline-flex block text-black px-6 py-2">
                    <img data-not-lazy src="~/assets/img/svg/en.svg" class="mr-4 h-6" width="25" alt="USA Flag">
                    English
                  </nuxt-link>
                </li>
                <li class="text-128px" @click="isOpen = false">
                  <nuxt-link :to="switchLocalePath('pt-br')" class="w-full inline-flex block text-black px-6 py-2">
                    <img data-not-lazy src="~/assets/img/svg/br.svg" class="mr-4 h-6" width="25" alt="Brazillian Flag">
                    Português
                  </nuxt-link>
                </li>
                <li class="text-128px" @click="isOpen = false">
                  <nuxt-link :to="switchLocalePath('es')" class="w-full inline-flex block text-black px-6 py-2">
                    <img data-not-lazy src="~/assets/img/svg/es.svg" class="mr-4 h-6" width="25" alt="Spanish Flag">
                    Español
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    logoProp: { width: 250, class: 'm-2' },
    isOpen: false,
    isOpenServices: false,
    isOpenHamburguer: false
  }),
  computed: {
    localeToLang () {
      const lang = this.$i18n.locale
      if (lang === 'en') { return 'English' } else if (lang === 'pt-br') { return 'Português' } else if (lang === 'es') { return 'Español' }
      return 'English'
    },
    flagVisible () {
      const lang = this.$i18n.locale
      if (lang === 'en') { return 1 } else if (lang === 'pt-br') { return 2 } else if (lang === 'es') { return 3 }
      return 1
    }
  },
  methods: {
    hideNavContent () {
      document.getElementById('nav-content').classList.add('hidden')
    }
  }
}
</script>
