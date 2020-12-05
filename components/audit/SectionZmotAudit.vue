<template>
  <div>
    <section>
      <b-container>
        <b-row class="zmot-audit-wrapper">
          <b-col md="6" sm="12">
            <h1>{{$t('zmot_audit.header')}}</h1>
            <p>{{$t('zmot_audit.text_1')}}</p>
            <p>{{$t('zmot_audit.text_2')}}</p>
            <p>{{$t('zmot_audit.text_3')}}</p>
          </b-col>

          <b-col md="5" sm="12">
            <b-form @submit.prevent="onSubmit">
              <b-form-group>
                <b-form-input :type="'email'" v-model="email" required v-bind:placeholder="$t('placeholder.email')"></b-form-input>
                <b-form-input :type="'text'" v-model="name" required v-bind:placeholder="$t('placeholder.name')"></b-form-input>
                <b-form-input :type="'text'" v-model="surname" required v-bind:placeholder="$t('placeholder.surname')"></b-form-input>
                <vue-tel-input v-model="phone" v-bind="bindProps" v-on:country-changed="countryChanged" required v-bind:placeholder="$t('placeholder.phone')"></vue-tel-input>
                <recaptcha
                  @error="onError"
                  @success="onSuccess"
                  @expired="onExpired"
                />
                <div class="button-wrapper">
                  <button
                    type='submit'
                    id="SubmitLeadForm"
                  >
                    {{$t('zmot_audit.submit')}}
                  </button>
                </div>
              </b-form-group>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <div id="page-submitting" v-if="submitting">
      <loading
        :active.sync="submitting"
        :can-cancel="false"
        :is-full-page="true"
        color="white"
      >
      </loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionZmotAudit'
}
</script>
