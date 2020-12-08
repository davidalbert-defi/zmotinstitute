<template>
  <div v-if="visible && !loading" class="container mx-auto">
    <div class="row flex flex-wrap">
      <div class="w-full">
        <span class="header">Add a Comment</span>
      </div>
    </div>
    <div class="row flex flex-wrap">
      <div class="w-full">
        <span class="info">Your email address will not be published. Required fields are marked *</span>
      </div>
    </div>
    <form @submit="onSubmit" @reset="onReset" class="w-full">
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="author" class="form-control" required placeholder="Name (required)" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="mail" class="form-control" type="email" required placeholder="E-Mail (required)" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="site" class="form-control" placeholder="Web site" type="url" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full">
          <input
            type="checkbox"
            v-model="save_checked"
            value="Save"
          />
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/6">
          <div class="submit-input">
            <textarea
              id="textarea-rows"
              v-model="comment"
              placeholder="Comment"
              required
              rows="8"
            />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <button type="submit" class="btn-submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddComment',
  components: {},
  props: ['postId', 'commentId'],
  data: () => ({
    loading: true,
    visible: true,
    author: '',
    mail: '',
    site: '',
    save_checked: false,
    comment: ''
  }),
  created () {
    this.$nextTick(function () {
      this.loading = false
    })
    this.$bus.$on('hide-add-comment', (data) => {
      this.visible = !data.visible
    })
  },
  mounted () {

  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.addComment()
    },
    onReset (evt) {
      evt.preventDefault()
    },
    async addComment () {
      const commentData = {
        author: this.author,
        email: this.mail,
        url: this.site,
        'wp-comment-cookies-consent': this.save_checked,
        comment: this.comment,
        submit: 'Submit',
        comment_post_ID: this.postId,
        comment_parent: this.commentId
      }

      try {
        await axios.post('https://thezmot.com/wp-comments-post.php', commentData)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  .header
    font-size: 1.5em
    font-weight: 600
    line-height: 1.8
    .info
      font-size: 100%
      line-height: 1.5
      color: #444
    .row
      margin-top: 30px
    .submit-input
      input
        border-radius: 0
        &:focus
          box-shadow: none
          border-color: #e46c38
      input::placeholder
        color: #ced4da
      textarea
        border-radius: 0
        &:focus
          box-shadow: none
          border-color: #e46c38
      textarea::placeholder
        color: #ced4da
    .btn-submit
      background-color: #3D3D3D
      border-radius: 0
      color: white
      margin-bottom: 30px
</style>
