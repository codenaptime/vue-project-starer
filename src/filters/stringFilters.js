import Vue from 'vue';

Vue.filter('json', value => {
  if (value) {
    return JSON.stringify(value, null, 2);
  }
});
