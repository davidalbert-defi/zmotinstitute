<template>
  <div class="blog-index-page pt-20">
    <lazy-hydrate when-visible>
      <section-blog />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <news-letter />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate
  }
}
</script>
