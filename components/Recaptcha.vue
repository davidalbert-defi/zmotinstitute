<template>
  <div
    id="g-recaptcha"
    class="g-recaptcha"
    :data-sitekey="sitekey">
  </div>
</template>

<script>
export default {
  name: 'Recaptcha',
  data: () => ({
    sitekey: process.env.RECAPTCHA_SITE_KEY,
    widgetId: 0
  }),
  mounted () {
    // render the recaptcha widget when the component is mounted
    setTimeout(() => {
      this.render()
    }, 5000)
  },
  methods: {
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      console.log(window.grecaptcha)
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'normal',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset()
          }
        })
      }
    }
  }
}
</script>
