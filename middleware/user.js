export default function ({ app, store, route, redirect, }) {
  // get cookies access-token
  const cookieReq = app.$cookit.get('access-token')
  // const cookieRes = app.$cookit.get('access-token', { fromRes: true })

  console.log("user", cookieReq)
  console.log("route", route)
  console.log("store", store.state.user)
  // set token
  if (cookieReq) {
    app.$api.setToken(cookieReq, 'Bearer');
    // return redirect('/administrator/daftar-admin')
  } else {

  }

}
