import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from  '../views/Signup.vue'
import Signin from  '../views/Signin.vue'
import News from  '../views/News.vue'
import Events from  '../views/Events.vue'
import Members from  '../views/Members.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/members',
    name: 'members',
    component: Members
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
