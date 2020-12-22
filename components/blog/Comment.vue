<template>
  <div class="container mx-auto px-2 lg:px-4">
    <div class="row flex flex-wrap">
      <div class="w-full md:w-5/6 comment-item">
        <img class="avatar" alt="Commenter Photo" :src="comment && comment.author_avatar_urls['96']">
        <div>
          <div
            v-if="comment.author_url !== ''"
            class="author-name-link"
          >
            <nuxt-link :to="comment.author_url">
              {{ comment && comment.author_name }}
            </nuxt-link>
          </div>
          <div
            v-else
            class="author-name"
          >
            {{ comment && comment.author_name }}
            <span v-if="comment.author === 1" class="author-badge">Author</span>
          </div>
          <div class="comment-date">
            {{ moment(comment && comment.date).format('MM/DD/YYYY') + ' at ' + moment(comment && comment.date).format('hh:MM A') }}
          </div>
          <div v-html="comment && comment.content && comment.content.rendered" />
          <div class="response-label" @click="toggleAddComment($event)">
            Responder
          </div>
        </div>
      </div>
      <div v-if="visibleAddComment" class="w-full">
        <AddComment
          :comment-id="comment.id"
          :post-id="postId"
        />
      </div>
      <div class="flex flex-wrap row justify-center">
        <div v-for="child of children" :key="child.id" class="w-full md:w-3/4">
          <comment
            :comment="child"
            :replies="replies"
            :author="author"
            :post-id="postId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Comment',
  props: ['comment', 'replies', 'author', 'postId'],
  data: () => ({
    children: null,
    visibleAddComment: false
  }),
  created () {
    this.$bus.$on('hide-add-comment', (data) => {
      if (this.comment.id !== data.commentId) {
        this.visibleAddComment = false
      }
    })
  },
  mounted () {
    this.getChildren()
  },
  methods: {
    getChildren () {
      const parentId = this.comment.id
      const children = this.replies && this.replies.filter(reply => reply.parent === parentId)

      this.children = children
    },
    toggleAddComment (event) {
      event.preventDefault()
      this.visibleAddComment = !this.visibleAddComment
      this.$bus.$emit('hide-add-comment', {
        commentId: this.comment.id,
        visible: this.visibleAddComment
      })
    },
    moment (date) {
      return moment(date)
    }
  }
}
</script>

<style lang="sass" scoped>
  .comment-item
    display: flex
    .avatar
      width: 100%
      height: 100%
      max-width: 60px !important
      max-height: 60px !important
      border-width: 3px
      border-style: solid
      border-color: #BBB
      margin-right: 20px
    .author-name-link
      a
        color: #1bb0ce
        font-weight: 600
        font-size: 1rem
        text-decoration: none
    .author-name
      font-weight: 600
      font-size: 1rem
      color: #444
    .author-badge
      color: #e46c38
    .comment-date
      font-size: 13px
      color: #888
      font-weight: 500
    .response-label
      color: #888
      font-size: 0.85em
      font-weight: 600
      margin: 0 0 20px 0
      cursor: pointer
</style>
