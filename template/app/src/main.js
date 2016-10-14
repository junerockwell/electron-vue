import Vue from 'vue'
import App from './App'

import Electron from 'vue-electron'
import Resource from 'vue-resource'

import router from './router'

Vue.use(Electron)
{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
{{/isEnabled}}

Vue.config.debug = true

/* eslint-disable no-new */
//{{#if_eq vueVersion '2.x'}}
new Vue({
  router,
  ...App
}).$mount('#app')

//{{/if_eq}}

