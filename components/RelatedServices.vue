<template>
    <div v-if="!loading">
        <div class="px-4 pt-8">
            <h2 class="text-center mb-8 text-4xl lg:text-6xl font-bold lg:mx-24">
            {{ $t('homepage.services.header') }}
            </h2>
            <!-- <p class="text-center text-gray-500 text-xl lg:text-2xl  lg:mx-32 font-normal mb-12">
            {{ $t('homepage.blog.text') }}
            </p> -->
        </div>
        <div class="mt-12 mx-auto grid gap-5 lg:grid-cols-3 lg:w-full">
            <!-- 1st block -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-fill"
                        :src="require('~/assets/img/services/service-zmot_audit.png').src"
                        :srcset="require('~/assets/img/services/service-zmot_audit.png').srcSet"
                        :blank-src="require('~/assets/img/services/service-zmot_audit.png').placeholder"
                        :alt="$t('homepage.blog.block_1_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" :to="localePath('digital-marketing-services')" id="btn_related-services_go-to-money-page">
                        <h3 class="text-2xl font-bold text-gray-900 text-center lg:h-24">
                        {{ $t('homepage.services.service_1_header') }}
                        </h3>
                        <p class="text-lg mt-3 text-base text-gray-500 text-justify">
                        {{ $t('homepage.services.service_1_description_short') }}
                        </p>
                        <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.services.get_a_quote') }}
                            </button>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <!-- 2nd block -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-fill"
                        :src="require('~/assets/img/services/service-lecture.png').src"
                        :srcset="require('~/assets/img/services/service-lecture.png').srcSet"
                        :blank-src="require('~/assets/img/services/service-lecture.png').placeholder"
                        :alt="$t('homepage.blog.block_2_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" :to="localePath('keynote-speakers')" id="btn_related-services_go-to-money-page">
                        <h3 class="text-2xl font-semibold text-gray-900 text-center lg:h-24 align-middle">
                        {{ $t('homepage.services.service_2_header') }}
                        </h3>
                        <p class="text-lg mt-3 text-base text-gray-500 text-justify">
                        {{ $t('homepage.services.service_2_description_short') }}
                        </p>
                        <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.services.get_a_quote') }}
                            </button>
                        </div>
                    </nuxt-link>
                </div>
            </div>
            <!-- 3rd block -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-scale-fill"
                        :src="require('~/assets/img/services/service-online_course.png').src"
                        :srcset="require('~/assets/img/services/service-online_course.png').srcSet"
                        :blank-src="require('~/assets/img/services/service-online_course.png').placeholder"
                        :alt="$t('homepage.blog.block_3_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" :to="localePath('digital-marketing-courses')" id="btn_related-services_go-to-money-page">
                        <h3 class="text-2xl font-bold text-gray-900 text-center lg:h-24 align-middle">
                        {{ $t('homepage.services.service_3_header') }}
                        </h3>
                        <p class="text-lg mt-3 text-base text-gray-500 text-justify">
                        {{ $t('homepage.services.service_3_description_short') }}
                        </p>
                        <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.services.get_a_quote') }}
                            </button>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'RelatedServices',
  data: () => ({
    loading: true
  }),
  created () {
    this.$nextTick(function () {
      this.loading = false
    })
  }
}
</script>

<style scoped>
h2 {
  font-family: 'Quicksand Medium';
  font-size: 2.5rem;
  font-weight: 500;
}
h3{
  font-family: 'Quicksand Medium';
  font-size: 2rem;
  font-weight: 500;
  margin: 1rem 0 1rem 0;
}
a {
    color:black;
    background-color: none;
    text-decoration: none;
  }
</style>
