<template>
<!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-orange-shinny fixed w-full top-0 z-40">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="block inset-y-0 left-0 flex items-center sm:hidden">
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
      <div class="flex-1 flex items-center justify-center">
        <div class="flex-shrink ml-4 w-9/12 lg:w-1/4 inline-flex justify-center lg:justify-start">
          <nuxt-link :to="localePath('index')" class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img class="block lg:hidden h-10 w-auto lazy" src="~/assets/img/zmot-logo.png" alt="Zmot Institute Logo">
            <img class="hidden lg:block h-12 w-auto lazy" src="~/assets/img/zmot-logo.png" alt="Zmot Institute Logo">
          </nuxt-link>
        </div>
        <div class="flex-1 hidden sm:block lg:w-2/4">
          <div class="flex space-x-4 lg:justify-center">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <div>
              <div>
                <button @click="isOpenServices = !isOpenServices" class="inline-flex p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny uppercase focus:bg-white focus:text-orange-shinny focus:border-0">
                  {{ $t('navs.services.title') }}
                  <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button v-if="isOpenServices" class="fixed inset-0 h-full w-full bg-black opacity-0" tabindex="-1" @click="isOpenServices = false" />
              </div>
              <div v-show="isOpenServices" class ="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8" @click="isOpenServices = false">
                  <NuxtLink  @click="isOpenServices = false" :to="localePath('digital-marketing-services')"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
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

                  <NuxtLink :to="localePath('keynote-speakers')" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
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

                  <NuxtLink :to="localePath('digital-marketing-courses')" @click="isOpenServices = false" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
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
            <nuxt-link :to="localePath('blog')" class="p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny uppercase">
              {{ $t('navs.blog.title') }}
            </nuxt-link>

            <nuxt-link :to="localePath('contact')" class="p-2 rounded-md text-base font-medium text-white hover:bg-green-shinny uppercase">
              {{ $t('navs.contact.title') }}
            </nuxt-link>
          </div>
        </div>
        <div class="flex-1 relative w-3/12 lg:w-1/4 text-center text-white inline-flex justify-end">
          <div>
            <button
              id="options-menu"
              type="button"
              class="inline-flex justify-center w-full rounded-md py-2 text-sm font-medium text-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
          <div v-if="isOpen" class="absolute right-0 mt-10 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
    <div class="px-2 pt-2 pb-2 space-y-1" @click="isOpenServices = false">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <!-- <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a> -->
      <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <NuxtLink :to="localePath('digital-marketing-services')"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: chart-bar -->
              <svg class="flex-shrink-0 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

          <NuxtLink :to="localePath('keynote-speakers')"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: cursor-click -->
              <svg class="flex-shrink-0 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 500" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="7" d="M420.8,137.6c3.66-4.879,4.239-11.3,1.511-16.755C419.583,115.389,414.1,112,408,112H168V93.255  c0-6.411,2.497-12.438,7.029-16.971l22.627-22.627c0.343-0.343,0.642-0.713,0.91-1.098C202.557,54.75,207.135,56,212,56  c15.439,0,28-12.561,28-28S227.439,0,212,0s-28,12.561-28,28c0,4.865,1.249,9.443,3.441,13.434c-0.385,0.268-0.755,0.566-1.098,0.91  l-22.627,22.627C156.161,72.525,152,82.57,152,93.255V112h-48c-6.1,0-11.583,3.389-14.311,8.845  c-2.728,5.456-2.148,11.876,1.511,16.755l60.8,81.066V464h-8c-13.233,0-24,10.766-24,24v16c0,4.418,3.582,8,8,8h256  c4.418,0,8-3.582,8-8v-16c0-13.234-10.767-24-24-24h-8V218.667L420.8,137.6z M212,16c6.617,0,12,5.383,12,12s-5.383,12-12,12  s-12-5.383-12-12S205.383,16,212,16z M336,464c-4.418,0-8,3.582-8,8s3.582,8,8,8h32c4.411,0,8,3.589,8,8v8H136v-8  c0-4.411,3.589-8,8-8h159.999c4.418,0,8-3.582,8-8s-3.582-8-8-8H168V176h136c4.418,0,8-3.582,8-8s-3.582-8-8-8H160  c-4.418,0-8,3.582-8,8v24l-48-64h304l-48,64v-24c0-4.418-3.582-8-8-8h-16.005c-4.418,0-8,3.582-8,8s3.582,8,8,8H344v288H336z" />
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

          <NuxtLink :to="localePath('digital-marketing-courses')" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 -47 512.00002 512" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="7" d="m507.105469 95.203125-161.90625-61.726563c-3.925781-1.496093-8.320313.472657-9.816407 4.394532-1.496093 3.925781.472657 8.320312 4.398438 9.816406l143.269531 54.621094-99.179687 37.816406-124.734375-56.476562c-3.828125-1.734376-8.332031-.035157-10.0625 3.789062-1.734375 3.828125-.035157 8.332031 3.789062 10.066406l110.988281 50.253906-107.851562 41.117188-227.050781-86.566406 227.050781-86.566406 55.953125 21.335937c3.917969 1.492187 8.316406-.472656 9.816406-4.398437 1.496094-3.921876-.472656-8.316407-4.398437-9.8125l-58.660156-22.367188c-1.746094-.664062-3.675782-.667969-5.421876 0l-248.394531 94.703125c-2.945312 1.125-4.894531 3.953125-4.894531 7.105469v34.726562c0 3.152344 1.949219 5.980469 4.894531 7.105469l77.566407 29.570313v26.351562c0 4.199219 3.402343 7.605469 7.601562 7.605469 4.203125 0 7.605469-3.40625 7.605469-7.605469v-20.550781l155.621093 59.332031c.875.332031 1.792969.5 2.710938.5s1.835938-.167969 2.710938-.5l117.304687-44.722656v120.34375c-36.828125 19.332031-78.125 29.691406-120.015625 29.691406-57.171875 0-113.25-19.273438-158.332031-54.347656v-59.328125c0-4.199219-3.402344-7.605469-7.605469-7.605469-4.199219 0-7.601562 3.40625-7.601562 7.605469v63.011719c0 2.308593 1.046874 4.492187 2.847656 5.933593 48.246094 38.652344 108.867187 59.9375 170.691406 59.9375 41.695312 0 82.835938-9.695312 120.015625-27.855469v30.777344c-12.253906 3.347656-21.289063 14.570313-21.289063 27.871094 0 15.929688 12.960938 28.894531 28.890626 28.894531 15.933593 0 28.894531-12.964843 28.894531-28.894531 0-13.300781-9.035157-24.523438-21.289063-27.871094v-38.808594c12.394532-7.050781 24.269532-15.074218 35.472656-24.050781 1.800782-1.441406 2.851563-3.625 2.851563-5.933593v-119.785157l77.558594-29.570312c2.945312-1.121094 4.894531-3.949219 4.894531-7.105469v-34.722656c0-3.152344-1.949219-5.980469-4.894531-7.105469zm-109.800781 294.953125c0 7.542969-6.140626 13.683594-13.6875 13.683594-7.542969 0-13.683594-6.140625-13.683594-13.683594 0-7.546875 6.140625-13.6875 13.683594-13.6875 7.546874 0 13.6875 6.140625 13.6875 13.6875zm-382.097657-276.808594 233.1875 88.90625v18.445313l-233.1875-88.90625zm248.398438 107.351563v-18.445313l112.410156-42.859375v18.449219zm150.730469 69.105469c-7.417969 5.773437-15.140626 11.109374-23.113282 16.007812v-117.492188l23.113282-8.8125zm-23.113282-117.761719v-18.445313l105.570313-40.25v18.445313zm0 0" />
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

          <NuxtLink :to="localePath('blog')"  class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 500" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M404.72,82.944c-0.027,0-0.054,0-0.08,0h0h-27.12v-9.28c0.146-3.673-2.23-6.974-5.76-8    c-18.828-4.934-38.216-7.408-57.68-7.36c-32,0-75.6,7.2-107.84,40c-32-33.12-75.92-40-107.84-40    c-19.464-0.048-38.852,2.426-57.68,7.36c-3.53,1.026-5.906,4.327-5.76,8v9.2H8c-4.418,0-8,3.582-8,8v255.52c0,4.418,3.582,8,8,8    c1.374-0.004,2.724-0.362,3.92-1.04c0.8-0.4,80.8-44.16,192.48-16h1.2h0.72c0.638,0.077,1.282,0.077,1.92,0    c112-28.4,192,15.28,192.48,16c2.475,1.429,5.525,1.429,8,0c2.46-1.42,3.983-4.039,4-6.88V90.944    C412.72,86.526,409.139,82.944,404.72,82.944z M16,333.664V98.944h19.12v200.64c-0.05,4.418,3.491,8.04,7.909,8.09    c0.432,0.005,0.864-0.025,1.291-0.09c16.55-2.527,33.259-3.864,50-4c23.19-0.402,46.283,3.086,68.32,10.32    C112.875,307.886,62.397,314.688,16,333.664z M94.32,287.664c-14.551,0.033-29.085,0.968-43.52,2.8V79.984    c15.576-3.47,31.482-5.241,47.44-5.28c29.92,0,71.2,6.88,99.84,39.2l0.24,199.28C181.68,302.304,149.2,287.664,94.32,287.664z     M214.32,113.904c28.64-32,69.92-39.2,99.84-39.2c15.957,0.047,31.863,1.817,47.44,5.28v210.48    c-14.354-1.849-28.808-2.811-43.28-2.88c-54.56,0-87.12,14.64-104,25.52V113.904z M396.64,333.664    c-46.496-19.028-97.09-25.831-146.96-19.76c22.141-7.26,45.344-10.749,68.64-10.32c16.846,0.094,33.663,1.404,50.32,3.92    c4.368,0.663,8.447-2.341,9.11-6.709c0.065-0.427,0.095-0.859,0.09-1.291V98.944h19.12L396.64,333.664z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('navs.blog.title') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('blog.nav_description') }}
                </p>
              </div>
          </NuxtLink>

          <NuxtLink :to="localePath('contact')" class="-m-3 p-3 flex items-start rounded-lg hover:bg-indigo-100">
            <!-- Heroicon name: shield-check -->
              <svg class="flex-shrink-0 h-10 w-10 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 500 500" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M363.631,174.498h-1.045v-25.6C362.586,66.664,295.923,0,213.688,0S64.79,66.664,64.79,148.898v25.6h-6.269    c-22.988,0-40.751,20.375-40.751,43.886v65.306c-0.579,22.787,17.425,41.729,40.212,42.308c0.18,0.005,0.359,0.008,0.539,0.01    h38.661c5.476-0.257,9.707-4.906,9.449-10.382c-0.009-0.197-0.024-0.394-0.045-0.59v-128c0-6.269-3.657-12.539-9.404-12.539    H85.688v-25.6c0-70.692,57.308-128,128-128s128,57.308,128,128v25.6h-11.494c-5.747,0-9.404,6.269-9.404,12.539v128    c-0.583,5.451,3.363,10.343,8.814,10.926c0.196,0.021,0.393,0.036,0.59,0.045h12.016l-1.045,1.567    c-15.677,20.835-40.277,33.038-66.351,32.914c-5.708-27.989-33.026-46.052-61.015-40.343    c-23.935,4.881-41.192,25.843-41.385,50.27c0.286,28.65,23.594,51.724,52.245,51.722c14.183-0.23,27.702-6.05,37.616-16.196    c6.689-6.85,11.072-15.617,12.539-25.078c32.652,0.124,63.445-15.176,83.069-41.273l9.927-14.629    c22.465-1.567,36.571-15.673,36.571-36.049v-65.306C404.382,201.143,387.664,174.498,363.631,174.498z M85.688,305.11H58.521    c-11.25-0.274-20.148-9.615-19.874-20.865c0.005-0.185,0.012-0.37,0.021-0.556v-65.306c0-12.016,8.359-22.988,19.853-22.988    h27.167V305.11z M247.125,391.314c-5.79,6.278-13.925,9.873-22.465,9.927c-16.998-0.27-30.792-13.834-31.347-30.825    c-0.007-17.024,13.788-30.83,30.812-30.837c17.024-0.007,30.83,13.788,30.837,30.812c0,0.008,0,0.017,0,0.025    C255.397,378.173,252.553,385.756,247.125,391.314z M383.484,288.914c0,14.106-13.584,16.196-19.853,16.196h-21.943V195.396    h21.943c11.494,0,19.853,16.196,19.853,28.212V288.914z" />
              </svg>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('navs.contact.title') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('contact.nav_description') }}
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
