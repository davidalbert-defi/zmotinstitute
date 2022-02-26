<template>
  <div>
    <div class="blog-slug-page">
      <div v-if="!isLoading" class="pt-4 my-20 lg:m-20 lg:mt-32">
        <div class="container mx-auto px-4 lg:px-4">
          <div class="row flex flex-wrap">
            <div class="col w-full md:w-3/4 order-1">
              <div>
                <div class="mb-4">
                  <img
                    :src="post && post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url"
                    alt="Post Image"
                  >
                </div>
                <header class="my-2">
                  <!--                <div ref="example-element">{{ this.post }}</div>-->
                  <h1 class="my-2" v-html="post && post.title.rendered" />
                </header>
                <div class="my-8">
                  <div class="blog-date">
                    <time datetime="2019-03-08T17:10:45-03:00">Publicado em
                      {{ moment(post && post.date).format('DD/MM/YYYY') }}
                    </time>
                  </div>
                </div>
                <div class="blog-content" v-html="post && renderedContent" />
              </div>
              <div class="pt-10" v-if="!isMore">
                <button id="btn_read_more_blog_post" class="mx-auto uppercase flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10" v-on:click="readMore" >
                  {{ $t('blog_slug.btn_read_more') }}
                  <!-- {{moreBtntxt}} -->
                </button>
              </div>
            </div>
            <!-- <aside class="lg:h-full col w-full mt-4 md:mt-0 order-9 mt-16 lg:pt-12">
              <div class="pl-4 pb-12 pt-2 pr-2 lg:ml-2 lg:pb-12 lg:pt-4 bg-orange-100 rounded-3xl shadow-lg">
                <div class="sidebar-content pl-0 lg:px-4 ">
                  <div class="search">
                    <h2 class="text-orange-shinny font-bold">
                      {{ $t('blog_slug.headline') }}
                    </h2>
                    <p class="text-sm pb-8 text-orange-shinny">
                      {{ $t('blog_slug.sub_headline_1') }}
                      <br>
                      <br>{{ $t('blog_slug.sub_headline_2') }}
                    </p>
                    <input
                      v-model="text"
                      v-on:keyup.enter="submit"
                      class="form-control border border-solid m-0"
                      :placeholder="`${$t('blog_slug.placeholder')}`"
                      style="border-color: #ced4da;"
                    >
                  </div>
                </div>
              </div>
            </aside> -->
            <author
              class="order-3"
              v-if="isMore"
              :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
            />
            <comment-list
              class="order-4"
              v-if="isMore"
              :author="post && post._embedded && post._embedded.author && post._embedded.author.length > 0 && post._embedded.author[0]"
              :replies="post && post._embedded && post._embedded.replies && post._embedded.replies.length > 0 && post._embedded.replies[0]"
              :post-id="post && post.id"
            />
            <add-comment
            class="order-5"
            v-if="isMore"
            :post-id="post && post.id"
            :comment-id="0" />
            <section-related-posts
            class="order-6"
            />
            <related-services
            class="order-7"
            />
          </div>
          <div>
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
    <div>
      <section-search-slug />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import blogData from 'static/data.json'
export default {
  asyncData ({
    params
  }) {
    const postdata = blogData &&
    blogData.filter((post) => {
      return post.slug === params.slug
    })
    return {
      post: postdata[0],
      isLoading: false
    }
  },
  data: () => ({
    text: '',
    hubspotform: '',
    post: null,
    isLoading: true,
    fullPage: true,
    color: '#ff6600',
    isMore: false,
    serviceNum: '0'
  }),
  computed: {
    renderedTitle () {
      return this.post.excerpt.rendered.toString().replace(/(<([^>]+)>)/ig, '')
    },
    renderedContent () {
      if (this.isMore) {
        return this.post.content.rendered
      } else {
        return this.post.content.rendered.split('<!--more-->')[0]
      }
    }
  },
  updated () {
    const script = document.createElement('script')
    script.src = 'https://js.hsforms.net/forms/v2.js'
    document.body.appendChild(script)
    if (document.getElementById('hubspotform')) {
      this.hubspotform = document.getElementById('hubspotform').innerHTML
      this.formId = (this.hubspotform).split('formId:')[1].split(',')[0].replace('"', '').replace('"', '')
      script.addEventListener('load', () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            portalId: '5835830',
            formId: this.formId,
            target: '#hubspotform'
          })
        }
      })
    }
  },
  methods: {
    moment (date) {
      return moment(date)
    },
    submit () {
      this.$router.replace({ path: '/blog', query: { query: this.text } })
    },
    readMore () {
      this.isMore = !this.isMore
      if (this.isMore) {
        this.moreBtntxt = 'Read Less'
      } else {
        this.moreBtntxt = 'Read More'
      }
    }
  },
  head () {
    return {
      title: this.post?.title.rendered,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: this.post?.excerpt.rendered
          content: this.renderedTitle
        },
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
