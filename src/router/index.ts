/**
 * @author  sparkHou
 * @date 2021-04-14 16:46
 * @Description:
 */

import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {path: '/', component: () => import("../view/Home.vue"), name: 'Home'},
    {path: '/user', component: () => import("../view/User.vue"), name: 'User'},
]

const route = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default route
