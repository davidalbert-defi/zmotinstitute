<template>
  <section id="newsletter" class="news-letter">
    <div class="container mx-auto px-4 lg:px-2">
      <div class="grid grid-cols-12 gap-4" data-aos="zoom-in" data-aos-once="true">
        <div class="col-span-12 lg:col-span-2" />
        <div class="col-span-12 lg:col-span-8">
          <h2 class="text-center font-medium mb-2 text-primary text-35xl">
            {{ $t('news_letter.header') }}
          </h2>
          <p class="text-center mb-4 leading-6 text-base font-normal">
            {{ $t('news_letter.text') }}
          </p>
          <div class="search-form">
            <input v-model="email" class="form-control" type="email" :placeholder="$t('news_letter.placeholder')" />
            <button class="browser-show text-white">
              {{ $t('news_letter.subscribe') }}
            </button>
            <button class="mobile-show text-white">
              {{ $t('news_letter.subscribe_ellipse') }}
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
