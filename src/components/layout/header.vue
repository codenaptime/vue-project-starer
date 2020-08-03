<template>
  <header class="flx">
    <ul class="flx">
      <li v-for="route in routes" :key="route.name" active-class="router-link-active">
        <router-link :to="route" :title="getTitle(route)" exact>{{ route.name }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import Router from '../../router';

export default {
  data() {
    return {};
  },
  computed: {
    routes() {
      return Router.options.routes;
    },
  },
  methods: {
    getTitle(link) {
      return `Go to ${link.name} page`;
    },
  },
};
</script>

<style scoped>
header {
  background-color: #fff;
  color: #333;
  margin: 0;
  padding: 15px;
  padding-left: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100vw;
  box-shadow: 0 0 10px 0 #dadada;
}
ul,
ul li {
  display: inline-block;
  margin: 0;
  padding: 0;
  color: #333;
}
ul {
  list-style: none;
  height: 30px;
}
ul li {
  padding: 0 15px;
  font-size: 130%;
}
.router-link-active {
  color: #999b9b;
}
.fas {
  font-size: 18px;
}
</style>
