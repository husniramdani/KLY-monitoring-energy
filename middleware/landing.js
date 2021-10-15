export default function ({ app, store, route, redirect, }) {
  // set token to false on landing page
  app.$api.setToken(false);

  // get current role for redirection
  const userRole = app.$cookit.get('current-role')

  // redirect on login user
  if (userRole === "administrator") {
    return redirect('/administrator')
  } else if (userRole === "operator"){
    return redirect('/operator')
  }

}
