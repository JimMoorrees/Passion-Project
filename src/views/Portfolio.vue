<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <!-- tag met navigation toevoegen om de content in te laden -->
    <Navigation />
    <div class="container">
      <!-- text interpolation zorgt ervoor dat je dmv variabelen text kan toevoegen-->
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
      message: "Reactive strings, yay!", //deze text komt in het {{ message }} tag te staan.
    };
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
</style>