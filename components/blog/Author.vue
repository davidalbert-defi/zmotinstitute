<template>
  <div class="col w-full md:w-3/4 mt-12">
    <div class="row flex flex-wrap">
      <div class="lg:flex pl-8 py-10 w-full lg:mr-32 lg:text-base bg-orange-100 lg:m-4 rounded-3xl">
        <img class="avatar " alt="Author Photo" :src="author && author.avatar_urls['96']" />
        <div>
          <div
            v-if="author !== ''"
            class="mt-5 lg:mt-0 text-orange-shinny text-2xl"
          >
            <a
            class="text-orange-shinny"
            href="https://br.linkedin.com/in/rodrigowiethorn"
            target="_blank"
            rel="noopener noreferrer">
              {{ author && author.name }}
            </a>
          </div>
          <div class="mt-4" v-html="author && author.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: ['author'],
  data: () => ({
    loading: true
  }),
  created () {
    this.$nextTick(() => {
      this.loading = false
    })
  }
}
</script>

<style lang="sass" scoped>
  .avatar
    width: 100%
    height: 100%
    max-width: 96px !important
    max-height: 96px !important
    border-radius: 50%
    margin-right: 20px
  .author-name-link
    a
      color: #444
      font-weight: 600
      font-size: 1.3rem
      text-decoration: none
</style>
