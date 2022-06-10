

Vue.config.productionTip = false

// eslint-disable no-unsed-vars
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
// new Vue({
//   el:'#app',
// components:{
//   App,
// },
// template:'<App />'
// })

new Vue({
  el:'#app',
render:h=> h(App)
})