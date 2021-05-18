<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-orange-shinny fixed w-full top-0 z-30">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button @click="isOpenServices = !isOpenServices" type="button" class="inline-flex items-center justify-center ml-2 rounded-md text-white hover:text-white hover:bg-shinny-orange focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class=" h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <nuxt-link :to="localePath('index')" class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img class="block lg:hidden h-10 w-auto lazy" src="~/assets/img/zmot-logo.png" alt="Workflow">
            <img class="hidden lg:block h-12 w-auto lazy" src="~/assets/img/zmot-logo.png" alt="Workflow">
          </nuxt-link>
        </div>
        <div class="hidden sm:block ml-32">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <div>
              <button @click="isOpenServices = !isOpenServices" class="p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny">
                {{ $t('navs.services.title') }}
              </button>
              <div v-show="isOpenServices" class ="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <NuxtLink to="/digital-marketing-services" @click="isOpenServices = false"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
                    <!-- Heroicon name: chart-bar -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        {{ $t('homepage.services.service_1_header') }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ $t('homepage.services.service_1_navbar_description') }}
                      </p>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/keynote-speakers" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
                    <!-- Heroicon name: cursor-click -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        {{ $t('homepage.services.service_2_header') }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ $t('homepage.services.service_2_navbar_description') }}
                      </p>
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/digital-marketing-courses" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
                    <!-- Heroicon name: shield-check -->
                    <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div class="ml-4">
                      <p class="text-base font-medium text-gray-900">
                        {{ $t('homepage.services.service_3_header') }}
                      </p>
                      <p class="mt-1 text-sm text-gray-500">
                        {{ $t('homepage.services.service_3_navbar_description') }}
                      </p>
                    </div>
                  </NuxtLink>
                </div>

              </div>
            </div>
            </div>
            <nuxt-link :to="localePath('blog')" class="p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny">
              {{ $t('navs.blog.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" class="p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny">
              {{ $t('navs.contact.title') }}
            </nuxt-link>
          </div>
        </div>
        <div class="relative text-center text-white justify-end hidden lg:block float-right">
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
      <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      </div> -->
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu" v-show="isOpenServices">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> -->
      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <NuxtLink to="/digital-marketing-services" @click="isOpenServices = false"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: chart-bar -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('homepage.services.service_1_header') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('homepage.services.service_1_navbar_description') }}
                </p>
              </div>
          </NuxtLink>

          <NuxtLink to="/keynote-speakers" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: cursor-click -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('homepage.services.service_2_header') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('homepage.services.service_2_navbar_description') }}
                </p>
              </div>
          </NuxtLink>

          <NuxtLink to="/digital-marketing-courses" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('homepage.services.service_3_header') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('homepage.services.service_3_navbar_description') }}
                </p>
              </div>
          </NuxtLink>

          <NuxtLink to="/blog" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('navs.blog.title') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('homepage.services.service_3_navbar_description') }}
                </p>
              </div>
          </NuxtLink>

          <NuxtLink to="/contact" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('navs.contact.title') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('homepage.services.service_3_navbar_description') }}
                </p>
              </div>
          </NuxtLink>
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
