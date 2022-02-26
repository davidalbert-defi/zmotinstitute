<template>
  <section id="pricing-section">
  <div >
    <div class="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div class="text-center">
        <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
          {{ $t('courses_consumer_behavior.pricing.headline') }}
          </h2>
        <!-- <p class="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">The right price for you, whoever you are</p> -->
        <!-- <p class="mt-3 max-w-4xl mx-auto text-xl sm:mt-5 sm:text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</p> -->
      </div>
    </div>

    <div class="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div class="relative z-0">
        <div class="absolute inset-0 h-5/6 lg:h-2/3" />
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative lg:grid lg:grid-cols-7">
            <div class="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
              <div class="h-full flex flex-col rounded-lg shadow-xl overflow-hidden lg:rounded-none lg:rounded-l-lg">
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <div class="flex items-center justify-center">
                        <h3 class="text-center text-2xl font-medium text-gray-900" id="tier1">
                          {{ $t('courses_consumer_behavior.pricing.tier1_Features.header') }}
                          </h3>
                          <!-- MISSING TOOLTIP TO DISPLAY ON HOVER
                          inspiration is here: https://codepen.io/robstinson/pen/eYZLRdv?editors=1000
                          -->
                        <!-- <div class="relative flex flex-col items-center group">
                          <svg
                            class="h-6 w-6 pt-1 "
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#818df8"
                            viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                          </svg>
                          <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{{ $t('courses_consumer_behavior.pricing.tier1_Features.tooltip') }}</span>
                            <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                          </div>
                        </div> -->
                      </div>
                      <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                          <span class="mt-2 mr-2 text-4xl font-medium"> $ </span>
                          <span class="font-extrabold">
                            {{ $t('courses_consumer_behavior.pricing.tier1_Features.price') }}
                          </span>
                        </span>
                        <!-- <span class="text-xl font-medium text-gray-500"> /month </span> -->
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" class="space-y-4">
                      <li v-for="(feature,index) in tier1Features" :key="index" class="flex items-start">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#22c55e"
                          viewBox="0 0 20 20">
                          <path d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                      <li v-for="(feature,index) in tier1Restrictions" :key="index" class="flex items-start">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#dc2626"
                          viewBox="0 0 25 25"
                          >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a href="#" class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-hobby">
                          {{ $t('courses_consumer_behavior.pricing.purchase_cta') }}
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
              <div class="relative z-10 rounded-lg shadow-xl">
                <div class="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600" aria-hidden="true" />
                <div class="absolute inset-x-0 top-0 transform translate-y-px">
                  <div class="flex justify-center transform -translate-y-1/2">
                    <span class="inline-flex uppercase rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                      {{ $t('courses_consumer_behavior.pricing.box_highlight') }}
                      </span>
                  </div>
                </div>
                <div class="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3 class="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier2">
                      {{ $t('courses_consumer_behavior.pricing.tier2_Features.header') }}
                      </h3>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                        <span class="mt-2 mr-2 text-4xl font-medium"> $ </span>
                        <span class="font-extrabold">
                          {{ $t('courses_consumer_behavior.pricing.tier2_Features.price') }}
                          </span>
                      </span>
                      <!-- <span class="text-2xl font-medium text-gray-500"> /month </span> -->
                    </div>
                  </div>
                </div>
                <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                  <ul role="list" class="space-y-4 ml-12">
                    <li v-for="(feature,index) in tier2Features" :key="index" class="flex items-center">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#22c55e"
                          viewBox="0 0 20 20">
                          <path d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                      <li v-for="(feature,index) in tier2Restrictions" :key="index" class="flex items-start">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#dc2626"
                          viewBox="0 0 25 25"
                          >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                  </ul>
                  <div class="mt-10">
                    <div class="rounded-lg shadow-md">
                      <a href="#" class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-700" aria-describedby="tier-growth">
                        {{ $t('courses_consumer_behavior.pricing.purchase_cta') }}
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
              <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                <div class="flex-1 flex flex-col">
                  <div class="bg-white px-6 py-10">
                    <div>
                      <h3 class="text-center text-2xl font-medium text-gray-900" id="tier3">
                        {{ $t('courses_consumer_behavior.pricing.tier3_Features.header') }}
                        </h3>
                      <div class="mt-4 flex items-center justify-center">
                        <span class="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                          <span class="mt-2 mr-2 text-4xl font-medium"> $ </span>
                          <span class="font-extrabold">
                            {{ $t('courses_consumer_behavior.pricing.tier3_Features.price') }}
                            </span>
                        </span>
                        <!-- <span class="text-xl font-medium text-gray-500"> /month </span> -->
                      </div>
                    </div>
                  </div>
                  <div class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" class="space-y-4">
                      <li v-for="(feature,index) in tier3Features" :key="index" class="flex items-center">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#22c55e"
                          viewBox="0 0 20 20">
                          <path d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                       <li v-for="(feature,index) in tier3Restrictions" :key="index" class="flex items-start">
                        <svg
                          class="h-6 w-6 pt-1 "
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#dc2626"
                          viewBox="0 0 25 25"
                          >
                          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
                        </svg>
                        <p class="ml-3 text-base font-medium text-gray-500">
                          {{ feature.name }}
                        </p>
                      </li>
                    </ul>
                    <div class="mt-8">
                      <div class="rounded-lg shadow-md">
                        <a href="#" class="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50" aria-describedby="tier-scale">
                          {{ $t('courses_consumer_behavior.pricing.purchase_cta') }}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
//  import jsonld from '@/locales/pt-br.json'
// const tier1Features = [this.$t('courses_consumer_behavior.pricing.tier1_Features.feature1'), 'Assista Quantas Vezes Quiser', 'Exercícios Práticos', 'Reembolso 15 dias']
// const tier1Restrictions = ['Suporte Humano', 'Mentoria Online']
// const tier2Features = ['Acesse Durante 12 meses', 'Assista Quantas Vezes Quiser', 'Exercícios Práticos', 'Reembolso 15 dias', 'Suporte Humano 12 Meses', '1h Mentoria Online']
// const tier2Restrictions = []
// const tier3Features = ['Acesso Ilimitado', 'Assista Quantas Vezes Quiser', 'Exercícios Práticos', 'Reembolso 15 dias', 'Suporte Humano 12 Meses', '2h Mentoria Online']
// const tier3Restrictions = []
export default {
  name: 'PricingCourseConsumerBehavior',
  // components: {
  //   CheckIcon
  // },
  data () {
    return {
      // tier1Features,
      // tier1Restrictions,
      // tier2Features,
      // tier2Restrictions,
      // tier3Features,
      // tier3Restrictions,
      // jsonld: jsonld
      tier1Features: [
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature1')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature2')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature3')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature4')
        }
      ],
      tier1Restrictions: [
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature7')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature5')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature6')
        }
      ],
      tier2Features: [
        {
          name: this.$t('courses_consumer_behavior.pricing.tier2_Features.feature1')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature2')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature3')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature4')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature7')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature5')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier2_Features.feature6')
        }
      ],
      tier2Restrictions: [
      ],
      tier3Features: [
        {
          name: this.$t('courses_consumer_behavior.pricing.tier3_Features.feature1')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature2')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature3')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature4')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature7')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier1_Features.feature5')
        },
        {
          name: this.$t('courses_consumer_behavior.pricing.tier3_Features.feature6')
        }
      ],
      tier3Restrictions: [
      ]
    }
  }
}
</script>
