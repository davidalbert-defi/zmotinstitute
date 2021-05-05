<template>

<section id="Banner-section" class="bg-orange-100 pt-24 pb-8 ">
  <div id="hero-section" class="rounded-3xl" > <!-- bg-amber-100 -->
      <div class="container mx-auto flex px-5 py-6 lg:py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
        <h1 class="title-font text-5xl lg:text-6xl mb-4 font-semibold text-orange-600">{{ $t('zmot_audit.hero.header_1_text') }}
          <br class="hidden lg:inline-block">{{ $t('zmot_audit.hero.header_2_text') }}
           <br class="hidden lg:inline-block">{{ $t('zmot_audit.hero.header_3_text') }}
        </h1>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#ZmotAuditFeatures" class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 md:py-4 md:text-lg md:px-10">
                {{ $t('zmot_audit.hero.btn_1_text') }}
              </a>
            </div>
            <div class="mt-3 rounded-md shadow-md sm:mt-0 sm:ml-3 uppercase">
              <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white md:py-4 md:text-lg md:px-10">
                {{ $t('zmot_audit.hero.btn_2_text') }}
              </a>
            </div>
          </div>
      </div>
      <div v-if="$device.isDesktop"  class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 lg:transform lg:-scale-125 lg:mr-12">
        <img class="object-cover object-center rounded" alt="hero" src="~/assets/img/services-section/service-zmot_audit.png">
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'SectionZmotAuditHero'
}
</script>
