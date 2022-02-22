<template>

<section id="course-will-learn" class="pt-24 pb-8">
  <div id="will-learn" class="md:p-12">
        <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24 capitalize"> O que você vai Aprender!?</h2>
        <dl class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt class="flex row">
            <svg
              class=" h-6 w-6 pt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              stroke="currentColor"
              enable-background="new 0 0 64 64"
              fill="#43a047"
              stroke-width=0px
              items-center>
              <path d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50  l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z" />
            </svg>
            <p class="capitalize ml-2 items-center font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="capitalize mt-2  pl-8 text-base text-gray-500">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
  </div>
</section>

</template>

<script>
// import { CheckIcon } from '@heroicons/vue/outline'

export default {
  name: 'WillLearnCourseConsumerBehavior',
  data () {
    return {
      features: [
        {
          name: 'ter foco no cliente',
          description: 'Aprenda a entender a necessidade do seu cliente e ser Customer Centric'
        },
        {
          name: 'Entender o cliente',
          description: 'Aprenda a entender o que cliente quer, quando ele quer, e para que ele quer'
        },
        {
          name: 'Comunicar Corretamente',
          description: 'Aprenda a entregar a mensagem certa, na hora certa, para o cliente certo'
        },
        {
          name: 'Influenciar Tomada de Decisão',
          description: 'Entenda como as pessoas tomam decisões e como você pode influenciar a percepção de valor'
        },
        {
          name: 'mapear as pegadas digitais',
          description: 'Aprenda a mapear as pegadas digitais que seu cliente deixa durante a Jornada do Cliente.'
        },
        // {
        //   name: 'Economia Comportamental',
        //   description: 'Compreenda como as leis de oferta e demanda estão sendo modificadas'
        // },
        {
          name: 'criar experimentos',
          description: 'Entenda como criar experimentos para mudar o de comportamento do seu cliente e alavancar suas vendas'
        }
        // {
        //   name: 'técnicas e ferramentas',
        //   description: 'Conheça de forma prática ferramentas como Mapa da Jornada do Cliente, Mapa de Personas, Mapa da Empatia'
        // }
      ]
    }
  }
}
</script>
