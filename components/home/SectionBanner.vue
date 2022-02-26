<template>
  <section class="pt-24 pb-8 bg-primary">
    <div class="container mx-auto px-2 lg:mx-12 lg:mt-4 flex flex-wrap flex-col md:flex-row">
      <div class="flex flex-col w-full h-full md:w-1/2 text-left">
        <div class="lg:mb-5">
          <!-- <div class="h-125px" /> -->
          </div>
        <div class="p-2">
          <h1 class="text-center lg:text-6xl lg:text-left font-semibold text-white leading-tight break-words mb-12">
            {{ $t('homepage.banner.header') }}
          </h1>
        </div>
        <div class="p-2">
          <p class="text-2xl lg:text-3xl text-center lg:text-left  text-white font-normal leading-relaxed mb-8">
            {{ $t('homepage.banner.text') }}
          </p>
        </div>
      </div>
      <div class="w-full md:w-1/2 py-6 text-center">
        <img
          class="w-full z-50"
          :src="require('~/assets/img/zmot-header-background.jpg').src"
          :srcset="require('~/assets/img/zmot-header-background.jpg').srcSet"
          :blank-src="require('~/assets/img/zmot-header-background.jpg').placeholder"
          alt="women persona using cell phone, sitting on a side of a big cell phone with an ecommerce website. There is a nice landscape with plants"
        />
      </div>
      <div class="w-full flex flex-wrap overflow-hidden pt-4">
        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <img
            :src="require('~/assets/img/logos/google-white-logo.png').src"
            :srcset="require('~/assets/img/logos/google-white-logo.png').srcSet"
            :blank-src="require('~/assets/img/logos/google-white-logo.png').placeholder"
            style="width: 150px;"
            alt="Google's logo white color"
          />
        </div>
        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <img
            :src="require('~/assets/img/logos/digitalks-white-logo.png').src"
            :srcset="require('~/assets/img/logos/digitalks-white-logo.png').srcSet"
            :blank-src="require('~/assets/img/logos/digitalks-white-logo.png').placeholder"
            style="width: 150px;"
            alt="Digitalk's logo white color"
          />
        </div>
        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <img
            :src="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').src"
            :srcset="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').srcSet"
            :blank-src="require('~/assets/img/logos/logo-profissional-de-ecommerce.png').placeholder"
            style="width: 150px;"
            alt="Profissional de ecommerce logo white color"
          />
        </div>
        <div class="my-3 px-3 w-1/4 overflow-hidden">
          <img
            :src="require('~/assets/img/logos/logo-startupi-white.png').src"
            :srcset="require('~/assets/img/logos/logo-startupi-white.png').srcSet"
            :blank-src="require('~/assets/img/logos/logo-startupi-white.png').placeholder"
            style="width: 150px;"
            alt="Startupi's logo white color"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionBanner'
}
</script>
