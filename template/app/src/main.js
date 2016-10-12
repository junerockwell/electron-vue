import Vue from 'vue'
{{#isEnabled plugins 'vue-electron'}}
import Electron from 'vue-electron'
{{/isEnabled}}
{{#isEnabled plugins 'vue-resource'}}
import Resource from 'vue-resource'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}

import App from './App'
import router from './router'
{{/isEnabled}}

{{#isEnabled plugins 'vue-electron'}}
Vue.use(Electron)
{{/isEnabled}}
{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
{{/isEnabled}}
Vue.config.debug = true

{{#isEnabled plugins 'vue-router'}}
{{#if_eq vueVersion '2.x'}}
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
{{else}}
const router = new Router()

router.map(routes)
router.beforeEach(() => {
  window.scrollTo(0, 0)
})
router.redirect({
  '*': '/'
})

router.start(App, 'app')
{{/if_eq}}
{{else}}
import App from './App'

/* eslint-disable no-new */
{{#if_eq vueVersion '2.x'}}
new Vue({
  router,
  ...App
}).$mount('#app')
{{else}}
new Vue({
  el: 'body',
  components: { App }
})
{{/if_eq}}
{{/isEnabled}}
