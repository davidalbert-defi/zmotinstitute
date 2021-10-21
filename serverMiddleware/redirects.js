const redirects = [
  { from: '/zmot-audit', to: '/digital-marketing-services' },
  { from: '/lecture-events', to: '/keynote-speakers' },
  { from: '/online-courses', to: '/digital-marketing-courses' },
  { from: '/blog/customer-experience-jornada-de-compra', to: '/blog/jornada-de-compra' }
]

module.exports = function (req, res, next) {
  // const host = req.headers.host;
  // const fullUrl = req.url;
  const url = req.url.split('?')[0]
  let urlParams = null
  if (req.url.includes('?')) {
    urlParams = '?' + req.url.split('?')[1]
  }

  const redirect = redirects.find(r => r.from === url)
  if (redirect) {
    let newLocation
    if (urlParams) {
      newLocation = redirect.to + urlParams
    } else {
      newLocation = redirect.to
    }
    res.writeHead(301, {
      Location: newLocation
    })
    res.end()
  } else {
    next()
  }
}
