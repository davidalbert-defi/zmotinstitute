export default ({ app }) => {
  /*
   ** Only run on client-side and only in production mode
   */
  app.router.onReady(() => {
    const f = document.getElementsByTagName('script')[0]
    const j = document.createElement('script')
    j.async = true
    j.src = 'https://www.google.com/recaptcha/api.js'
    f.parentNode.insertBefore(j, f)
    // (function (w, d, s, l, i) {
    //   w[l] = w[l] || []; w[l].push({
    //     'gtm.start':
    //       new Date().getTime(),
    //     event: 'gtm.js'
    //   }); const f = d.getElementsByTagName(s)[0]
    //   const j = d.createElement(s); const dl = l !== 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
    //     'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f)
    // })(window, document, 'script', 'dataLayer', 'GTM-W7VNK38')
  })
}
