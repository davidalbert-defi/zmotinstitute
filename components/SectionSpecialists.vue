<template>
  <section
    class="specialists pt-4 mb-12"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-once="true"
    data-aos-duration="500"
  >
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center">
        'homepage.specialist.header'
      </h2>
      <p class="text-center">
        'homepage.specialist.text'
      </p>
      <div class="specialist__items overflow-hidden">
        <client-only placeholder="Loading...">
          <agile :options="agileOptions">
            <div class="slide slide--1">
              <div class="overflow-hidden spec__card">
                <div>
                  <div>
                    “'homepage.specialist.slide_1_text'”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/NeilPatel.jpg').src"
                        :srcset="require('~/assets/img/Specialist/NeilPatel.jpg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/NeilPatel.jpg').placeholder"
                        alt="Neil Patel Photo"
                      />
                    </div>
                    <div class="spec__card-meta-details">
                      <div class="name">
                        Neil Patel
                      </div>
                      <div class="job">
                        Marketing Guru
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--2">
              <div class="overflow-hidden spec__card">
                <div>
                  <div>
                    “'homepage.specialist.slide_2_text'”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').src"
                        :srcset="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').placeholder"
                        alt="Jim Lecinsk Photo"
                      />
                    </div>
                    <div class="spec__card-meta-details">
                      <div class="name">
                        Jim Lecinski
                      </div>
                      <div class="job">
                        ZMOT Author
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--3">
              <div class="overflow-hidden spec__card">
                <div>
                  <div>
                    “'homepage.specialist.slide_3_text'”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/David_Meerman_Scott.png').src"
                        :srcset="require('~/assets/img/Specialist/David_Meerman_Scott.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/David_Meerman_Scott.png').placeholder"
                        alt="David Meerman Scott Photo"
                      />
                    </div>
                    <div class="spec__card-meta-details">
                      <div class="name">
                        David M.Scott
                      </div>
                      <div class="job">
                        Marketing & Sales Visionary
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--4">
              <div class="overflow-hidden spec__card">
                <div>
                  <div>
                    “'homepage.specialist.slide_4_text'”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/avinash_kaushik.png').src"
                        :srcset="require('~/assets/img/Specialist/avinash_kaushik.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/avinash_kaushik.png').placeholder"
                        alt="Avinash Kaushik Photo"
                      />
                    </div>
                    <div class="spec__card-meta-details">
                      <div class="name">
                        Avinash Kaushik
                      </div>
                      <div class="job">
                        Digital Marketing Evangelist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--5">
              <div class="overflow-hidden spec__card">
                <div>
                  <div>
                    “'homepage.specialist.slide_5_text'”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/bryan_eisenberg.png').src"
                        :srcset="require('~/assets/img/Specialist/bryan_eisenberg.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/bryan_eisenberg.png').placeholder"
                        alt="Bryan Eisenberg Photo"
                      />
                    </div>
                    <div class="spec__card-meta-details">
                      <div class="name">
                        Bryan Eisenberg
                      </div>
                      <div class="job">
                        Digital Marketing Pioneer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <template slot="prevButton">
              <font-awesome-icon :icon="['fas', 'arrow-left']" />
            </template>
            <template slot="nextButton">
              <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </template>
          </agile>
        </client-only>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionSpecialists',
  data: () => ({
    testimonial_avatar: { blank: false, width: 36, height: 36, class: 'm-1' },
    specialist_avatar: { blank: false, width: 85, height: 85, class: 'm-2' },
    agileOptions: {
      autoplay: true,
      mobileFirst: true,
      navButtons: false,
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      dots: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    }
  })
}
</script>

<style scoped lang="scss">
  section.specialists {
    .container {
      .specialist__items {
        .agile__actions {
          justify-content: center;
          margin-top: 5rem;
          .agile__dots {
            .agile__dot {
              margin: 0 7px;
              button {
                height: 10px;
                width: 10px;
                padding: 0;
                background-color: #e5e7f1;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                display: block;
                font-size: 0;
                line-height: 0;
                margin: 0;
                transition-duration: .3s;
              }
              &.agile__dot--current {
                button {
                  background-color: #fc642e;
                }
              }
            }
          }
        }
        .agile__slides {
          .slide {
            -webkit-transform: scale(.8);
            transform: scale(.8) !important;
            .spec__card {
              max-width: 100%;
              background-color: #fff;
              box-shadow: 0 0.375rem 1.25rem 0 rgba(61,66,80,.18);
              border-radius: .625rem;
              .card-text {
                color: #000;
                font-size: 21px;
                font-weight: 300;
                line-height: 1.8em;
              }
              .spec__card-meta {
                display: flex;
                align-items: center;
                justify-content: center;
                .sec__card-meta-avatar {
                  margin-right: 1rem;
                  img {border-radius: 50%;}
                }
                .spec__card-meta-details {
                  .name {
                    color: #fc642e;
                    font-size: 30px;
                    font-weight: 700;
                  }
                  .job {
                    color: #000;
                    font-size: 16px;
                    font-weight: 700;
                  }
                }
              }
            }
            &.agile__slide--active {
              transform: scale(1) !important;
            }
          }
        }
        .agile__nav-button {
          background-color: transparent;
          bottom: -10px;
          cursor: pointer;
          outline: 0;
          border: 0;
        }
      }
    }
  }
</style>
