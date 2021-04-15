/**
 * @author  sparkHou
 * @date 2021-04-14 16:46
 * @Description:
 */

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
  {path: '/', component: () => import("../view/Home/Home.vue"), name: 'Home'},
  {path: '/user', component: () => import("../view/User.vue"), name: 'User'},
  {path: '/provider', component: () => import("../view/Provider.vue"), name: 'provider'},
]

const route = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
route.beforeEach((to, from, next) => {
  console.log(to, from, next)
  next()
})
export default route
