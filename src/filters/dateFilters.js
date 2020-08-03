import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', value => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY');
  }
});
Vue.filter('formatDateLong', value => {
  if (value) {
    return moment(String(value)).format('dddd[,] MMMM Do[,] YYYY');
  }
});
Vue.filter('formatDateTime', value => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm a');
  }
});
