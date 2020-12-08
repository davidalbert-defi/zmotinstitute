<template>
  <div class="bg-white">
    <lazy-hydrate when-visible>
      <section-banner />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-whyzmot />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-specialists />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-services />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-sayaboutus />
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
