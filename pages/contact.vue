<template>
  <div id="contact-page" class="pt-16 pb-12">
    <lazy-hydrate when-visible>
      <section-contact-banner />
    </lazy-hydrate>

    <lazy-hydrate when-visible>
      <section-contact-form />
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
