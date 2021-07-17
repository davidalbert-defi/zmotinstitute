<template>
  <div class="app-footer bg-primary py-6 text-white">
    <div class="container mx-auto px-2 lg:px-4">
      <div class="row flex flex-wrap -mx-2 overflow-hidden">
        <div class="my-2 px-2 lg:w-1/3 overflow-hidden w-full">
          <img
            v-bind="footerLogo"
            :src="require('~/assets/img/zmot-logo.png').src"
            :srcset="require('~/assets/img/zmot-logo.png').srcSet"
            :blank-src="require('~/assets/img/zmot-logo.png').placeholder"
            class="footer-new-holder-right-holder__brand footer-logo"
            alt="ZMOT Institite White Logo in an organge backgroud"
          >
          <p class="mt-8 text-white font-normal text-lg lg:mr-24">
            {{ $t('footer.text') }}
          </p>
        </div>
        <div class="my-2 px-2 lg:w-2/3 overflow-hidden w-full">
          <div class="row flex flex-wrap -mx-2 overflow-hidden mt-3">
            <div class="my-2 px-2 lg:w-1/3 overflow-hidden w-full">
              <h5 class="text-2xl text-white font-semibold uppercase tracking-wider">
                {{ $t('footer.services.text') }}
              </h5>
              <ul >
                <li class="text-xl py-2">
                  <nuxt-link :to="localePath('digital-marketing-services')">
                    {{ $t('homepage.services.service_1_header') }}
                  </nuxt-link>
                </li>
                <li class="text-xl py-2">
                  <nuxt-link :to="localePath('keynote-speakers')">
                    {{ $t('homepage.services.service_2_header') }}
                  </nuxt-link>
                </li>
                <li class="text-xl py-2">
                  <nuxt-link :to="localePath('digital-marketing-courses')">
                    {{ $t('homepage.services.service_3_header') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="my-2 px-2 lg:w-1/3 overflow-hidden w-full">
              <h5 class="text-2xl text-white font-semibold uppercase tracking-wider">
                {{ $t('footer.knowledge.text') }}
              </h5>
              <ul>
                <li class="text-xl py-2">
                  <nuxt-link :to="localePath($t('navs.blog.link'))">
                    {{ $t('footer.blog') }}
                  </nuxt-link>
                </li>
                <li class="text-xl py-2">
                  <a href="/#newsletter">
                    {{ $t('footer.newsletter') }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="my-2 px-2 lg:w-1/3 overflow-hidden w-full">
              <h5 class="text-xl text-white font-semibold uppercase tracking-wider">
                {{ $t('footer.legal.text') }}
              </h5>
              <ul>
                <li class="py-2">
                  <nuxt-link :to="localePath('privacy')">
                    {{ $t('footer.privacy_policy.text') }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="my-2 px-2 lg:w-1/6 overflow-hidden w-full">
          <div class="social-links flex mt-3">
            <a
              href="https://www.linkedin.com/company/zmot-institute"
              class="flex items-center justify-center text-white mx-2 w-8 h-8 text-2xl rounded"
              target="_blank"
              rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/ZMOT-Institute-110524633996597"
              class="flex items-center justify-center text-white mx-2 w-8 h-8 text-2xl rounded"
              target="_blank"
              rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    footerLogo: { blank: false, width: 300, class: 'm-2' }
  })
}
</script>

<style scoped lang="scss">
  .app-footer {
      border-top: 1px solid #EAEAEA;
      padding: 25px 0;
      ul {
          list-style: none;
      }
      .container {
          margin: 0 20px;
          max-width: calc(100% - 40px);
          .row {
              ul {
                  li {
                    margin-top: 5px;
                    font-size: 1rem;
                    font-weight: 400;
                  }
                  a {
                      color: white;
                  }
              }
              p {
                  margin-top: 2rem;
                  color: white;
              }
              .social-links {
                  display: flex;
                  a {
                      color: white;
                      margin: 0 0.5rem;
                      width: 2rem;
                      height: 2rem;
                      font-size: 1.5rem;
                      border-radius: 5px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                  }
              }
          }
      }
  }

  @media (max-width: 992px) {
      .footer-logo {
          width: 90%;
          max-width: 300px;
      }
  }
</style>
