<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <!-- tag met navigation toevoegen om de content in te laden -->
    <Navigation />
    <div class="about-container">
      <!-- text interpolation zorgt ervoor dat je dmv variabelen text kan toevoegen-->
      This shows interpolation:
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
//navigatie pagina inladen
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

.about-container
{
  background-color: rgb(24, 24, 24);
  width: 80%;
  margin-left: 20%;
  height: 100vh;
}

</style>