import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home'
import My from 'components/my'
import Detail from 'components/detail'
import Publish from 'components/publish'
import Success from 'components/success'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/my',
    component: My
  }, {
    path: '/detail',
    component: Detail
  }, {
    path: '/publish',
    component: Publish
  }, {
    path: '/success',
    component: Success
  }]
})
