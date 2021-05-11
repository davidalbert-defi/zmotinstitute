<template>
  <section
      class="leadform py-6"
      id="contactform">
    <div class="relative bg-orange-100 lg:m-12 rounded-3xl">
      <div class="absolute inset-0 ">
        <div class="absolute inset-y-0 left-0 w-1/2"></div>
      </div>
      <div class="relative max-w-7xl lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-orange-shinny text-center">
              {{ $t('contact_form.lead_form_headline') }}
            </h2>
            <p class="mt-12 text-xl leading-6 text-orange-shinny font-semibold text-center">
              {{ $t('contact_form.lead_form_sub_headline') }}
            </p>
          </div>
        </div>
        <div class="py-2 px-4 sm:px-6 lg:col-span-3 lg:pt-24 lg:px-8 xl:pl-12">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form class="grid grid-cols-1 gap-y-6" @submit.prevent="onSubmit">
              <div>
                <label for="full_name" class="sr-only">{{ $t('contact_form.lead_form.field_name') }}</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autocomplete="name"
                  class="bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-700 rounded-md m-0"
                  :placeholder="`${$t('contact_form.lead_form.field_name')}`">
              </div>
              <div>
                <label for="email" class="sr-only">{{ $t('contact_form.lead_form.field_email') }}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class=" bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-300 rounded-md m-0"
                  :placeholder="`${$t('contact_form.lead_form.field_email')}`">
              </div>
              <div>
                <label for="phone" class="sr-only">{{ $t('contact_form.lead_form.field_phone') }}</label>
                <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class=" bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-300 rounded-md m-0"
                :placeholder="`${$t('contact_form.lead_form.field_phone')}`">
              </div>
              <div>
                <label for="message" class="sr-only">{{ $t('contact_form.lead_form.field_message') }}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md m-0"
                  :placeholder="`${$t('contact_form.lead_form.field_message')}`"></textarea>
              </div>
              <recaptcha
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
              <div class="mx-auto pb-6">
                <button
                  type="submit"
                  class="inline-flex font-semibold justify-center py-3 px-6  border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-shinny hover:bg-green-shinny focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {{ $t('contact_form.lead_form.submit') }}
                </button>
                <p class="mt-6 text-sm text-orange-shinny text-xl ">
                  {{ $t('contact_form.lead_form.privacy_1') }}
                  <a href="/privacy" class="text-orange-shinny font-medium underline text-xl">
                  {{ $t('contact_form.lead_form.privacy_2') }}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="submitting" class="flex content-center justify-center min-h-screen w-full z-100 absolute top-0 left-0 bg-white bg-opacity-30 pt-45vh">
      <loading
        :active.sync="submitting"
        :can-cancel="false"
        :is-full-page="true"
        color="white"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactForm',
  data: () => ({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitting: false
  }),
  methods: {
    async onSubmit () {
      try {
        const token = await this.$recaptcha.getResponse()
        const hubSpotPortalId = process.env.hubSpotPortalId
        const hubSpotFormGuid = process.env.hubSpotFormGuid
        console.log('ReCaptcha token:', token)
        const url = window.location.href
        this.submitting = true
        const data = {
          fields: [
            {
              name: 'full_name',
              value: this.full_name
            },
            {
              name: 'email',
              value: this.email
            },
            {
              name: 'phone',
              value: this.phone
            },
            {
              name: 'message',
              value: 'message'
            },
            {
              name: 'form_url',
              value: url
            }
          ]
        }
        try {
          await this.$axios.post(
            `https://api.hsforms.com/submissions/v3/integration/submit/${hubSpotPortalId}/${hubSpotFormGuid}`,
            data
          )
          this.submitting = false
          this.showSuccessToast()
        } catch (err) {
          this.submitting = false
          if (err.response.data.errors[0].message.includes('phone')) {
            this.showPhoneNumberErrorToast()
          } else {
            this.showErrorToast()
          }
        }
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('error:', error)
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
    },
    showPhoneNumberErrorToast () {
      this.$swal({
        title: 'Submit Failed',
        text: 'Your phone number is not valid, please try to use correct one.',
        icon: 'error',
        button: 'OK'
      })
    },
    onError (error) {
      console.log('Error happened:', error)
    },
    onSuccess (token) {
      console.log('Succeeded:', token)
    },
    onExpired () {
      console.log('Expired')
    }
  }
}

</script>
