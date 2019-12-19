import bearer from '@websanova/vue-auth/drivers/auth/bearer'
import axios from '@websanova/vue-auth/drivers/http/axios.1.x'
import router from '@websanova/vue-auth/drivers/router/vue-router.2.x'
// Auth base configuration some of this options
// can be override in method calls
const apiUrl = 'http://localhost:8001/api/'
// console.log("TCL: apiUrl", process.env)

const config = {
  auth: bearer,
  http: axios,
  router: router,
  tokenDefaultName: 'laravel-vue-spa',
  tokenStore: ['localStorage'],
  rolesVar: 'id',
  // registerData: {url: apiUrl + 'auth/register', method: 'POST', redirect: '/'},
  loginData: {url: apiUrl + 'student/auth', method: 'POST', redirect: { name: 'dashboard' }, forbiddenRedirect: { name: 'dashboard' }, fetchUser: true},
  logoutData: {url: apiUrl + 'student/logout', method: 'POST', redirect: { name: 'home' }, forbiddenRedirect: { name: 'home' }, makeRequest: true},
  fetchData: {url: apiUrl + 'student/profile', method: 'GET', enabled: true},
  refreshData: {url: apiUrl + 'student/refresh', method: 'GET', enabled: true, interval: 30},
  authRedirect: {path: '/me'}
}

export default config
