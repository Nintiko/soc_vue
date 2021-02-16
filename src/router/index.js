import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../views/UserProfile.vue'
import AllUsers from '../views/AllUsersProfiles.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user/:id',
    component: UserProfile
  },{
    path :'/users',
    component: AllUsers
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
