// import store from "@/store";
export default function ({ $axios, app, $store }, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // change node_env to dev when ur on dev mode
  const baseURL = "https://energimonitoring.lifolial.com"

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
  api.interceptors.request.use(
    response => {
      app.store.commit("user/setIsLoading", true);
      return response;
    },
    error => Promise.reject(error)
  )
  api.interceptors.response.use(
    response => {
      console.log(response)
      app.store.commit("user/setIsLoading", false);
      return response
    },
    async error => {
      app.store.commit("user/setIsLoading", false);
      Promise.reject(error)
    }
  )

  inject('api', api)
}
