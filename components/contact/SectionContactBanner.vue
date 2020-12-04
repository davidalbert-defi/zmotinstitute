<template>
  <section class="banner text-white pb-34 bg-primary">
    <div class="container mx-auto px-2 lg:px-4">
      <div class="flex flex-wrap overflow-hidden">
        <div class="my-3 px-3 lg:w-1/2 overflow-hidden w-full xl:w-1/2">
          <div class="mb-5">
            <div class="h-125px" />
          </div>
          <div class="pa-2 mb-10">
            <h2 class="text-55xl font-semibold leading-none text-white">
              Get in Touch With ZMOT Experts
            </h2>
          </div>
          <div class="banner-widget-text mb-24 pa-2">
            <p class="text-white text-3xl font-normal">
              Email or Live Chat, you choose the best option to reach us.
            </p>
          </div>
          <div class="banner-buttons">
            <div class="flex flex-wrap -mx-3 overflow-hidden">
              <div class="flex justify-center my-3 px-3 lg:w-1/2 overflow-hidden w-full xl:w-1/2">
                <a
                  id="ChatOnline"
                  href="https://wa.me/5548988087120"
                  target="_blank"
                >
                  <button class="font-semibold m-1 bg-white py-15sm px-8 text-primary rounded-full no-underline">
                    Access Live Chat
                  </button>
                </a>
              </div>
              <div class="hidden sm:block mt-5" />
              <div class="flex justify-center my-3 px-3 lg:w-1/2 overflow-hidden w-full xl:w-1/2">
                <a
                  id="ChatEmail"
                  href="#send-email"
                >
                  <button id="send-email" class="font-semibold m-1 bg-white py-15sm px-8 text-primary rounded-full no-underline">
                    Send Email
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="my-3 px-3 lg:w-1/2 overflow-hidden w-full xl:w-1/2 hidden md:block sm:none">
          <img
            :src="require('~/assets/img/contact/contact_hero.png').src"
            :srcset="require('~/assets/img/contact/contact_hero.png').srcSet"
            :blank-src="require('~/assets/img/contact/contact_hero.png').placeholder"
            class="pt-20"
            alt="Contact Hero Image"
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
