<template>
  <section class="services my-20 bg-white" data-aos="fade-zoom" data-aos-once="true">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center mb-8 text-4xl lg:text-6xl font-bold lg:mx-24">
        {{ $t('homepage.services.header') }}
      </h2>
      <p id="zmot-audit" class="text-center text-gray-500 text-xl lg:text-2xl lg:mx-32 font-normal mb-12">
        {{ $t('homepage.services.sub_header') }}
      </p>
      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden lg:my-auto">
          <img
            :src="require('~/assets/img/services/service-zmot_audit.png').src"
            :srcset="require('~/assets/img/services/service-zmot_audit.png').srcSet"
            :blank-src="require('~/assets/img/services/service-zmot_audit.png').placeholder"
            alt="Service Zmot Audito Image"
          >
        </div>
        <div class="lg:w-1/2 w-full overflow-hidden">
          <div class="card service--item mb-3">
            <div class="card-body">
              <div class="card-text">
                <h3 class="mb-8 font-bold text-center text-4xl">
                  {{ $t('homepage.services.service_1_header') }}
                </h3>
                <div>
                  <p class="text-center text-gray-500 text-xl lg:text-2xl font-normal">
                    <span>
                      {{ $t('homepage.services.service_1_description') }}
                    </span>
                  </p>
                </div>
                  <div class="lg:px-24">
                    <nuxt-link :to="localePath('digital-marketing-services')">
                      <a
                        id="btn_money_page_zmot-audit"
                        class="mt-16  uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10"
                        data-ga-slug="Get a Quote"
                        role="button"
                        tabindex="0"
                      >
                        <span>
                          {{ $t('homepage.services.get_a_quote') }}
                        </span>
                      </a>
                    </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden">
          <div class="card service--item mb-3 text-right">
            <div class="card-body">
              <div class="card-text">
                <h3 class="mb-8 font-bold text-center text-4xl">
                  {{ $t('homepage.services.service_2_header') }}
                </h3>
                <div>
                  <p class="text-center text-gray-500 text-xl lg:text-2xl font-normal">
                    <span>
                      {{ $t('homepage.services.service_2_description') }}
                    </span>
                  </p>
                </div>
                  <div class="lg:px-24">
                    <nuxt-link :to="localePath('keynote-speakers')">
                      <a
                        id="btn_money_page_lectures-events"
                        class="mt-16  uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10"
                        data-ga-slug="Get a Quote"
                        role="button"
                        tabindex="0"
                      >
                        <span>
                          {{ $t('homepage.services.get_a_quote') }}
                        </span>
                      </a>
                    </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 w-full overflow-hidden lg:my-auto">
          <img
            :src="require('~/assets/img/services/service-lecture.png').src"
            :srcset="require('~/assets/img/services/service-lecture.png').srcSet"
            :blank-src="require('~/assets/img/services/service-lecture.png').placeholder"
            alt="Service Lecture Image"
          >
        </div>
      </div>

      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden lg:my-auto">
          <img
            :src="require('~/assets/img/services/service-online_course.png').src"
            :srcset="require('~/assets/img/services/service-online_course.png').srcSet"
            :blank-src="require('~/assets/img/services/service-online_course.png').placeholder"
            alt="Service Online Course Image"
          >
        </div>
        <div class="lg:w-1/2 w-full overflow-hidden">
          <div class="card service--item mb-3">
            <div class="card-body">
              <div class="card-text">
                <h3 class="mb-8 font-bold text-center text-4xl">
                  {{ $t('homepage.services.service_3_header') }}
                </h3>
                <div>
                  <p class="text-center text-gray-500 text-xl lg:text-2xl font-normal">
                    <span>
                      {{ $t('homepage.services.service_3_description') }}
                    </span>
                  </p>
                </div>
                  <div class="lg:px-24">
                    <nuxt-link :to="localePath('digital-marketing-courses')">
                      <a
                        id="btn_money_page_online-courses"
                        class="mt-16  uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10"
                        data-ga-slug="Get a Quote"
                        role="button"
                        tabindex="0"
                      >
                        <span>
                          {{ $t('homepage.services.get_a_quote') }}
                        </span>
                      </a>
                    </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionServices'
}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    padding: 0 2rem;
  }
  .card.service--item {
    border: 0;
    .card-body {
      margin-left: 2rem;
      display: flex;
      align-items: center;
      .card-text {
        h2 {
          font-size: 2.2rem;
          color: #222;
          text-align: center;
        }
        a.rounded-pill {
          color: white;
          font-size: 1.5rem;
          width: 100%;
          padding: 0.5rem;
          text-transform: uppercase;
          font-weight: 500;
          p {
            text-align: center;
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .row {
      img {
        padding: 0 !important;
      }

      .card {
        .card-body {
          margin-left: 0 !important;
        }
      }
    }
    .row:nth-child(2n) {
      //flex-direction: column;
      flex-direction: column-reverse;
    }
    .row:nth-child(2n+1) {
      //flex-direction: column-reverse;
      .card {
        text-align: left !important;
      }
    }
  }
</style>
