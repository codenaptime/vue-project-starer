// import dependencies
import Vue from 'vue';
import {
  Plugin
} from 'vue-fragment';
import router from './router';
import App from './App.vue';

// import filters
import './filters/dateFilters.js';
import './filters/stringFilters.js';

Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  el: '#app', // this is the id of the div in index.html
  router,
  components: {
    App,
  },
  template: '<App/>',
});
