<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <Navigation />
    <div class="container">
      <h1>Events example</h1>
      <a target="_blank" href="https://vuejs.org/guide/essentials/event-handling.html">https://vuejs.org/guide/essentials/event-handling.html</a>
      <br />
      <button @click="openAlert">Click me!</button>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  methods: {
    openAlert() {
      alert('@click instead of "addEventListener". Less typing!');
    },
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
</style>