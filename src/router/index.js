import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tem from '@/components/tem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWord',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'tem',
      component: tem
    }
  ]
})
