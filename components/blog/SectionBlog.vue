<template>
  <div>
    <div v-if="!isLoading" class="container mx-auto px-2 lg:px-4 z-0">
      <section v-if="!!totalNum" id="blogs" class="blogs my-12 lg:m-20">
        <nuxt-link
          v-for="post of pageOfItems"
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
              <div class="w-full md:w-1/2 mt-12 px-4 md:mt-0 transform scale-125 lg:scale-150">
                <img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url" alt="Post Image" class="rounded-none mx-auto" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="card-body">
                  <div class="card-title text-white bg-primary text-2xl mb-3 font-medium">
                    {{ post.title.rendered }}
                  </div>
                  <div class="text-xl" v-html="post.excerpt.rendered" />
                  <!-- <div class="card-meta">
                    Mais de 2.000 profissionais de marketing já leram esse conteúdo
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
        <client-only>
          <div class="text-center pagination">
            <jw-pagination
              :items="posts"
              :labels="customLabels"
              :styles="customStyles"
              :page-size="10"
              @changePage="gotoPage"
            />
          </div>
        </client-only>
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
import JwPagination from 'jw-vue-pagination'
// import blogData from 'static/data.json'
export default {
  name: 'SectionBlog',
  components: { JwPagination },
  async fetch () {
    let query = ''
    if (this.$route.query.query) {
      query = this.$route.query.query
      console.log(query)
    }
    this.isLoading = true
    try {
      const result = await this.$axios.get('/data.json')
      this.totalNum = result.data.length
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
        }) &&
        result.data.filter((post) => {
          return post.content.rendered.includes(query)
        })
    } catch (e) {
      this.posts = []
      this.totalNum = 0
    } finally {
      this.isLoading = false
    }
    /* this.isLoading = true
    try {
      const result = await this.$axios.get('https://thezmot.com/wp-json/wp/v2/posts')
      this.totalNum = result.data.length
      this.isLoading = false
    } catch (e) {
      this.totalNum = 0
      this.isLoading = false
    } finally {
      this.initializeBlogContents()
    } */
  },
  data: () => ({
    rows: 100,
    currentPage: 0,
    searchKey: '',
    totalNum: 0,
    posts: [],
    pageOfItems: [],
    baseUrl: 'https://thezmot.com/wp-json/wp/v2/',
    perPage: 9,
    pages: [],
    fullPage: true,
    isLoading: true,
    blogListComponent: 0,
    color: '#ff6600',
    customLabels: {
      first: '«',
      last: '»',
      previous: '‹',
      next: '›'
    },
    customStyles: {
      li: {
      },
      a: {
        color: '#fc642e',
        margin: '0 .8rem',
        padding: '.3rem 1rem',
        'border-radius': '5px'
      }
    }
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
    gotoPage (pageItems) {
      this.pageOfItems = pageItems
      // this.$fetch()
    }
  }
  // mounted () {
  //   let query = ''
  //   if (this.$route.query.query) {
  //     query = this.$route.query.query
  //   }
  //   this.posts = blogData &&
  //   blogData.sort((post1, post2) => {
  //     const post1Date = new Date(post1.date_gmt)
  //     const post2Date = new Date(post2.date_gmt)

  //     if (post1Date - post2Date > 0) {
  //       return -1
  //     } else {
  //       return 1
  //     }
  //   }) &&
  //   blogData.filter((post) => {
  //     return post.content.rendered.includes(query)
  //   })
  //   this.totalNum = this.posts.length
  //   this.isLoading = false
  // }
}
</script>

<style scoped lang="scss">

</style>
