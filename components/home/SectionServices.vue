<template>
  <section class="services my-20 bg-white" data-aos="fade-zoom" data-aos-once="true">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center">
        {{ $t('homepage.services.header') }}
      </h2>
      <p id="zmot-audit" class="text-center">
        {{ $t('homepage.services.sub_header') }}
      </p>
      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden">
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
                <h2 class="h3 mb-4">
                  {{ $t('homepage.services.service_1_header') }}
                </h2>
                <div>
                  <p class="mb-5 text-justify">
                    <span>
                      {{ $t('homepage.services.service_1_description') }}
                    </span>
                  </p>
                </div>
                <nuxt-link :to="localePath('zmot-audit')">
                  <a
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
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

      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden">
          <div class="card service--item mb-3 text-right">
            <div class="card-body">
              <div class="card-text">
                <h2 class="h3 mb-4">
                  {{ $t('homepage.services.service_2_header') }}
                </h2>
                <div>
                  <p class="mb-5 text-justify">
                    <span>
                      {{ $t('homepage.services.service_2_description') }}
                    </span>
                  </p>
                </div>
                <nuxt-link :to="localePath('lectures-events')">
                  <a
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
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
        <div class="lg:w-1/2 w-full overflow-hidden">
          <img
            :src="require('~/assets/img/services/service-lecture.png').src"
            :srcset="require('~/assets/img/services/service-lecture.png').srcSet"
            :blank-src="require('~/assets/img/services/service-lecture.png').placeholder"
            alt="Service Lecture Image"
          >
        </div>
      </div>

      <div class="row flex flex-wrap flex-col md:flex-row my-12 lg:my-40 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden">
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
                <h2 class="h3 mb-4">
                  {{ $t('homepage.services.service_3_header') }}
                </h2>
                <div>
                  <p class="mb-5 medium text-justify">
                    <span>
                      {{ $t('homepage.services.service_3_description') }}
                    </span>
                  </p>
                </div>
                <nuxt-link :to="localePath('online-courses')">
                  <a
                    id="CheckServicePage"
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
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
