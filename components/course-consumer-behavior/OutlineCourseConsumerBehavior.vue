<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="container opacity-40 rounded-lg">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24"> {{ $t('courses_consumer_behavior.course_outline.headline') }}</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
            <!-- 1st module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule1 = !isOpenModule1"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module1.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule1"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule1"
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
              <dd v-if="isOpenModule1" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module1.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module1.lesson2')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module1.lesson3')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module1.lesson4')"></p>
              </dd>
            </div>
            <!-- 2nd module box -->
            <div class="py-4 px-4 mt-20 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule2 = !isOpenModule2"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module2.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule2"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule2"
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
              <dd v-if="isOpenModule2" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson2')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson3')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson4')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson5')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson6')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson7')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module2.lesson8')"></p>
              </dd>
            </div>
            <!-- 3rd module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule3 = !isOpenModule3"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module3.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule3"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule3"
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
              <dd v-if="isOpenModule3" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module3.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module3.lesson2')"></p>
              </dd>
            </div>
             <!-- 4th module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule4 = !isOpenModule4"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module4.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule4"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule4"
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
              <dd v-if="isOpenModule4" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson2')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson3')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson4')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson5')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson6')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson7')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson8')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module4.lesson9')"></p>
              </dd>
            </div>
             <!-- 5th module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule5 = !isOpenModule5"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module5.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule5"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule5"
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
              <dd v-if="isOpenModule5" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module5.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module5.lesson2')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module5.lesson3')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module5.lesson4')"></p>
              </dd>
            </div>
            <!-- 6th module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule6 = !isOpenModule6"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module6.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule6"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule6"
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
              <dd v-if="isOpenModule6" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson2')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson3')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson4')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson5')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson6')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson7')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson8')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module6.lesson9')"></p>
              </dd>
            </div>
            <!-- 7th module box -->
            <div class="py-4 px-4 rounded-lg shadow-xl shadow-white bg-white">  <!-- border-4 -->
              <dt class="md:text-lg text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenModule7 = !isOpenModule7"  class="text-left w-full flex justify-between items-start">
                  <span class="text-xl font-bold pl-4 capitalize">
                    {{ $t('courses_consumer_behavior.course_outline.module7.name') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      v-if="!isOpenModule7"
                      class="h-6 w-6 transform"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    <svg
                      v-if="isOpenModule7"
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
              <dd v-if="isOpenModule7" class="mt-2 pr-12 shadow-inner rounded-lg grid grid-cols-1 divide-y-2">
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module7.lesson1')"></p>
                <p class="font-normal md:text-lg text-base ml-6 py-2 pl-4 leading-8 capitalize" v-html="$t('courses_consumer_behavior.course_outline.module7.lesson2')"></p>
              </dd>
            </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
// import { ChevronDownIcon } from '@heroicons/vue/outline'

export default {
  name: 'OutlineCourseConsumerBehavior',
  //   components: {
  //     ChevronDownIcon
  //   },
  data: () => ({
    isOpenModule1: false,
    isOpenModule2: false,
    isOpenModule3: false,
    isOpenModule4: false,
    isOpenModule5: false,
    isOpenModule6: false,
    isOpenModule7: false
  })
}
</script>
