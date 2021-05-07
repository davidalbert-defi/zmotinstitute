<template>
  <section class="container max-w-screen-2xl mx-auto">
  <div class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('keynote_speakers.our_keynotes.headline') }}
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ $t('keynote_speakers.our_keynotes.sub_headline') }}
        </p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-for="lecture in lectures" :key="lecture.title" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="lecture.imageUrl" alt="" data-not-lazy />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <a :href="lecture.href" class="block mt-2">
                <p class="text-xl font-semibold text-gray-900">
                  {{ $t(`keynote_speakers.our_keynotes.${lecture.title}`) }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ $t('keynote_speakers.our_keynotes.keynote_1_description') }}
                </p>
              </a>
            </div>
            <!-- <div class="mt-6 flex items-center">
             <p class="text-xl font-semibold text-gray-900">
                  {{ lecture.lectureTime }}
                </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-12 bg-blue-100 w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
      <div class="flex-1">
        <p class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{{ $t('keynote_speakers.our_keynotes.custom_keynote_header') }}</p>
        <p class="max-w-2xl text-xl text-indigo-600">
            {{ $t('keynote_speakers.our_keynotes.custom_keynote_description') }}
        </p>
      </div>
      <div class="md:px-2 mt-3 md:mt-0 items-center flex">
        <button class="bg-blue-500 text-white font-bold px-4 py-2 text-sm uppercase rounded tracking-wider focus:outline-none hover:bg-blue-600">{{ $t('keynote_speakers.our_keynotes.custom_keynote_cta') }}</button>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
import img1 from '~/assets/img/lectures-section/influencing-consumer-behaviour-2-talk-zmot-institute.jpg'
import img2 from '~/assets/img/lectures-section/zmot-digital-marketing-graal-talk-zmot-institute.jpg'
import img3 from '~/assets/img/lectures-section/hacks-consumer-behaviour-talk-zmot-institute.jpg'
export default {
  name: 'SectionKeynoteOurKeynotes',
  data () {
    return {
      lectures: [
        {
          title: 'keynote_1_header',
          href: '#LecturesLeadForm',
          category: { name: 'Article', href: '#' },
          description:
            'keynote_1_description',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          imageUrl: img1,
          lectureTime: '45 min'
        },
        {
          title: 'keynote_2_header',
          href: '#LecturesLeadForm',
          category: { name: 'Video', href: '#' },
          description:
            'keynote_2_description',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl: img2,
          lectureTime: '45 min'
        },
        {
          title: 'keynote_3_header',
          href: '#LecturesLeadForm',
          category: { name: 'Case Study', href: '#' },
          description:
            'keynote_3_description',
          date: 'Feb 12, 2020',
          datetime: '2020-02-12',
          imageUrl: img3,
          lectureTime: '45 min'
        }
      ]
    }
  }
}
</script>
