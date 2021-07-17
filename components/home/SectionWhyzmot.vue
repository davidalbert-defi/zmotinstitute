<template>
  <section class="why-zmot bg-white pt-20">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="pt-8 text-center mb-8 text-4xl lg:text-6xl font-bold lg:mx-24">
        {{ $t('homepage.why_do_you_need_ZMOT.header') }}
      </h2>
      <p class="text-center text-xl text-gray-500 lg:text-2xl lg:mx-32 font-normal mb-12">
        {{ $t('homepage.why_do_you_need_ZMOT.text1') }}
        <strong>{{ $t('homepage.why_do_you_need_ZMOT.text2') }}</strong>
        {{ $t('homepage.why_do_you_need_ZMOT.text3') }}
        <strong>{{ $t('homepage.why_do_you_need_ZMOT.text4') }}</strong>
        {{ $t('homepage.why_do_you_need_ZMOT.text5') }}
      </p>
      <div class="feature__list">
        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12 my-12 lg:my-24" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 lg:my-auto px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/searching_block.png').src"
              :srcset="require('~/assets/img/why-do-you-need/searching_block.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/searching_block.png').placeholder"
              alt="Why do you need Image"
            />
          </div>

          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content">
              <h3 class="my-8 font-bold text-center text-3xl lg:text-4xl">
                {{ $t('homepage.why_do_you_need_ZMOT.category_1_header') }}
              </h3>
              <p class="text-justify px-4 lg:px-20 text-gray-500 text-xl lg:text-2xl font-normal">
                {{ $t('homepage.why_do_you_need_ZMOT.category_1_text') }}
              </p>
            </div>
          </div>
        </div>

        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12 my-12 lg:my-24" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content text-right">
              <h3 class="my-8 font-bold text-center text-3xl lg:text-4xl">
                {{ $t('homepage.why_do_you_need_ZMOT.category_3_header') }}
              </h3>
              <p class="text-justify px-4 lg:px-20 text-gray-500 text-xl lg:text-2xl font-normal">
                {{ $t('homepage.why_do_you_need_ZMOT.category_3_text') }}
              </p>
            </div>
          </div>
          <div class="my-3 lg:my-auto px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/service-mobile.png').src"
              :srcset="require('~/assets/img/why-do-you-need/service-mobile.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/service-mobile.png').placeholder"
              alt="Service Mobile Image"
            />
          </div>
        </div>

        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12 my-12 lg:my-24" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 lg:my-auto px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').src"
              :srcset="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').placeholder"
              alt="Why do you need zmot review Image"
            />
          </div>

          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content">
              <h3 class="my-8 font-bold text-center text-3xl lg:text-4xl">
                {{ $t('homepage.why_do_you_need_ZMOT.category_2_header') }}
              </h3>
              <p class="text-justify px-4 lg:px-20 text-gray-500 text-xl lg:text-2xl  font-normal">
                {{ $t('homepage.why_do_you_need_ZMOT.category_2_text') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionWhyzmot'
}
</script>

<style scoped lang="scss">
  @media (max-width: 768px) {
    section.why-zmot {
      .feature__list {
        .feature__item:nth-child(2n+1) {
          flex-direction: column;
        }
        .feature__item:nth-child(2n) {
          flex-direction: column-reverse;
          .feature__item-content {
            text-align: left !important;
          }
        }
      }
    }
  }
</style>
