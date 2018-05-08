// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Special from '@/components/Special'

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data(){
    return {
      tabList: ''
    }
  },
  mounted: function(){
    this.$nextTick(function(){
      this.$http.get('/static/tabData.json').then(function(response){
        this.tabList = response.data;
        console.log(this.tabList);
      })
    })
  }
})
