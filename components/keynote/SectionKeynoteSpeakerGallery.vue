<template>
<!-- This example requires Tailwind CSS v2.0+ -->
  <section class="container max-w-screen-xl mx-auto py-8">
    <div class="relative pt-8 lg:pt-12 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto pb-12">
        <div class="text-center">
          <h2 class="text-center mb-8 text-4xl lg:text-5xl font-bold lg:mx-24">
            {{ $t('keynote_speakers.keynote_gallery.headline') }}
          </h2>
          <p class="text-center text-gray-500 text-xl lg:mx-32 font-normal mb-12">
            {{ $t('keynote_speakers.keynote_gallery.sub_headline') }}
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="(gallery, index) in galleries" :key="index+1" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div class="flex-shrink-0">
                <img class="h-48 w-full object-fill" :src="gallery.img_url" alt="" data-not-lazy />
                </div>
                <div class="flex-1 bg-white p-6 flex flex-col justify-between">
                <div class="flex-1">
                    <p v-if="gallery.tag_type == 1" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-semibold bg-green-100 text-green-500">
                      {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_tag`) }}
                    </p>
                    <p v-if="gallery.tag_type == 2" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-bold bg-purple-100 text-purple-500">
                      {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_tag`) }}
                    </p>
                    <p v-if="gallery.tag_type == 3" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-bold bg-blue-100 text-blue-500">
                      {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_tag`) }}
                    </p>
                    <p v-if="gallery.tag_type == 4" class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium font-bold bg-pink-100 text-pink-500">
                      {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_tag`) }}
                    </p>
                    <a :href="gallery.link" target="_blank" rel="noopener noreferrer">
                    <dt class="text-xl font-semibold text-gray-900 leading-tight">
                        {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_header`) }}
                    </dt>
                    <dd class="mt-3 text-lg font-normal text-gray-500 leading-normal">
                        {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_description`) }}
                    </dd>
                    </a>
                </div>
                    <div class="mt-6 flex items-center">
                        <div class="flex-shrink-0">
                        <a :href="gallery.social_link" target="_blank" rel="noopener noreferrer">
                            <span class="sr-only">{{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_speaker`) }}</span>
                            <img class="h-10 w-10 rounded-full" :src="gallery.thumb_url" alt="" data-not-lazy />
                        </a>
                        </div>
                        <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900">
                            <a :href="gallery.social_link" target="_blank" rel="noopener noreferrer">
                            {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_speaker`) }}
                            </a>
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                            <time :datetime="gallery.datetime">
                            {{ $t(`keynote_speakers.keynote_gallery.past_keynote_${index+1}_date`) }}
                            </time>
                            <!-- <span aria-hidden="true">
                            &middot;
                            </span> -->
                        </div>
                        </div>
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from '~/assets/img/events-gallery/inovativa_experience.png'
import img2 from '~/assets/img/events-gallery/live_hostinger_comporamento_consumidor.jpg'
import img3 from '~/assets/img/events-gallery/semana_planejamento_comercial_plumes.jpg'
import img4 from '~/assets/img/events-gallery/palestra_semana_academica_ciencias_contabeis.png'
import img5 from '~/assets/img/events-gallery/palestra_fejesc_se_joga_na_rede.png'
import img6 from '~/assets/img/events-gallery/content-hackers-content-marketing-week.png'
import img7 from '~/assets/img/events-gallery/bootcamp_regional_inovativa_floripa.png'
import img8 from '~/assets/img/events-gallery/palestra_mundo_de_gigantes_banner.jpeg'
import img9 from '~/assets/img/events-gallery/palestra_zmot_23_dazideias_floripa.png'
import img10 from '~/assets/img/events-gallery/palestra_semana_cience_tecnologia_inovacao_caltic_2017.png'
import img11 from '~/assets/img/events-gallery/palestra_zmot_faculdade_estacio.png'
import img12 from '~/assets/img/events-gallery/palestra_acate_jornalista_empreender_internet.png'
import thumb from '~/assets/img/others/perfil_rodrigo_wiethorn_40_40.png'
export default {
  name: 'SectionKeynoteSpeakerGallery',
  data () {
    return {
      galleries: [
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_1_tag_type'),
          datetime: '2018-10-16',
          link: 'https://www.inovativabrasil.com.br/inovativa-realiza-bootcamp-em-10-cidades-brasileiras/',
          img_url: img1,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_2_tag_type'),
          datetime: '2020-10-22',
          link: 'https://www.youtube.com/watch?v=4Uf7bGXUOnE',
          img_url: img2,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_3_tag_type'),
          datetime: '2020-09-16',
          link: 'http://materiais.ploomes.com/semana-de-planejamento-comercial-2021#:~:text=Semana%20de%20Planejamento%20Comercial%202021%2D%2014%20a%2018%20de%20setembro',
          img_url: img3,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_4_tag_type'),
          datetime: '2019-09-19',
          link: '#',
          img_url: img4,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_5_tag_type'),
          datetime: '2018-04-13',
          link: 'https://www.instagram.com/p/ByTQodyBLlc/',
          img_url: img5,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_6_tag_type'),
          datetime: '2018-10-16',
          link: '#',
          img_url: img6,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_7_tag_type'),
          datetime: '2018-09-21',
          link: 'https://www.inovativabrasil.com.br/inovativa-realiza-bootcamp-em-10-cidades-brasileiras/',
          img_url: img7,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_8_tag_type'),
          datetime: '2018-08-10',
          link: 'https://acontecendoaqui.com.br/comunicacao/sebraelab-sc-apresenta-mundo-de-gigantes-3rs-da-presenca-digital',
          img_url: img8,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_9_tag_type'),
          datetime: '2018-06-05',
          link: 'https://dazideia.com/23o-encontro-dazideia-florianopolis/?afg29_page_id=3#afg-29',
          img_url: img9,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_10_tag_type'),
          datetime: '2017-11-09',
          link: '#',
          img_url: img10,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_11_tag_type'),
          datetime: '2017-09-06',
          link: '#',
          img_url: img11,
          thumb_url: thumb
        },
        {
          social_link: 'https://br.linkedin.com/in/rodrigo-wiethorn-2567b26b',
          tag_type: this.$t('keynote_speakers.keynote_gallery.past_keynote_12_tag_type'),
          datetime: '2017-09-04',
          link: 'https://www.hostinger.com.br/tutoriais/hostinger-promove-palestra-para-jornalistas/',
          img_url: img12,
          thumb_url: thumb
        }
      ]
    }
  }
}
</script>
