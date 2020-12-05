<template>
  <div class="online-courses-page bg-primary pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-lecture-banner />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-courses-content />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: { LazyHydrate },
  mounted () {
    this.$bus.$emit('hide-header-footer')
  }
}
</script>
