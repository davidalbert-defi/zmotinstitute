<template>
  <section class="bg-primary">
    <div class="container mx-auto flex justify-center">
      <nuxt-link to="/">
        <div>
          <img
            v-bind="logoProp"
            :src="require('~/assets/img/zmot-logo.png').src"
            :srcset="require('~/assets/img/zmot-logo.png').srcSet"
            :blank-src="require('~/assets/img/zmot-logo.png').placeholder"
            alt="zmot-institute white logo"
          >
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MenuNoHeader',
  data: () => ({
    logoProp: { blank: false, width: 250, class: 'm-2' }
  })
}
</script>
