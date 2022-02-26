<template>
<section id="Banner-section" class="pt-24 pb-8">
  <div id="hero-section" class="bg-orange-100 lg:m-12 rounded-3xl" > <!-- bg-amber-100 -->
      <div class="container mx-auto flex p-6 lg:p-12 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
        <h1 class="title-font text-4xl lg:text-5xl mb-4 font-semibold text-orange-shinny  pr-4">
          {{ $t('keynote_speakers.hero.headline') }}
        </h1>
        <p class="text-orange-shinny text-xl font-normal lg:mr-20">
          {{ $t('keynote_speakers.hero.sub_headline') }}
        </p>
          <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a href="#our-talks" class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                {{ $t('keynote_speakers.hero.cta_1') }}
              </a>
            </div>
            <div class="mt-3 rounded-md shadow-md sm:mt-0 sm:ml-3 uppercase">
              <a href="https://wa.me/5548988087120" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white md:py-4 md:text-lg md:px-10">
                {{ $t('keynote_speakers.hero.cta_2') }}
              </a>
            </div>
          </div>
      </div>
      <div class="lg:w-1/2 md:w-1/2 w-5/6 lg:transform lg:-scale-125">
        <img class="object-contain w-full rounded" alt="hero" src="~/assets/img/services-section/service-lecture.png" data-not-lazy>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'SectionKeynoteSpeakerHero'
}
</script>
