import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from './components/Home'
import Profile from './components/Profile'
import Auth from './components/Auth'
import Protected from './components/Protected'

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: Auth },
  { path: '/protected', component: Protected, meta: { requiresAuth: true} },
  { path: '/profile', component: Profile, meta: { requiresAuth: true} }
]

const router = new VueRouter({
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let user;
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then(data => {
      if (data && data.signInUserSession) {
        user = data;
      }
      next()
    }).catch((e) => {
      next({
        path: '/auth'
      });
    });
  }
  next()
})

export default router