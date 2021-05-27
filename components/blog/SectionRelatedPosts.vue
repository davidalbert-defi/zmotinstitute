<template>
    <div v-if="!loading">
        <div class="px-4 pt-8">
            <hr style="border-width:0;color:black">
            <h2 class="text-center mb-8 text-4xl lg:text-6xl font-bold lg:mx-24">
            {{ $t('blog.related_posts') }}
            </h2>
            <!-- <p class="text-center text-gray-500 text-xl lg:text-2xl  lg:mx-32 font-normal mb-12">
            {{ $t('homepage.blog.text') }}
            </p> -->
        </div>
        <div class="mt-12 mx-auto grid gap-5 lg:grid-cols-2 lg:w-3/5">
            <!-- 1st block -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-fill"
                        :src="require('~/assets/img/blog-home-section/zmot-blog-card.png').src"
                        :srcset="require('~/assets/img/blog-home-section/zmot-blog-card.png').srcSet"
                        :blank-src="require('~/assets/img/blog-home-section/zmot-blog-card.png').placeholder"
                        :alt="$t('homepage.blog.block_1_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" to="/blog/zmot-comportamento-do-consumidor" id="btn_home-page_go-to-blog">
                        <h3 class="text-2xl font-bold text-gray-900 lg:h-24">
                        {{ $t('homepage.blog.block_1_header') }}
                        </h3>
                        <p class="text-lg mt-3 text-base text-gray-500">
                        {{ $t('homepage.blog.block_1_text') }}
                        </p>
                        <!-- <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.blog.read_more') }}
                            </button>
                        </div> -->
                    </nuxt-link>
                </div>
            </div>
            <!-- 2nd block -->
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-fill"
                        :src="require('~/assets/img/blog-home-section/customer-experience-blog-card.png').src"
                        :srcset="require('~/assets/img/blog-home-section/customer-experience-blog-card.png').srcSet"
                        :blank-src="require('~/assets/img/blog-home-section/customer-experience-blog-card.png').placeholder"
                        :alt="$t('homepage.blog.block_2_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" to="/blog/customer-experience-jornada-de-compra" id="btn_home-page_go-to-blog">
                        <h3 class="text-2xl font-semibold text-gray-900 lg:h-24">
                        {{ $t('homepage.blog.block_2_header') }}
                        </h3>
                        <p class="text-lg mt-3 text-base text-gray-500">
                        {{ $t('homepage.blog.block_2_text') }}
                        </p>
                        <!-- <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.blog.read_more') }}
                            </button>
                        </div> -->
                    </nuxt-link>
                </div>
            </div>
            <!-- 3rd block
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                    <img
                        class="h-48 w-full object-fill"
                        :src="require('~/assets/img/blog-home-section/economia-comportamental.png').src"
                        :srcset="require('~/assets/img/blog-home-section/economia-comportamental.png').srcSet"
                        :blank-src="require('~/assets/img/blog-home-section/economia-comportamental.png').placeholder"
                        :alt="$t('homepage.blog.block_3_alt')"
                    />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                    <nuxt-link class="block mt-2" to="/blog/economia-comportamental" id="btn_home-page_go-to-blog">
                        <p class="text-2xl font-semibold text-gray-900">
                        {{ $t('homepage.blog.block_3_header') }}
                        </p>
                        <p class="text-lg mt-3 text-base text-gray-500">
                        {{ $t('homepage.blog.block_3_text') }}
                        </p>
                        <div class="pt-10 pb-2">
                                <button class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                                    {{ $t('homepage.blog.read_more') }}
                            </button>
                        </div>
                    </nuxt-link>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'SectionRelatedPosts',
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
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0 1rem 0;
}
a {
    color:black;
    background-color: none;
    text-decoration: none;
  }
</style>
