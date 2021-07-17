<template>
  <section
    class="reviews bg-white mb-4 pt-4 py-8">
    <div class="container mx-auto">
      <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
        {{ $t('online_courses.customer_reviews.headline') }}
      </h2>
      <p class="text-center text-gray-500 text-xl lg:mx-32 font-normal mb-12">
        {{ $t('online_courses.customer_reviews.sub_headline') }}
      </p>
      <div class="course_reviews__items mt-16">
        <client-only placeholder="Loading...">
          <agile :options="agileOptions">
            <div class="slide slide--1">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl font-light leading-7 mb-8">
                    “{{ $t('online_courses.customer_reviews.review_1_header') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="spec__card-meta-details">
                      <div class="name">
                        {{ $t('online_courses.customer_reviews.review_1_name') }}
                      </div>
                      <div class="job">
                        {{ $t('online_courses.customer_reviews.review_1_job') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--2">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl font-light leading-7 mb-8">
                    “{{ $t('online_courses.customer_reviews.review_2_header') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="spec__card-meta-details">
                      <div class="name">
                        {{ $t('online_courses.customer_reviews.review_2_name') }}
                      </div>
                      <div class="job">
                        {{ $t('online_courses.customer_reviews.review_2_job') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--3">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl font-light leading-7 mb-8">
                    “{{ $t('online_courses.customer_reviews.review_3_header') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="spec__card-meta-details">
                      <div class="name">
                        {{ $t('online_courses.customer_reviews.review_3_name') }}
                      </div>
                      <div class="job">
                        {{ $t('online_courses.customer_reviews.review_3_job') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--4">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl font-light leading-7 mb-8">
                    “{{ $t('online_courses.customer_reviews.review_4_header') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="spec__card-meta-details">
                      <div class="name">
                        {{ $t('online_courses.customer_reviews.review_4_name') }}
                      </div>
                      <div class="job">
                        {{ $t('online_courses.customer_reviews.review_4_job') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="slide slide--5">
              <div class="card overflow-hidden spec__card">
                <div class="card-body">
                  <div class="card-text text-black text-xl font-light leading-7 mb-8">
                    “{{ $t('online_courses.customer_reviews.review_5_header') }}”
                  </div>
                  <div class="spec__card-meta">
                    <div class="spec__card-meta-details">
                      <div class="name">
                        {{ $t('online_courses.customer_reviews.review_5_name') }}
                      </div>
                      <div class="job">
                        {{ $t('online_courses.customer_reviews.review_5_job') }}
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
  name: 'SectionCourseCustomerReview',
  data: () => ({
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
