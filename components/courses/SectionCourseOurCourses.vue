<template>
  <section class="container mx-auto py-8" id="our-courses">
    <div class="relative lg:m-12">
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
            {{ $t('online_courses.our_courses.headline') }}
          </h2>
          <p class="text-center text-gray-500 text-xl lg:mx-32 font-normal mb-12">
            {{ $t('online_courses.our_courses.sub_headline') }}
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="course in courses" :key="course.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" :src="course.imageUrl" alt="" data-not-lazy />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <a :href="course.href" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900 leading-tight">
                    {{ course.title }}
                  </p>
                  <p class="mt-3 text-lg font-normal text-gray-500 leading-normal">
                    {{ course.description }}
                  </p>
                </a>
              </div>
              <!-- <div class="mt-6 flex items-center">
               <p class="text-xl font-semibold text-gray-900">
                    {{ lecture.lectureTime }}
                  </p>
              </div> -->
              <div class="star-rating mt-3">
                <span class="text-lg font-normal pr-3 float-left">{{ course.score }}</span>
                <div class="star-ratings-sprite inline-block float-left"><span :style="{width: course.star_with}" class="rating"></span></div>
                <span class="text-lg font-normal pl-3 float-right">{{ course.duration }}  {{ course.time_unit }}</span>
              </div>
              <div class="rounded-md shadow mt-8">
                      <a :href="course.href" class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                        {{ $t('online_courses.our_courses.card_cta') }}
                      </a>
                </div>
            </div>
          </div>
        </div>
        <div class="max-w-4xl mx-auto mt-12 lg:mt-24 bg-indigo-100 w-full rounded-lg shadow-lg px-8 py-12 flex md:flex-row flex-col">
          <div class="flex-1">
            <p class="text-4xl tracking-tight font-black text-gray-900 sm:text-4xl">
              {{ $t('online_courses.our_courses.custom_course_header') }}</p>
            <p class="max-w-2xl text-3xl text-indigo-600 font-extrabold">
                {{ $t('online_courses.our_courses.custom_course_description') }}
            </p>
          </div>
          <div class="md:px-2 mt-8 md:mt-0 items-center flex">
            <button class="bg-indigo-600 text-white font-bold px-4 py-2 text-base uppercase rounded tracking-wider focus:outline-none hover:bg-green-shinny ">
              {{ $t('online_courses.our_courses.custom_course_cta') }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCourseOurCourses',
  data () {
    return {
      courses: [
        {
          title: this.$t('online_courses.our_courses.course_1_header'),
          href: '#contactform',
          description: this.$t('online_courses.our_courses.course_1_description'),
          score: this.$t('online_courses.our_courses.course_1_score'),
          star_with: this.$t('online_courses.our_courses.course_1_star_with'),
          duration: this.$t('online_courses.our_courses.course_1_duration'),
          time_unit: this.$t('online_courses.our_courses.course_1_time_unit'),
          imageUrl: require('~/assets/img/online-courses-thumbnails/' + this.$t('online_courses.our_courses.course_1_img'))
        },
        {
          title: this.$t('online_courses.our_courses.course_2_header'),
          href: '#contactform',
          description: this.$t('online_courses.our_courses.course_2_description'),
          score: this.$t('online_courses.our_courses.course_2_score'),
          star_with: this.$t('online_courses.our_courses.course_2_star_with'),
          duration: this.$t('online_courses.our_courses.course_2_duration'),
          time_unit: this.$t('online_courses.our_courses.course_2_time_unit'),
          imageUrl: require('~/assets/img/online-courses-thumbnails/' + this.$t('online_courses.our_courses.course_2_img'))
        },
        {
          title: this.$t('online_courses.our_courses.course_3_header'),
          href: '#contactform',
          description: this.$t('online_courses.our_courses.course_3_description'),
          score: this.$t('online_courses.our_courses.course_3_score'),
          star_with: this.$t('online_courses.our_courses.course_3_star_with'),
          duration: this.$t('online_courses.our_courses.course_3_duration'),
          time_unit: this.$t('online_courses.our_courses.course_3_time_unit'),
          imageUrl: require('~/assets/img/online-courses-thumbnails/' + this.$t('online_courses.our_courses.course_3_img'))
        },
        {
          title: this.$t('online_courses.our_courses.course_4_header'),
          href: '#contactform',
          description: this.$t('online_courses.our_courses.course_4_description'),
          score: this.$t('online_courses.our_courses.course_4_score'),
          star_with: this.$t('online_courses.our_courses.course_4_star_with'),
          duration: this.$t('online_courses.our_courses.course_4_duration'),
          time_unit: this.$t('online_courses.our_courses.course_4_time_unit'),
          imageUrl: require('~/assets/img/online-courses-thumbnails/' + this.$t('online_courses.our_courses.course_4_img'))
        },
        {
          title: this.$t('online_courses.our_courses.course_5_header'),
          href: '#contactform',
          description: this.$t('online_courses.our_courses.course_5_description'),
          score: this.$t('online_courses.our_courses.course_5_score'),
          star_with: this.$t('online_courses.our_courses.course_5_star_with'),
          duration: this.$t('online_courses.our_courses.course_5_duration'),
          time_unit: this.$t('online_courses.our_courses.course_5_time_unit'),
          imageUrl: require('~/assets/img/online-courses-thumbnails/' + this.$t('online_courses.our_courses.course_5_img'))
        }
      ]
    }
  }
}
</script>
