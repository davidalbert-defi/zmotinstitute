<template>
  <div class="blog-slug-page">
    <div v-if="!isLoading" class="blog pt-20 my-20 lg:m-20">
      <div class="container mx-auto px-4 lg:px-4">
        <div class="row flex flex-wrap">
          <div class="col w-full md:w-3/4">
            <div class="blog-main">
              <div class="blog-media">
                <img :src="post && post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" alt="Post Image" />
              </div>
              <header class="blog-header">
                <h1 class="blog-title" v-html="post && post.title.rendered" />
              </header>
              <div class="blog-info ">
                <div class="blog-date">
                  <time datetime="2019-03-08T17:10:45-03:00">Publicado em {{ moment(post && post.date).format('DD/MM/YYYY') }}</time>
                </div>
              </div>
              <div class="blog-content" v-html="post && post.content.rendered" />
            </div>
          </div>
          <div class="col w-full md:w-1/4 mt-4 md:mt-0">
            <div class="sidebar-content pl-0 lg:pl-8">
              <div class="search">
                <h3 class="title">
                  Pesquisar
                </h3>
                <input v-model="text" class="form-control border border-solid m-0" placeholder="Search here" style="border-color: #ced4da;" />
              </div>
            </div>
          </div>
          <author
            :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
          />
          <comment-list
            :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
            :replies="post && post._embedded && post._embedded.replies && post._embedded.replies.length > 0 && post._embedded.replies[0]"
            :post-id="post && post.id"
          />
          <add-comment :post-id="post && post.id" :comment-id="0" />
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto min-h-80">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="fullPage"
        :color="color"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  async asyncData ({ params, $axios }) {
    const { data } = await $axios.get(`https://thezmot.com/wp-json/wp/v2/posts?slug=${params.slug}&_embed=1`)
    return {
      post: data[0],
      isLoading: false
    }
  },
  computed: {
    renderedTitle () {
      return this.post.excerpt.rendered.toString().replace(/(<([^>]+)>)/ig, '')
    }
  },
  data: () => ({
    text: '',
    post: null,
    isLoading: true,
    fullPage: true,
    color: '#ff6600'
  }),
  methods: {
    moment (date) {
      return moment(date)
    }
  },
  head () {
    return {
      title: this.post.title.rendered,
      meta: [
        {
          hid: 'twitter-card',
          name: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.post.title.rendered
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.renderedTitle
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: this.$route.path
        }
      ]
    }
  }
}
</script>
