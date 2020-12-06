<template>
  <div class="zmot-audit-page px-4 bg-primary pb-12 min-h-screen">
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
  layout: 'noheader'
}
</script>
