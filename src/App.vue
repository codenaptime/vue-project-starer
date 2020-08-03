<template>
  <section id="main" class="flx-col">
    <nathanHeader />
    <nathanContent />
    <nathanFooter />
  </section>
</template>

<script>
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Content from './components/layout/content';

export default {
  components: {
    nathanHeader: Header,
    nathanFooter: Footer,
    nathanContent: Content,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style src="./assets/styles/site.css"></style>
