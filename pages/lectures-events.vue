<template>
  <div class="lectures-events-page px-4 bg-primary pb-12 min-h-screen">
    <lazy-hydrate when-visible>
      <section-lecture-banner />
    </lazy-hydrate>
    <lazy-hydrate when-visisble>
      <section-lecture-content />
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
