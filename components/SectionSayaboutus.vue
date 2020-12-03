<template>
  <section
    class="say-about-us"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center">
        Reviews on ZMOT INSTITUTE
      </h2>
      <p class="text-center">
        Take a look at what real life people who got in contact with us have to say about what they have learned.
      </p>
      <div class="testimonial-list">
        <div class="flex flex-wrap flex-col md:flex-row testimonial-item-wrapper">
          <div class="lg:w-1/2 w-full overflow-hidden">
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                Thank you for sharing this content with the community. From now on I will pay more attention to what was
                exposed in the text.
              </blockquote>
              <span class="testimonial-item__author">
                <img
                  v-bind="testimonial_avatar"
                  :src="require('~/assets/img/Testominal/paulo-gomes.jpeg').src"
                  :srcset="require('~/assets/img/Testominal/paulo-gomes.jpeg').srcSet"
                  :blank-src="require('~/assets/img/Testominal/paulo-gomes.jpeg').placeholder"
                  alt="Paulo gomes Photo"
                >
                Paulo Gomes
              </span>
            </div>
          </div>
          <div class="lg:w-1/2 w-full overflow-hidden">
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                Better to start implementing ZMOT as soon as possible ... Congratulations for sharing your knowledge and
                helping us to improve.
              </blockquote>
              <span class="testimonial-item__author">
                <img
                  v-bind="testimonial_avatar"
                  :src="require('~/assets/img/Testominal/elvissilva.jpeg').src"
                  :srcset="require('~/assets/img/Testominal/elvissilva.jpeg').srcSet"
                  :blank-src="require('~/assets/img/Testominal/elvissilva.jpeg').placeholder"
                  alt="Elvissilva Photo"
                >
                Elvis Silva
              </span>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap flex-col md:flex-row testimonial-item-wrapper justify-center">
          <div class="lg:w-1/2 w-full overflow-hidden">
            <div class="testimonial-item">
              <blockquote class="testimonial-item__quote">
                Very good content, thank you for sharing it.
              </blockquote>
              <span class="testimonial-item__author">
                <img
                  v-bind="testimonial_avatar"
                  :src="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').src"
                  :srcset="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').srcSet"
                  :blank-src="require('~/assets/img/Testominal/Eduardo-Moiolli-Congresso-Apdespbr-2.png').placeholder"
                  alt="Eduardo Moiolli Congresso Apdespbr"
                >
                Eduardo Maiolli
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionSayaboutus',
  data: () => ({
    testimonial_avatar: { blank: false, width: 36, height: 36, class: 'm-1' }
  })
}
</script>

<style scoped lang="scss">
  section.say-about-us {
    padding: 1rem 0;
    background-color: #f8f9fa;

    .testimonial-list {
      margin-top: 5rem;

      .testimonial-item-wrapper {
        margin: 1.5rem 1.5rem 2rem;
        -webkit-transition: border .2s cubic-bezier(.645, .045, .355, 1);
        transition: border .2s cubic-bezier(.645, .045, .355, 1);

        .col {
          &:first-child {
            .testimonial-item {
              margin-top: -1rem;
            }
          }

          &:last-child {
            .testimonial-item {
              margin-top: 1rem;
            }
          }
        }

        .testimonial-item {
          background-color: #fff;
          border-radius: 10px;
          border: 2px solid #f1f3f5;
          padding: 1.8rem;
          position: relative;
          z-index: 1;

          &:before {
            content: "“";
            font-family: Fira Code;
            position: absolute;
            z-index: 2;
            top: -3.8rem;
            left: .1em;
            font-size: 7rem;
            color: #e9ecef;
          }

          blockquote {
            position: relative;
            font-size: 1.2rem;
            font-weight: 300;
            color: #212529;
            margin-bottom: 1.5rem;
            font-weight: 300;
          }

          .testimonial-item__author {
            img {
              border-radius: 50%;
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }
</style>
