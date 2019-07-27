import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Git from './components/text/git.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/git', component: Git },
    
  ]
})
