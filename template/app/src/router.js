import Vue from 'vue';
import VueRouter from 'vue-router';

import Page1 from './pages/Page1';

Vue.use(VueRouter);

var routes = [{
  path: '/p1',
  name: "Page1",
  component: Page1
}, {
  path: '*', redirect: '/p1'
}];

var router = new VueRouter({
  routes
});

export default router;
