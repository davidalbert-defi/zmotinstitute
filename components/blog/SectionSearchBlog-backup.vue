<template>
    <section>
        <h2 class="text-center pb-8 pt-20">
          What are you looking for?
        </h2>
        <div>
        <input
          v-model="text"
          v-on:keyup.enter="submit"
          class="form-control border border-solid m-0"
          :placeholder="`${$t('blog_slug.placeholder')}`"
          style="border-color: #ced4da;"
        >
        </div>
    </section>
</template>

<script>
export default {
  name: 'SectionSearchBlog',
  methods: {
    submit () {
      this.$router.replace({ path: '/blog', query: { query: this.text } })
    }
  }
}
</script>
