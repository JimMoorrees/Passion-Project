<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <!-- tag met navigation toevoegen om de content in te laden -->
    <Navigation />
    <div class="cv-container">
      <!-- text interpolation zorgt ervoor dat je dmv variabelen text kan toevoegen-->
      <div class="cv-sidebar">
        
      </div>
      {{ message }}
      <font-awesome-icon icon="fa-solid fa-house" />
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


.cv-container
{
  background-color: #161516;
  width: 96%;
  margin-left: 4%;
  height: 100vh;
}
.cv-sidebar
{
  width: 20%;
  height: 100vh;
  background-color: #161516;
  position: absolute;
  border-left: solid 1px #FF4234;
  top: 0%;
  right: 0;

}
</style>