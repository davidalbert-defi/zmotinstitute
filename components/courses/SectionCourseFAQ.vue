<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <section
      class="faq">
    <div class="bg-indigo-700 lg:m-12 rounded-3xl">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2  class="text-3xl font-extrabold text-white sm:text-4xl text-center">
            {{ $t('online_courses.faq.headline') }}
          </h2>
          <dl class="mt-6 space-y-6 divide-y divide-gray-200">
            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_1 = !isOpenFAQ_1"  class="text-left w-full flex justify-between items-start text-white">
                  <span class="text-xl font-medium">
                    {{ $t('online_courses.faq.question_1_question') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenFAQ_1"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenFAQ_1"
                      class="rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd v-if="isOpenFAQ_1" class="mt-2 pr-12">
                <p class="font-normal text-lg  text-white ml-6 pt-1 leading-8" v-html="$t('online_courses.faq.question_1_answer')">
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_2 = !isOpenFAQ_2" class="text-left w-full flex justify-between items-start text-white">
                  <span class="text-xl font-medium">
                    {{ $t('online_courses.faq.question_2_question') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenFAQ_2"
                    class="h-6 w-6 transform"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenFAQ_2"
                      class="rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd v-if="isOpenFAQ_2" class="mt-2">
                <p class="font-normal text-lg text-white py-4">
                  {{ $t('online_courses.faq.question_2_answer_line_1') }}
                </p>
                <p class="font-normal text-lg  text-white ml-6 pt-1 leading-8">
                  {{ $t('online_courses.faq.question_2_answer_line_2') }}<br>
                  {{ $t('online_courses.faq.question_2_answer_line_3') }}<br>
                  {{ $t('online_courses.faq.question_2_answer_line_4') }}<br>
                  {{ $t('online_courses.faq.question_2_answer_line_5') }}<br>
                  {{ $t('online_courses.faq.question_2_answer_line_6') }}<br>
                  {{ $t('online_courses.faq.question_2_answer_line_7') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_3 = !isOpenFAQ_3" class="text-left w-full flex justify-between items-start text-white">
                  <span class="text-xl font-medium">
                    {{ $t('online_courses.faq.question_3_question') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenFAQ_3"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenFAQ_3"
                      class="rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd v-if="isOpenFAQ_3" class="mt-2">
                <p class="font-normal text-lg text-white py-4">
                  {{ $t('online_courses.faq.question_3_answer') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_4 = !isOpenFAQ_4" class="text-left w-full flex justify-between items-start text-white">
                  <span class="text-xl font-medium">
                    {{ $t('online_courses.faq.question_4_question') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenFAQ_4"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenFAQ_4"
                      class="rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd v-if="isOpenFAQ_4" class="mt-2">
                <p class="font-normal text-lg text-white py-4">
                  {{ $t('online_courses.faq.question_4_answer') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_5 = !isOpenFAQ_5" class="text-left w-full flex justify-between items-start text-white">
                  <span class="text-xl font-medium">
                    {{ $t('online_courses.faq.question_5_question') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenFAQ_5"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenFAQ_5"
                      class="rotate-180 h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd v-if="isOpenFAQ_5" class="mt-2 pr-12">
                <p class="font-normal text-lg text-white py-4">
                  {{ $t('online_courses.faq.question_5_answer') }}
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionCourseFaq',
  data: () => ({
    isOpenFAQ_1: false,
    isOpenFAQ_2: false,
    isOpenFAQ_3: false,
    isOpenFAQ_4: false,
    isOpenFAQ_5: false
  })
}
</script>
