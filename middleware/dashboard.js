export default function ({ app, store, route, redirect, }) {
  // get cookies access-token
  const cookieReq = app.$cookit.get('access-token')
  // set token
  if (cookieReq) {
    app.$api.setToken(cookieReq, 'Bearer');
  }

   // get current role for redirection
   const userRole = app.$cookit.get('current-role')

   // redirect on login user
  //  if (userRole === "administrator") {
  //    return redirect('/administrator')
  //  } else if (userRole === "operator"){
  //    return redirect('/operator')
  //   } else {
  //    return redirect('/')
  //  }

}
