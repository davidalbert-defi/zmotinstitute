/*
export default ({ app }) => {
  /!*
   ** Only run on client-side and only in production mode
   *!/
  app.router.onReady(() => {
    const f = document.getElementsByTagName('script')[0]
    const j = document.createElement('script')
    j.async = true
    j.src = 'https://www.google.com/recaptcha/api.js'
    f.parentNode.insertBefore(j, f)
  })
}
*/
