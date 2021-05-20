<template>
    <div>
      <h2 class="pt-8 text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
        {{ $t('homepage.why_do_you_need_ZMOT.header') }}
      </h2>
      <p class="text-center text-gray-500 text-lg lg:mx-32 font-normal mb-12">
        {{ $t('homepage.why_do_you_need_ZMOT.text1') }}
        <strong>{{ $t('homepage.why_do_you_need_ZMOT.text2') }}</strong>
        {{ $t('homepage.why_do_you_need_ZMOT.text3') }}
        <strong>{{ $t('homepage.why_do_you_need_ZMOT.text4') }}</strong>
        {{ $t('homepage.why_do_you_need_ZMOT.text5') }}
      </p>
    </div>
</template>

<script>
export default {
  name: 'BlogHero'
}
</script>