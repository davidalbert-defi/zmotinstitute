<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
  <section class="featureslist py-8" id="ServicesFeatures">
    <div class="relative bg-indigo-700 lg:m-12 rounded-3xl" >

      <div class="max-w-7xl mx-auto py-8 px-4 lg:pt-16 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <!-- <h2 class="text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2> -->
          <h2 class="mt-2 text-3xl text-center md:text-left font-semibold text-white">
            {{ $t('marketing_services.what_we_do.headline_1_text') }}
              <br> {{ $t('marketing_services.what_we_do.headline_2_text') }}
          </h2>
          <p class="mt-8 lg:mr-8 text-lg font-normal text-justify md:text-left text-white"> {{ $t('marketing_services.what_we_do.sub_headline_1') }}</p>
          <p class="mt-8 lg:mr-8 text-lg font-normal text-justify md:text-left text-white">{{ $t('marketing_services.what_we_do.sub_headline_2') }}</p>
          <p class="mt-8 lg:mr-8 text-lg font-normal text-justify md:text-left text-white">{{ $t('marketing_services.what_we_do.sub_headline_3') }}</p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-row sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_1_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_1_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_2_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_2_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_3_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_3_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_4_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_4_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_5_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_5_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_6_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_6_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_7_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_7_description') }}
                </dd>
              </div>
            </div>

            <div class="flex">
              <!-- Heroicon name: check -->
              <svg
                class="flex-shrink-0 h-6 w-6 text-green-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <div class="ml-3">
                <dt class="text-xl leading-6 font-medium text-white">
                  {{ $t('marketing_services.what_we_do.feature_8_header') }}
                </dt>
                <dd class="mt-2 text-lg font-normal text-indigo-200">
                  {{ $t('marketing_services.what_we_do.feature_8_description') }}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionDigitalWhatWeDo'
}
</script>
