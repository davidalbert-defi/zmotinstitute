<template>
  <section
      class="step bg-white py-8">
    <div class="container px-4 py-5 mx-auto flex flex-wrap">
      <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
        {{ $t('marketing_services.how_we_do.headline') }}
      </h2>
      <p class="text-center text-gray-500 text-xl lg:mx-32 font-normal mb-12">
        {{ $t('marketing_services.how_we_do.sub_headline') }}
      </p>
      <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-12 h-12"
              viewBox="0 0 512 512">
              <path
                d="M480.488,241C473.07,128.863,383.137,38.93,271,31.512V0h-30v31.512C128.863,38.93,38.93,128.863,31.512,241H0v30h31.512
      C38.93,383.137,128.863,473.07,241,480.488V512h30v-31.512C383.137,473.07,473.07,383.137,480.488,271H512v-30H480.488z
       M241,61.571v60.267C178.521,128.777,128.777,178.521,121.838,241H61.571C68.877,145.409,145.409,68.877,241,61.571z M241,450.429
      C145.409,443.123,68.877,366.591,61.571,271h60.267c6.939,62.479,56.683,112.223,119.162,119.162V450.429z M241,331v28.924
      c-45.916-6.597-82.327-43.008-88.924-88.924H181v-30h-28.924c6.597-45.916,43.008-82.327,88.924-88.924V181h30v-28.924
      c45.916,6.597,82.327,43.008,88.924,88.924H331v30h28.924c-6.597,45.916-43.008,82.327-88.924,88.924V331H241z M271,450.429
      v-60.267c62.479-6.939,112.223-56.684,119.162-119.162h60.267C443.123,366.591,366.591,443.123,271,450.429z M390.162,241
      C383.223,178.521,333.479,128.777,271,121.838V61.571C366.591,68.877,443.123,145.409,450.429,241H390.162z"></path>
              <path d="M256,211c-24.813,0-45,20.187-45,45s20.187,45,45,45s45-20.187,45-45S280.813,211,256,211z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <dt class="font-semibold text-gray-900 mb-1 text-2xl">
              {{ $t('marketing_services.how_we_do.step_1_header') }}
            </dt>
              <dd class="leading-relaxed font-normal text-xl text-gray-500">
                {{ $t('marketing_services.how_we_do.step_1_description') }}
              </dd>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-12 h-12"
              viewBox="0 0 512 512">
              <path
              d="m402.001 424.743v47.257c0 4.418-3.582 8-8 8s-8-3.582-8-8v-47.257c0-36.794-29.775-66.572-66.573-66.571-17.411 0-33.208-8.87-42.258-23.728-2.299-3.773-1.103-8.695 2.67-10.994 3.772-2.3 8.695-1.103 10.994 2.67 6.123 10.051 16.812 16.051 28.594 16.051 45.637 0 82.573 36.93 82.573 82.572zm-133.47-61.948-28.53 22.087-48.508-37.555c10.471-8.411 17.242-20.645 18.339-34.54 9.573 2.818 19.697 4.337 30.17 4.337 59 0 107-48 107-107 0-.622.014-56.012-.026-56.632-.272-4.328-3.881-7.493-7.974-7.493-1.37 0-11.227 1.95-20.876-3.855-15.048-9.053-15.125-28.897-15.124-29.096.039-6.5-7.311-10.336-12.622-6.579-32.952 23.327-71.536 39.145-113.433 45.01-4.375.613-7.426 4.656-6.813 9.032.56 4 3.986 6.892 7.913 6.892 1.26 0 27.2-3.175 56.687-13.885 18.998-6.9 37.201-15.904 54.268-26.833 5.897 22.126 22.434 34.435 42.001 35.546v47.893c0 50.178-40.822 91-91 91s-91-40.822-91-91v-56.124c0-4.418-3.582-8-8-8s-8 3.582-8 8v56.125c0 42.542 24.958 79.362 61 96.595v2.11c0 18.441-14.944 33.341-33.427 33.341-10.121 0-20.093 1.831-29.526 5.437l-5.165-4.111c-40.531-32.259-48.122-89.207-20.481-130.698 11.78-17.683 18.599-38.833 18.599-61.462v-43.333c0-50.731 41.271-92.004 92-92.004h48c50.729 0 92 41.271 92 92v43.333c0 22.011 6.401 43.221 18.511 61.336 22.148 33.131 22.104 76.614-.781 109.822-2.507 3.638-1.591 8.62 2.047 11.127 3.638 2.506 8.619 1.59 11.126-2.048 26.641-38.655 26.672-89.254.909-127.793-10.345-15.475-15.813-33.609-15.813-52.444v-43.333c0-59.551-48.449-108-108-108h-48c-59.551 0-108 48.451-108 108.004v43.329c0 18.78-5.503 36.967-15.916 52.597-32.255 48.422-23.114 114.278 23.327 151.671-22.814 14.966-37.411 40.382-37.411 69.142v47.257c0 4.418 3.582 8 8 8s8-3.582 8-8v-47.257c0-36.795 29.775-66.572 66.573-66.571 5.302 0 10.54-.841 15.563-2.498l58.966 45.651c2.884 2.232 6.912 2.232 9.795 0l33.427-25.879c3.494-2.705 4.133-7.729 1.428-11.223-2.704-3.492-7.728-4.133-11.223-1.428z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <dt class="font-semibold text-gray-900 mb-1 text-2xl">
              {{ $t('marketing_services.how_we_do.step_2_header') }}
            </dt>
            <dd class="leading-relaxed font-normal text-xl text-gray-500">
              {{ $t('marketing_services.how_we_do.step_2_description') }}
            </dd>
          </div>
        </div>
      </div>
      <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-12 h-12"
              viewBox="0 0 84 84">
              <path
                d="M45,68a1,1,0,0,1-.819-.426L37.229,57.65H22.2A10.215,10.215,0,0,1,12,47.446V32.2A10.215,10.215,0,0,1,22.2,22H67.8A10.215,10.215,0,0,1,78,32.2V47.446a10.215,10.215,0,0,1-10.2,10.2H52.771l-6.952,9.924A1,1,0,0,1,45,68ZM22.2,24A8.214,8.214,0,0,0,14,32.2V47.446a8.214,8.214,0,0,0,8.2,8.2H37.75a1,1,0,0,1,.819.426L45,65.257l6.431-9.181a1,1,0,0,1,.819-.426H67.8a8.214,8.214,0,0,0,8.2-8.2V32.2A8.214,8.214,0,0,0,67.8,24Z"></path>
              <path
                d="M29.024,45.134a1,1,0,0,1-.587-.191L24.9,42.375,21.37,44.943a1,1,0,0,1-1.539-1.118l1.35-4.154L17.647,37.1a1,1,0,0,1,.588-1.809H22.6l1.349-4.153a1,1,0,0,1,1.9,0L27.2,35.3h4.367a1,1,0,0,1,.588,1.809l-3.533,2.567,1.35,4.154a1,1,0,0,1-.952,1.309ZM24.9,40.14a1,1,0,0,1,.588.191l1.631,1.185L26.5,39.6a1,1,0,0,1,.363-1.119L28.493,37.3H26.478a1,1,0,0,1-.952-.691L24.9,34.687,24.28,36.6a1,1,0,0,1-.951.691H21.313l1.631,1.185a1,1,0,0,1,.364,1.119l-.623,1.917,1.63-1.185A1,1,0,0,1,24.9,40.14Z"></path>
              <path
                d="M49.121,45.134a1,1,0,0,1-.588-.191L45,42.375l-3.533,2.568a1,1,0,0,1-1.539-1.118l1.349-4.154L37.744,37.1a1,1,0,0,1,.588-1.809H42.7l1.35-4.153a1,1,0,0,1,1.9,0L47.3,35.3h4.367a1,1,0,0,1,.588,1.809l-3.533,2.567,1.349,4.154a1,1,0,0,1-.951,1.309ZM45,40.14a1,1,0,0,1,.588.191l1.631,1.185L46.6,39.6a1,1,0,0,1,.363-1.119L48.59,37.3H46.574a1,1,0,0,1-.951-.691L45,34.687,44.377,36.6a1,1,0,0,1-.951.691H41.41l1.631,1.185A1,1,0,0,1,43.4,39.6l-.623,1.917,1.631-1.185A1,1,0,0,1,45,40.14Z"></path>
              <path
                d="M69.218,45.134a1,1,0,0,1-.588-.191L65.1,42.375l-3.534,2.568a1,1,0,0,1-1.539-1.118l1.35-4.154L57.841,37.1a1,1,0,0,1,.588-1.809H62.8l1.35-4.153a1,1,0,0,1,1.9,0L67.4,35.3h4.368a1,1,0,0,1,.588,1.809l-3.534,2.567,1.35,4.154a1,1,0,0,1-.951,1.309ZM65.1,40.14a1,1,0,0,1,.588.191l1.63,1.185L66.692,39.6a1,1,0,0,1,.364-1.119L68.687,37.3H66.671a1,1,0,0,1-.951-.691L65.1,34.687,64.474,36.6a1,1,0,0,1-.952.691H61.507l1.631,1.185A1,1,0,0,1,63.5,39.6l-.623,1.917,1.631-1.185A1,1,0,0,1,65.1,40.14Z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <dt class="font-semibold text-gray-900 mb-1 text-2xl">
              {{ $t('marketing_services.how_we_do.step_3_header') }}
            </dt>
            <dd class="leading-relaxed font-normal text-xl text-gray-500">
              {{ $t('marketing_services.how_we_do.step_3_description') }}
            </dd>
          </div>
        </div>
      </div>
      <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-12 h-12"
              viewBox="0 0 400 400">
              <path
                d="M193.7,0C86.9,0,0,86.9,0,193.7s86.9,193.7,193.7,193.7s193.7-86.9,193.7-193.7S300.5,0,193.7,0z M193.7,367.4
      C97.9,367.4,20,289.5,20,193.7S97.9,20,193.7,20s173.7,77.9,173.7,173.7S289.5,367.4,193.7,367.4z"></path>
              <path
                d="M302.2,136.2l-29.4-29.5c-3.9-3.9-10.2-3.9-14.1,0l-93.8,93.8l-36-36c-3.9-3.9-10.2-3.9-14.1,0L85.4,194
      c-3.9,3.9-3.9,10.2,0,14.1l72.6,72.6c3.9,3.9,10.2,3.9,14.1,0l130.1-130.4C306.1,146.4,306.1,140.1,302.2,136.2z M164.8,259.5
      l-58.4-58.4l15.3-15.4l36,36c3.9,3.9,10.2,3.9,14.1,0l93.9-93.8l15.3,15.3L164.8,259.5z"></path>
            </svg>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <dt class="font-semibold text-gray-900 mb-1 text-2xl">
              {{ $t('marketing_services.how_we_do.step_4_header') }}</dt>
            <dd class="leading-relaxed font-normal text-xl text-gray-500">
              {{ $t('marketing_services.how_we_do.step_4_description') }}</dd>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SectionDigitalHowWeDo'
}
</script>
