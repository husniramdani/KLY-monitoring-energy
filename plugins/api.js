export default function ({ $axios, app }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // change node_env to dev when ur on dev mode
  const baseURL = process.env.NODE_ENV === "production" ? process.env.BASE_URL : process.env.DEV_URL

  // set base url
  api.setBaseURL(baseURL)

  // get cookies access-token
  const cookieReq = app.$cookit.get('access-token')
  // const cookieRes = app.$cookit.get('access-token', { fromRes: true })

  // set token
  if (cookieReq) {
    api.setToken(cookieReq, 'Bearer')
  } else {

  }

  inject('api', api)
}
