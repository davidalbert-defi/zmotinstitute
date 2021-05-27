<template>
    <section
      class="leadform py-6"
      id="contactform">
      <div class="relative bg-orange-100 lg:m-12 rounded-3xl">
        <div class="relative max-w-7xl lg:grid lg:grid-cols-5">
          <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div class="max-w-lg mx-auto">
              <h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-orange-shinny text-center">
                {{ $t('contact_form.lead_form_headline') }}
              </h2>
              <p class="mt-12 text-xl leading-6 text-orange-shinny font-normal">
                {{ $t('contact_form.lead_form_sub_headline_1') }}
              </p>
              <p class="mt-12 text-xl leading-6 text-orange-shinny font-normal">
                {{ $t('contact_form.lead_form_sub_headline_2') }}
              </p>
            </div>
          </div>
          <div class="py-2 px-4 sm:px-6 lg:col-span-3 lg:pt-24 lg:px-8 xl:pl-12">
            <form id="money-page-form" class="w-full" @submit.prevent="onSubmit">
              <div>
                <div>
                  <label for="email" class="sr-only">{{ $t('contact_form.lead_form.field_email') }}</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    v-model="email"
                    class=" bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-300 rounded-md m-0"
                    :placeholder="`${$t('contact_form.lead_form.field_email')}`">
                </div>
                <div class="mt-6">
                <label for="name" class="sr-only">{{ $t('contact_form.lead_form.field_name') }}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    v-model="name"
                    class="bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-700 rounded-md m-0"
                    :placeholder="`${$t('contact_form.lead_form.field_name')}`">
                </div>
                <div class="mt-6 mb-6">
                  <label for="surname" class="sr-only">{{ $t('contact_form.lead_form.field_name') }}</label>
                  <input
                    type="text"
                    name="surname"
                    id="surname"
                    autocomplete="surname"
                    v-model="surname"
                    class="bg-orange-100 text-xl block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-700 rounded-md m-0"
                    :placeholder="`${$t('contact_form.lead_form.field_surname')}`">
                </div>
                <client-only>
                  <vue-tel-input
                  class="bg-orange-100 text-xl block w-full shadow-inner py-3 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-700 rounded-md m-0"
                  v-model="phone"
                  v-bind="telInputOption"
                  required
                  :placeholder="$t('placeholder.phone')"
                  @country-changed="countryChanged">
                  </vue-tel-input>
                </client-only>
                <recaptcha
                  class="mt-8"
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
                <div class="mx-auto pb-6">
                  <button
                    id="SubmitLeadForm"
                    type="submit"
                    class="inline-flex font-semibold justify-center py-3 px-6  border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-shinny hover:bg-green-shinny focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {{ $t('contact_form.lead_form.submit') }}
                  </button>
                  <p class="mt-6 text-sm text-orange-shinny">
                    {{ $t('contact_form.lead_form.privacy_1') }}
                    <nuxt-link :to="localePath('privacy')" class="text-orange-shinny font-medium underline">
                    {{ $t('contact_form.lead_form.privacy_2') }}
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </form>
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
import { VueTelInput } from 'vue-tel-input'
import { mapGetters } from 'vuex'
export default {
  name: 'SectionZmotAudit',
  components: { VueTelInput },
  data: () => ({
    email: '',
    name: '',
    surname: '',
    phone: '',
    country: '',
    submitting: false
  }),
  computed: {
    ...mapGetters(['telInputOption'])
  },
  methods: {
    countryChanged (country) {
      this.country = country.dialCode
      this.phone = '+' + country.dialCode + ' '
    },
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
              name: 'phone',
              value: this.phone
            },
            {
              name: 'service_interest',
              value: 'online-courses'
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
        title: this.$t('contact_form.thank_you_title'),
        text: this.$t('contact_form.thank_you_message'),
        icon: 'success',
        button: 'OK'
      })
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        formLocation: 'money_page_form',
        event: 'SubmitLeadForm'
      })
    },
    showErrorToast () {
      this.$swal({
        title: 'contact_form.error_title',
        text: 'contact_form.error_message',
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
