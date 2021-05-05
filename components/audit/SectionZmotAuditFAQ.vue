<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <section
      class="faq bg-indigo-700 pt-4">
    <div>
      <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2  class="text-3xl font-extrabold text-white sm:text-4xl text-center">
            {{ $t('zmot_audit.faq.header') }}
          </h2>
          <dl class="mt-6 space-y-6 divide-y divide-gray-200">
            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_1 = !isOpenFAQ_1"  class="text-left w-full flex justify-between items-start text-white">
                  <span class="font-medium text-white">
                    {{ $t('zmot_audit.faq.question_1_text') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      class="-rotate-180 h-6 w-6 transform"
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
                <p class="text-base text-indigo-200">
                  {{ $t('zmot_audit.faq.answer_1_text') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_2 = !isOpenFAQ_2" class="text-left w-full flex justify-between items-start text-white">
                  <span class="font-medium">
                    {{ $t('zmot_audit.faq.question_2_text') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                    class="-rotate-180 h-6 w-6 transform"
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
              <dd v-if="isOpenFAQ_2" class="mt-2 pr-12">
                <p class="text-base text-indigo-200">
                  {{ $t('zmot_audit.faq.answer_2_text') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_3 = !isOpenFAQ_3" class="text-left w-full flex justify-between items-start text-white">
                  <span class="font-medium">
                    {{ $t('zmot_audit.faq.question_3_text') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      class="-rotate-180 h-6 w-6 transform"
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
              <dd v-if="isOpenFAQ_3" class="mt-2 pr-12">
                <p class="text-base text-indigo-200">
                  {{ $t('zmot_audit.faq.answer_3_text') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_4 = !isOpenFAQ_4" class="text-left w-full flex justify-between items-start text-white">
                  <span class="font-medium">
                    {{ $t('zmot_audit.faq.question_4_text') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      class="-rotate-180 h-6 w-6 transform"
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
              <dd v-if="isOpenFAQ_4" class="mt-2 pr-12">
                <p class="text-base text-indigo-200">
                  {{ $t('zmot_audit.faq.answer_4_text') }}
                </p>
              </dd>
            </div>

            <div class="pt-6">
              <dt class="text-lg">
                <!-- Expand/collapse question button -->
                <button @click="isOpenFAQ_5 = !isOpenFAQ_5" class="text-left w-full flex justify-between items-start text-white">
                  <span class="font-medium">
                    {{ $t('zmot_audit.faq.question_5_text') }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <!--
                      Heroicon name: chevron-down
                      Open: "-rotate-180", Closed: "rotate-0"
                    -->
                    <svg
                      class="-rotate-180 h-6 w-6 transform"
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
                <p class="text-base text-indigo-200">
                  {{ $t('zmot_audit.faq.answer_5_text') }}
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
  name: 'SectionZmotAuditFAQ',
  data: () => ({
    isOpenFAQ_1: false,
    isOpenFAQ_2: false,
    isOpenFAQ_3: false,
    isOpenFAQ_4: false,
    isOpenFAQ_5: false
  })
}
</script>
