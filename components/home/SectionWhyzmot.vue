<template>
  <section class="why-zmot bg-white pt-20">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center">
        Why do you need ZMOT?
      </h2>
      <p class="text-center">
        Understanding your
        <strong>Consumer Behavior</strong>
        and helping them to achieve their goals during the
        <strong>Customer Journey </strong>
        should be your top priority. As a marketer or entrepreneur, once you master some principles you'll have a way more effective communication.
      </p>
      <div class="feature__list mt-20">
        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/searching_block.png').src"
              :srcset="require('~/assets/img/why-do-you-need/searching_block.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/searching_block.png').placeholder"
              alt="Why do you need Image"
            />
          </div>

          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content">
              <h3 class="my-8 font-bold text-center text-4xl">
                Relevance
              </h3>
              <p class="text-justify px-4">
                The modern consumer uses Google as the main tool to search for informations about products, prices and other people opinions. According Statcounter, 92% of all searches worldwide are performed through Google Search. To rank #1 should be your obsession, as you'll be present in the exactly moment people are interested in your product or service.
              </p>
            </div>
          </div>
        </div>

        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content text-right">
              <h3 class="my-8 font-bold text-center text-4xl">
                Reviews
              </h3>
              <p class="text-justify px-4">
                Online Reviews are the new Word of Mount. Because of internet it spreads faster, and to much more people. Digital Word of Mount is a one-to-million conversation rather than one-to-one as before. The experience of other people influences your decision to buy, or not to buy.
              </p>
            </div>
          </div>
          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/service-mobile.png').src"
              :srcset="require('~/assets/img/why-do-you-need/service-mobile.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/service-mobile.png').placeholder"
              alt="Service Mobile Image"
            />
          </div>
        </div>

        <div class="feature__item flex flex-wrap flex-col md:flex-row overflow-hidden pb-12" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <img
              :src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').src"
              :srcset="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').srcSet"
              :blank-src="require('~/assets/img/why-do-you-need/why_do_you_need_zmot-review.png').placeholder"
              alt="Why do you need zmot review Image"
            />
          </div>

          <div class="my-3 px-3 lg:w-1/2 w-full overflow-hidden">
            <div class="feature__item-content">
              <h3 class="my-8 font-bold text-center text-4xl">
                Mobile
              </h3>
              <p class="text-justify px-4">
                Consumers have full control, they find and share information in their own way and time. Smartphones are our daily tool for connectivity, productivity, entertainment, and guess what, for shopping. If you do not have a lightning fast loading, and mobile friendly website, you're no one.
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
