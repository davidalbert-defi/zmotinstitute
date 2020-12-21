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
    sitekey: '',
    widgetId: 0
  }),
  mounted () {
    this.sitekey = process.env.RECAPTCHA_SITE_KEY
    console.log(this.sitekey)
    // render the recaptcha widget when the component is mounted
    setTimeout(() => {
      this.render()
    }, 5000)
  },
  methods: {
    onError (message) {
      return this.$emit('error', message)
    },

    onSuccess (token) {
      return this.$emit('success', token)
    },

    onExpired () {
      return this.$emit('expired')
    },

    execute () {
      window.grecaptcha.execute(this.widgetId)
    },

    reset () {
      window.grecaptcha.reset(this.widgetId)
    },

    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('g-recaptcha', {
          sitekey: this.sitekey,
          size: 'normal',
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            console.log(response)
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
