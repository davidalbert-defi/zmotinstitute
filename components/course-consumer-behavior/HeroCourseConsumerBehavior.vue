<template>

<section id="Banner-section" class="pt-24 pb-8">
  <div id="hero-section" > <!-- bg-amber-100 -->
      <div class="container mx-auto flex lg:p-12 md:flex-row flex-col items-center bg-orange-100 rounded-3xl">
      <div class="lg:flex-grow md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
        <h1 class="py-8 title-font text-4xl lg:text-5xl mb-4 font-semibold text-orange-shinny order-1">
          {{ $t('courses_consumer_behavior.hero.headline') }}
        </h1>
        <p class="mb-4 px-8 md:px-0 text-orange-shinny text-xl font-normal lg:mr-20 order-2 capitalize">
          {{ $t('courses_consumer_behavior.hero.sub_headline') }}
        </p>
          <div class="my-10 sm:flex sm:justify-center lg:justify-start order-4">
            <div class="rounded-md shadow">
              <a href="#will-learn" class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                {{ $t('courses_consumer_behavior.hero.cta_1') }}
              </a>
            </div>
            <!-- <div class="mt-3 rounded-md shadow-md sm:mt-0 sm:ml-3 uppercase">
              <a href="https://wa.me/5548988087120" target="_blank" rel="noopener noreferrer" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-indigo-600 md:py-4 md:text-lg md:px-10">
                {{ $t('courses_consumer_behavior.hero.cta_2') }}
              </a>
            </div> -->
          </div>
      </div>
      <div class="order-3 pb-8">
        <img alt="avatar of a young boy, with a big mobile phone on his side" src="~/assets/img/online-courses-thumbnails/consumer_behavior_a_z_no_background.png">
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'HeroCourseConsumerBehavior'
}
</script>
