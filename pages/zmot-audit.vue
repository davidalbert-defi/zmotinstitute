<template>
  <div class="zmot-audit-page">
    <lazy-hydrate when-visible>
      <section-lecture-banner />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <section-zmot-audit />
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
