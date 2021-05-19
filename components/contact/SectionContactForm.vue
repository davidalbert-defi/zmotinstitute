<template>
  <section id="contact-form" class="contact-form pt-20 bg-white">
    <div class="container mx-auto px-2 lg:px-4">
      <h2 class="text-center font-semibold mb-8 text-primary">
        {{ $t('contact.form.contact') }}
      </h2>
      <p class="text-center text-primary text-xl font-normal">
        {{ $t('contact.form.text') }}
      </p>
      <div class="flex flex-wrap overflow-hidden">
        <form @submit.prevent="onSubmit" class="w-full">
          <div class="my-3 px-3 lg:w-3/4 mx-auto overflow-hidden w-full justify-center">
            <div>
              <div class="flex flex-wrap overflow-hidden">
                <div class="my-3 lg:px-3 px-1 lg:w-1/3 overflow-hidden w-full xl:w-1/3">
                  <input v-model="name" class="form-control" type="text" required placeholder="Name">
                </div>
                <div class="my-3 lg:px-3 px-1 lg:w-1/3 overflow-hidden w-full xl:w-1/3">
                  <input v-model="surname" class="form-control" type="text" required placeholder="Surname">
                </div>
                <div class="my-3 lg:px-3 px-1 lg:w-1/3 overflow-hidden w-full xl:w-1/3">
                  <input v-model="email" class="form-control" type="email" required placeholder="Email">
                </div>
              </div>
              <div class="flex flex-wrap overflow-hidden">
                <div class="w-full lg:px-3 px-1 overflow-hidden">
                  <textarea v-model="message" class="form-control" rows="5" required placeholder="Message" />
                </div>
              </div>
              <div class="flex flex-wrap overflow-hidden">
                <div class="md:w-1/2 sm:w-full sm:text-center md:text-left my-5 lg:my-0">
                  <recaptcha
                    @error="onError"
                    @success="onSuccess"
                    @expired="onExpired"
                  />
                </div>
                <div class="md:w-1/2 hidden lg:block md:block sm:hidden">
                  <button
                    id="FormSendEmail"
                    type="submit"
                    class="font-semibold text-2xl mt-4 border bg-white py-15sm px-3 text-white bg-mpurple rounded-full no-underline"
                  >
                    {{ $t('contact.form.send_email') }}
                  </button>
                </div>
                <div class="text-center w-full md:text-left md:hidden lg:hidden sm:block">
                  <button type="submit" class="font-semibold text-2xl mt-4 border bg-white py-15sm px-3 text-white rounded-full bg-mpurple no-underline">
                    {{ $t('contact.form.send_email') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionContactForm',
  data: () => ({
    name: '',
    surname: '',
    email: '',
    message: '',
    loading: false
  }),
  methods: {
    async onSubmit () {
      try {
        const token = await this.$recaptcha.getResponse()
        const hubSpotPortalId = process.env.hubSpotPortalId
        const contactFormGuid = process.env.contactFormGuid
        console.log('ReCaptcha token:', token)
        this.loading = true
        const data = {
          fields: [
            {
              name: 'email',
              value: this.email
            },
            {
              name: 'firstname',
              value: this.name
            },
            {
              name: 'lastname',
              value: this.surname
            },
            {
              name: 'message',
              value: this.message
            }
          ]
        }

        try {
          await this.$axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${contactFormGuid}`,
            data
          )
          this.loading = false
          this.showSuccessToast()
        } catch (e) {
          this.loading = false
          this.showErrorToast()
        }

        await this.$recaptcha.reset()
      } catch (err) {
        console.log(err)
      }
    },
    onError (error) {
      console.log('Error happened:', error)
    },
    onSuccess (token) {
      console.log('Succeeded:', token)
    },
    onExpired () {
      console.log('Expired')
    },
    showSuccessToast () {
      this.$swal({
        title: this.$t('contact_form.thank_you_title'),
        text: this.$t('contact_form.thank_you_message'),
        icon: 'success',
        button: 'OK'
      })
    },
    showErrorToast () {
      this.$swal({
        title: this.$t('contact_form.thank_you_error_title'),
        text: this.$t('contact_form.thank_you_error_message'),
        icon: 'error',
        button: 'OK'
      })
    }
  }
}
</script>
