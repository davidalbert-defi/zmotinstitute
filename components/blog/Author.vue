<template>
  <div class="container mx-auto">
    <div class="row flex flex-wrap">
      <div class="lg:flex py-10 w-full">
        <img class="avatar" alt="Author Photo" :src="author && author.avatar_urls['96']" />
        <div>
          <div
            v-if="author && author.link !== ''"
            class="author-name-link mt-5 lg:mt-0"
          >
            <a :href="author.link">
              {{ author && author.name }}
            </a>
          </div>
          <div v-html="author && author.description" />
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
    border-width: 3px
    border-radius: 50%
    border-style: solid
    border-color: #BBB
    margin-right: 20px
  .author-name-link
    a
      color: #444
      font-weight: 600
      font-size: 1.3rem
      text-decoration: none
</style>
