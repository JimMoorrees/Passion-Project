<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <Navigation />
    <div class="container">
      <p style="font-weight: 700">Try changing the true statement to false in the code and you'll see that the other statement becomes visible.</p>
      <p v-if="showFirstParagraph">This text is shown when statement is true.</p>
      <p v-else>This text is shown when statement is false.</p>
      <hr />
      <h2>Two way data binding with v-model</h2>
      <input type="text" v-model="firstName" placeholder="Type here..." />
      <p>This is what we typed (woohoo, reactive!): {{ firstName }}</p>
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
      showFirstParagraph: true,
      firstName: "",
    };
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
</style>