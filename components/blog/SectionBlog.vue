<template>
  <div>
    <div v-if="!isLoading" class="container mx-auto px-2 lg:px-4">
      <section v-if="!!totalNum" id="blogs" class="blogs m-20">
        <nuxt-link
          v-for="post of posts"
          id="blog-card"
          :key="post.id"
          :to="localePath({
            name: 'blog-slug',
            params: { slug: post.slug }
          })"
          class="blog--item no-underline"
          data-aos="fade-up"
        >
          <div class="card overflow-hidden">
            <div class="row flex flex-wrap">
              <div class="w-full md:w-1/3">
                <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url" alt="Post Image" class="rounded-none" />
              </div>
              <div class="w-full md:w-2/3">
                <div class="card-body" :title="post.title.rendered">
                  <div class="card-text" v-html="post.excerpt.rendered" />
                  <!-- <div class="card-meta">
                    Mais de 2.000 profissionais de marketing já leram esse conteúdo
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
        <b-pagination-nav
          v-model="currentPage"
          size="lg"
          :link-gen="linkGen"
          :number-of-pages="totalNum"
          base-url="#"
          use-router
        />
      </section>

      <section v-else id="blog" class="blog pt-20 m-20">
        No blogs detected
      </section>
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
export default {
  name: 'SectionBlog',
  async fetch () {
    this.isLoading = true
    try {
      const result = await this.$axios.get('https://thezmot.com/wp-json/wp/v2/posts')
      this.totalNum = result.data.length / 10 + 1
    } catch (e) {
      this.totalNum = 0
    } finally {
      this.initializeBlogContents()
    }
  },
  data: () => ({
    rows: 100,
    currentPage: 1,
    totalNum: 0,
    posts: [],
    baseUrl: 'https://thezmot.com/wp-json/wp/v2/',
    perPage: 9,
    pages: [],
    fullPage: true,
    isLoading: true,
    color: '#ff6600'
  }),
  watch: {
    '$route.query.page' (value) {
      this.currentPage = value
    }
  },
  methods: {
    linkGen (pageNum) {
      return pageNum === 1 ? '?page=1' : `?page=${pageNum}`
    },
    async initializeBlogContents () {
      this.isLoading = true
      if (!this.totalNum) {
        this.isLoading = false
        return
      }
      try {
        const result = await this.$axios.get(`https://thezmot.com/wp-json/wp/v2/posts?per_page=10&page=${this.currentPage}&_embed=1`)
        this.posts = result &&
          result.data &&
          result.data.sort((post1, post2) => {
            const post1Date = new Date(post1.date_gmt)
            const post2Date = new Date(post2.date_gmt)

            if (post1Date - post2Date > 0) {
              return -1
            } else {
              return 1
            }
          })
      } catch (e) {
        this.posts = []
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>
