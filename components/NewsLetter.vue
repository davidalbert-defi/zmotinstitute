<template>
  <section id="newsletter" class="news-letter">
    <div class="container mx-auto px-4 lg:px-2">
      <div class="grid grid-cols-12 gap-4" data-aos="zoom-in" data-aos-once="true">
        <div class="col-span-12 lg:col-span-2" />
        <div class="col-span-12 lg:col-span-8">
          <h2 class="text-center text-orange-shinny mb-8 text-4xl lg:text-6xl font-bold lg:mx-12">
            {{ $t('news_letter.header') }}
          </h2>
          <p class="text-center text-orange-shinny text-xl lg:text-2xl lg:mx-20 font-normal mb-12">
            {{ $t('news_letter.text') }}
          </p>
          <div class="search-form">
            <input v-model="email" class="form-control" type="email" :placeholder="$t('news_letter.placeholder')" />
            <button class="browser-show text-white" @click="onSubmit">
              {{ $t('news_letter.subscribe') }}
            </button>
            <button class="mobile-show text-white" @click="onSubmit">
              {{ $t('news_letter.subscribe_ellipse') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NewsLetter',
  data: () => ({
    email: ''
  }),
  methods: {
    async onSubmit () {
      if (!this.email) {
        return
      }
      try {
        const hubSpotPortalId = process.env.hubSpotPortalId
        const hubSpotNewsLetterFormGuid = process.env.hubSpotNewsLetterFormGuid
        const data = {
          fields: [
            {
              name: 'email',
              value: this.email
            }
          ]
        }
        await this.$axios.post(
          `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${hubSpotNewsLetterFormGuid}`,
          data
        )
        this.showSuccessToast()
      } catch (e) {
        console.log(e)
        this.showErrorToast()
      }
    },
    showSuccessToast () {
      this.$swal({
        title: this.$t('online_courses.thank_you_title'),
        text: this.$t('online_courses.thank_you_message'),
        icon: 'success',
        button: 'OK'
      })
    },
    showErrorToast () {
      this.$swal({
        title: 'Submit Failed',
        text: 'Something went wrong with your submission.',
        icon: 'error',
        button: 'OK'
      })
    }
  }
}
</script>
