<template>
  <div v-if="visible && !loading" class="col w-full md:w-3/4">
    <div class="row flex flex-wrap">
      <div class="w-full">
        <span class="header">{{ $t('blog.add_comment.title') }}</span>
      </div>
    </div>
    <div class="row flex flex-wrap">
      <div class="w-full">
        <span class="info">{{ $t('blog.add_comment.info') }}</span>
      </div>
    </div>
    <form class="w-full" @submit="onSubmit" @reset="onReset">
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="author" class="form-control" required :placeholder="$t('blog.add_comment.name')" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="mail" class="form-control" type="email" required :placeholder="$t('blog.add_comment.email')" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/12">
          <div class="submit-input">
            <input v-model="site" class="form-control" :placeholder="$t('blog.add_comment.website')" />
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full">
          <div class="custom-control custom-checkbox">
            <input
              v-model="save_checked"
              class="custom-control-input"
              type="checkbox"
              value="true"
            />
            <label class="custom-control-label">
              <span>{{ $t('blog.add_comment.save') }}</span>
              <nuxt-link :to="localePath('privacy')" class="text-primary">
                {{ $t('blog.add_comment.privacy_policy') }}
              </nuxt-link>
              <span>{{ $t('blog.add_comment.save1') }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="row flex flex-wrap">
        <div class="w-full md:w-5/6">
          <div class="submit-input">
            <textarea
              id="textarea-rows"
              v-model="comment"
              class="form-control"
              :placeholder="$t('blog.add_comment.comment')"
              required
              rows="8"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button type="submit" class="mt-8 mx-auto uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
          {{ $t('blog.add_comment.submit') }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
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
        author_name: this.author,
        author_email: this.mail,
        author_url: this.site,
        'wp-comment-cookies-consent': this.save_checked,
        content: this.comment,
        submit: 'Submit',
        post: this.postId,
        parent: this.commentId
      }

      try {
        await this.$axios.post('https://thezmot.com/wp-json/wp/v2/comments', commentData)
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
    .submit-input
      input
        border-radius: 0
        &:focus
          box-shadow: none
          border-color: #e46c38
      input::placeholder
        color: #ced4da
  .row
    margin-top: 30px
  textarea
    border-radius: 0
    &:focus
      box-shadow: none
      border-color: #e46c38
  textarea::placeholder
    color: #ced4da
  .btn-submit
    padding: 6px 12px
    border: 1px solid #6c757d
    background-color: #3D3D3D
    border-radius: 0
    color: white
    margin-bottom: 30px
  .form-control
    border: 1px solid #ced4da
    margin: 0
  .custom-control
    position: relative
    display: block
    min-height: 1.5rem
    padding-left: 1.5rem
    z-index: 1
    .custom-control-input
      position: absolute
      left: 0
      z-index: 2
      width: 1rem
      height: 1.25rem
      /*opacity: 0*/
      margin: 0
    .custom-control-label
      position: relative
      margin-bottom: 0
      vertical-align: top
    /*.custom-control-input:checked~ .custom-control-label:before
      color: #fff
      border-color: #007bff
      background-color: #007bff*/
</style>
