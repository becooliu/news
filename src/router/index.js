import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Topic from '@/components/Topic'
import Special from '@/components/Special'
import Author from '@/components/Author'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Special',
      component: Special
    },
    {
      path: '/special',
      name: 'Special',
      component: Special
    },
    {
      path: '/topic',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/author',
      name: 'Author',
      component: Author
    }
    
  ]
})
