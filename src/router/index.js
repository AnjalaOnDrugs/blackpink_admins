import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/SignUp'
import dashboard from '../views/dashboard'
import canvas from '../views/canvas'

Vue.use(VueRouter)

const routes = [
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path:'/dashboard',
    name:"dashboard",
    component: dashboard
  },{
    path:'/canvas',
    name:"canvas",
    component: canvas
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
