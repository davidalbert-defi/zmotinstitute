<template>
  <section
    class="specialists bg-white pt-4 mb-12"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-once="true"
    data-aos-duration="500"
  >
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center mb-8 text-4xl lg:text-6xl font-bold lg:mx-24">
        {{ $t('homepage.specialist.header') }}
      </h2>
      <p class="text-center text-gray-500 text-xl lg:text-2xl lg:mx-32 font-normal mb-12">
        {{ $t('homepage.specialist.text') }}
      </p>
      <div class="specialist__items">
        <client-only placeholder="Loading...">
          <agile :options="agileOptions">
            <div class="slide slide--1">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl lg:text-2xl font-light leading-7">
                    “{{ $t('homepage.specialist.slide_1_text') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/NeilPatel.jpg').src"
                        :srcset="require('~/assets/img/Specialist/NeilPatel.jpg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/NeilPatel.jpg').placeholder"
                        alt="Neil Patel Photo"
                      >
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
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl lg:text-2xl  font-light leading-7">
                    “{{ $t('homepage.specialist.slide_2_text') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').src"
                        :srcset="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').srcSet"
                        :blank-src="require('~/assets/img/Specialist/Jim_Lecinsk.jpeg').placeholder"
                        alt="Jim Lecinsk Photo"
                      >
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
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl lg:text-2xl  font-light leading-7">
                    “{{ $t('homepage.specialist.slide_3_text') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/David_Meerman_Scott.png').src"
                        :srcset="require('~/assets/img/Specialist/David_Meerman_Scott.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/David_Meerman_Scott.png').placeholder"
                        alt="David Meerman Scott Photo"
                      >
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
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl lg:text-2xl font-light leading-7">
                    “{{ $t('homepage.specialist.slide_4_text') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/avinash_kaushik.png').src"
                        :srcset="require('~/assets/img/Specialist/avinash_kaushik.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/avinash_kaushik.png').placeholder"
                        alt="Avinash Kaushik Photo"
                      >
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
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl lg:text-2xl  font-light leading-7">
                    “{{ $t('homepage.specialist.slide_5_text') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="sec__card-meta-avatar">
                      <img
                        v-bind="specialist_avatar"
                        :src="require('~/assets/img/Specialist/bryan_eisenberg.png').src"
                        :srcset="require('~/assets/img/Specialist/bryan_eisenberg.png').srcSet"
                        :blank-src="require('~/assets/img/Specialist/bryan_eisenberg.png').placeholder"
                        alt="Bryan Eisenberg Photo"
                      >
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
              <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
                <g>
                  <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "/>
                </g>
              </svg>
            </template>
            <template slot="nextButton">
              <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
                <g>
                  <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                </g>
              </svg>
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
