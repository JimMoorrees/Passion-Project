<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <Navigation />
    <div class="container">
      <h1>Interpolation example</h1>
      <a target="_blank" href="https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation"
        >https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation</a
      >
      <!-- See the variable "message" in the data object below? We show it in the HTML here. It's called text interpolation -->
      <h2>This shows interpolation:</h2>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  data() {
    return {
      message: "Reactive strings, yay!",
    };
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
</style>