import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';

Vue.use(Router);
const router = new Router({
  routes: [{
    path: '/',
    name: 'Hello Sidewalk',
    component: Home,
  }, ],
});

export default router;
