<template>
  <div v-if="!loading" class="col w-full md:w-3/4">
    <div class="row flex flex-wrap">
      <div v-for="(item, index) in items" :key="item.id" :class="`w-full ml-${index*4}`">
        <comment
          :comment="item"
          :replies="replies"
          :author="author"
          :post-id="postId"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentList',
  props: ['author', 'replies', 'postId'],
  data: () => ({
    loading: true,
    items: null
  }),
  async mounted () {
    const commentList = await this.$axios.get('https://thezmot.com/wp-json/wp/v2/comments?post=' + this.postId)
    this.items = commentList && commentList.data
  },
  created () {
    this.$nextTick(function () {
      this.loading = false
    })
  }
}
</script>

<style lang="sass" scoped>
  .header
    font-size: 1.5em !important
    font-weight: 600 !important
    line-height: 1.8 !important
    margin: 20px 0
</style>
