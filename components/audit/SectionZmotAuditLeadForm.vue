<template>
  <section
      class="leadform bg-orange-100 pt-4"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-once="true"
      data-aos-duration="500">
    <div class="relative">
      <div class="absolute inset-0 ">
        <div class="absolute inset-y-0 left-0 w-1/2"></div>
      </div>
      <div class="relative max-w-7xl mx-6 lg:grid lg:grid-cols-5">
        <div class="bg-gray-50 py-12 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div class="max-w-lg mx-auto">
            <h2 class="text-4xl font-extrabold tracking-tight text-orange-shinny text-center">
              {{ $t('zmot_audit.leadform.header') }}
            </h2>
            <p class="mt-12 text-lg leading-6 text-orange-shinny ">
              {{ $t('zmot_audit.leadform.text') }}
            </p>
          </div>
        </div>
        <div class="py-2 px-4 sm:px-6 lg:col-span-3 lg:pt-24 lg:px-8 xl:pl-12">
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
              <div>
                <label for="full_name" class="sr-only">Full name</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autocomplete="name"
                  class="bg-orange-100 block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-700 rounded-md"
                  placeholder="Qual seu Nome?">
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class=" bg-orange-100 block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-300 rounded-md"
                  placeholder="Qual seu Email?">
              </div>
              <div>
                <label for="phone" class="sr-only">Phone</label>
                <input
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
                class=" bg-orange-100 block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-orange-300 rounded-md"
                placeholder="E o seu Fone?">
              </div>
              <div>
                <label for="message" class="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  class="bg-orange-100 block w-full shadow-inner py-3 px-4 placeholder-orange-shinny focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                  placeholder="Como Podemos ajudá-lo? Qual sua dúvida?"></textarea>
              </div>
              <div class="mx-auto pb-6">
                <button
                  type="submit"
                  class="inline-flex font-semibold justify-center py-3 px-6  border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-green-shinny focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {{ $t('zmot_audit.leadform.submit') }}
                </button>
                <p class="mt-6 text-sm text-orange-shinny ">
                  Privacidade de Dados é um assunto sério para nós. Entenda nossa
                  <a href="#" class="text-orange-shinny font-medium underline">
                  Política de Privacidade de Dados.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

export default {
  name: 'SectionZmotAuditLeadForm'
}
</script>
