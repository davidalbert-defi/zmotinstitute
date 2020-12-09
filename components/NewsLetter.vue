<template>
  <section class="news-letter">
    <div class="container mx-auto px-4 lg:px-2">
      <div id="newsletter" class="grid grid-cols-12 gap-4" data-aos="zoom-in" data-aos-once="true">
        <div class="col-span-12 lg:col-span-2" />
        <div class="col-span-12 lg:col-span-8">
          <h2 class="text-center font-medium mb-2 text-primary text-35xl">
            Keep following ZMOT INSTITUTE
          </h2>
          <p class="text-center mb-4 leading-6 text-base font-normal">
            Stay tuned for all the news about ZMOT, Consumer Behavior and Digital Marketing. Subscribe now to our montlhy Newsletter.
          </p>
          <div class="search-form">
            <input v-model="email" class="form-control" type="email" :placeholder="'Insert your email'" />
            <button class="browser-show text-white">
              Subscribe to News
            </button>
            <button class="mobile-show text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsLetter',
  data: () => ({
    email: ''
  })
}
</script>
