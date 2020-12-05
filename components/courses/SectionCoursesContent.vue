<template>
  <div>
    <section>
      <div class="container mx-auto">
        <div class="online-courses-wrapper flex flex-wrap overflow-hidden justify-between">
          <div class="w-full lg:w-1/2">
            <h1 class="text-51xl font-semibold text-white leading-tight mt-8 mb-12">
              Learn ZMOT At Your Own Pace
            </h1>
            <p class="text-white font-medium text-justify mb-4">
              Online Courses are the perfect solution if you want to learn in depth content, but is a busy person with a tight agenda.
            </p>
            <p class="text-white font-medium text-justify mb-4">
              We have prepared a detailed hands on course about ZMOT, that will not only help you to learn the concepts, but also how to implement things, which tools to use and best practices the fastest growing companies in the world have been using.
            </p>
            <p class="text-white font-medium text-justify mb-4">
              You will also have full access to our exclusive content, plus 1 hour mentoring virtual call with a ZMOT INSTITUTE expert. Push yourself towards the growth mindset.
            </p>
          </div>

          <div class="w-full lg:w-5/12">
            <form class="w-full" @submit.prevent="onSubmit">
              <div>
                <input v-model="email" class="form-control rounded-full" type="email" required :placeholder="'Email'">
                <input v-model="name" class="form-control rounded-full" type="text" required :placeholder="'Name'">
                <input v-model="surname" class="form-control rounded-full" type="text" required :placeholder="'Surname'">
                <vue-tel-input
                  v-model="phone"
                  v-bind="telInputOption"
                  required
                  :placeholder="'Phone Number'"
                  @country-changed="countryChanged"
                />
                <recaptcha
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
                <div class="flex justify-center">
                  <button
                    id="SubmitLeadForm"
                    type="submit"
                    class="bg-mpurple py-15sm px-3 text-13xl font-bold rounded-full text-white"
                  >
                    Start To Learn ZMOT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div v-if="submitting" class="flex content-center justify-center min-h-screen w-full z-100 absolute top-0 left-0 bg-white bg-opacity-30 pt-45vh">
      <loading
        :active.sync="submitting"
        :can-cancel="false"
        :is-full-page="true"
        color="white"
      />
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import { mapGetters } from 'vuex'
export default {
  name: 'SectionCoursesContent',
  components: {
    Loading
  },
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
