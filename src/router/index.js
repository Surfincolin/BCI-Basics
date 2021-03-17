import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import(/* webpackChunkName: "resources" */ '../views/Resources.vue')
  },
  {
    path: '/review',
    name: 'DeviceReview',
    component: () => import(/* webpackChunkName: "review" */ '../views/DeviceReview.vue')
  },
  {
    path: '/bci',
    name: 'What is BCI',
    component: () => import(/* webpackChunkName: "bci" */ '../views/BCI.vue')
  },
  {
    path: '/eeg',
    name: 'What is EEG',
    component: () => import(/* webpackChunkName: "eeg" */ '../views/EEG.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
