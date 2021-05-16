<template>
  <section class="container max-w-screen-2xl mx-auto py-8" id="our-talks">
      <div class="relative lg:pt-12 lg:pb-28 lg:px-8">
        <div class="relative max-w-7xl mx-auto">
          <div class="text-center">
            <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
              {{ $t('keynote_speakers.our_keynotes.headline') }}
            </h2>
            <p class="text-center text-gray-500 text-xl lg:mx-32 font-normal mb-12">
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
                    <p class="text-xl font-semibold text-gray-900 leading-tight">
                      {{ $t(`keynote_speakers.our_keynotes.${lecture.title}`) }}
                    </p>
                    <p class="mt-3 text-lg font-normal text-gray-500 leading-normal">
                      {{ $t('keynote_speakers.our_keynotes.keynote_1_description') }}
                    </p>
                    <div class="rounded-md shadow mt-8">
                      <a :href="lecture.href" class="uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-shinny md:py-4 md:text-lg md:px-10">
                        {{ $t('keynote_speakers.hero.cta_1') }}
                      </a>
                    </div>
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
        <div class="max-w-4xl mx-auto mt-12 lg:mt-24 bg-indigo-100 w-full rounded-lg shadow-lg px-8 py-12 flex md:flex-row flex-col">
          <div class="flex-1">
            <p class="text-4xl tracking-tight font-black text-gray-900 sm:text-4xl">
              {{ $t('keynote_speakers.our_keynotes.custom_keynote_header') }}</p>
            <p class="max-w-2xl text-3xl text-indigo-600 font-extrabold">
                {{ $t('keynote_speakers.our_keynotes.custom_keynote_description') }}
            </p>
          </div>
          <div class="md:px-2 mt-8 md:mt-0 items-center flex">
            <a href="#contactform" class="bg-indigo-600 text-white font-bold px-4 py-2 text-base uppercase rounded tracking-wider focus:outline-none hover:bg-green-shinny ">{{ $t('keynote_speakers.our_keynotes.custom_keynote_cta') }}</a>
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
  name: 'SectionKeynoteSpeakerOurTalks',
  data () {
    return {
      lectures: [
        {
          title: 'keynote_1_header',
          href: '#contactform',
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
          href: '#contactform',
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
          href: '#contactform',
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
