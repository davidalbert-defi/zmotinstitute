<template>
  <section class="services my-20 bg-white" data-aos="fade-zoom" data-aos-once="true">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center">
        How can we help you?
      </h2>
      <p id="zmot-audit" class="text-center">
        We are here to help you to understand ZMOT and implement it to your day to day game. No matter the size of your pocket, or time availability, we will always have a solution to help you.
      </p>
      <div class="row flex flex-wrap flex-col md:flex-row my-8 overflow-hidden align-center">
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
                  ZMOT Audit
                </h2>
                <div>
                  <p class="mb-5 text-justify">
                    <span>
                      Are you interested about ZMOT and Consumer Behavior but have no idea how to start? Or maybe just need an expert opinion to speed things up? Just let us know your website and we'll surprise you with a masterplan to boost you Digital Business.
                    </span>
                  </p>
                </div>
                <nuxt-link to="/">
                  <a
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
                    data-ga-slug="Get a Quote"
                    role="button"
                    tabindex="0"
                  >
                    <span>
                      Get in Touch
                    </span>
                  </a>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row flex flex-wrap flex-col md:flex-row my-8 overflow-hidden align-center">
        <div class="lg:w-1/2 w-full overflow-hidden">
          <div class="card service--item mb-3 text-right">
            <div class="card-body">
              <div class="card-text">
                <h2 class="h3 mb-4">
                  Lectures & Events
                </h2>
                <div>
                  <p class="mb-5 text-justify">
                    <span>
                      Wish to delight your audience with innovative & dynamic content that will make people clap standing? Our storytelling performance based presentations drive people to action & results you could have considered impossible before.
                    </span>
                  </p>
                </div>
                <nuxt-link to="/">
                  <a
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
                    data-ga-slug="Get a Quote"
                    role="button"
                    tabindex="0"
                  >
                    <span>
                      Get in Touch
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

      <div class="row flex flex-wrap flex-col md:flex-row my-8 overflow-hidden align-center">
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
                  Online courses
                </h2>
                <div>
                  <p class="mb-5 medium text-justify">
                    <span>
                      Learn best in class ZMOT with experts which have helped their organizations to achieve amazing results. With our online courses you can learn and implement ZMOT at your own and flexible pace, but also do it over and over again. You have full control of your learning process.
                    </span>
                  </p>
                </div>
                <nuxt-link to="/">
                  <a
                    id="CheckServicePage"
                    class="inline-block text-center leading-normal border bg-indigo-700 text-white text-2xl w-full p-2 uppercase font-medium rounded-full"
                    data-ga-slug="Get a Quote"
                    role="button"
                    tabindex="0"
                  >
                    <span>
                      Get in Touch
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
