<template>
    <section class="sticky top-0 bg-green-shinny pt-16 z-30">
        <!-- <p class="text-center pb-8">
          What are you looking for?
        </p> -->
        <div class="flex lg:ml-24">
        <svg class="h-10 w-10 text-gray-400 ml-2 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 550" fill="white" aria-hidden="true">
          <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667    S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6    c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z     M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z" />
        </svg>
        <input
          v-model="text"
          v-on:keyup.enter="submit"
          class="form-control-blog m-0 focus:border-0"
          :placeholder="`${$t('blog_slug.placeholder')}`"
        >
        </div>
    </section>
</template>

<script>
export default {
  name: 'SectionSearchBlog',
  data: () => ({
    text: ''
  }),
  methods: {
    submit () {
      this.$router.replace({ path: '/blog', query: { query: this.text } })
      this.$forceRerender()
    },
    forceRerender () {
      this.blogListComponent += 1
    }
  }
}
</script>
<style lang="scss" scoped>
input::placeholder {
  color:white;
}
input:focus::-webkit-input-placeholder
{
    color: transparent;
}
input:focus {
  border: unset;
}
</style>
