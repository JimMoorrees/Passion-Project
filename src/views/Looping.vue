<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <Navigation />
    <div class="container">
      <h1>Looping example</h1>
      <a target="_blank" href="https://vuejs.org/api/built-in-directives.html#v-for">https://vuejs.org/api/built-in-directives.html#v-for</a>
      <div class="item-holder">
        <!-- (item,index) is a common way to give the items within the array an index right away. Because every v-for needs a :key, we can use that index for it. The :key is de unique identifier; so kind of like an ID! -->
        <!-- We have made an array of elements in the data() object below. We put some body text and extra in it. By using dots (remember the API lesson?) we can access them in our HTML. -->
        <div v-for="(pizza, index) in pizzas" :key="index" class="item">
          <h4>{{ pizza.body }}</h4>
          <p>{{ pizza.extra }}</p>
        </div>
      </div>
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
      message: "HTML will change when changing this in data",
      pizzas: [
        {
          id: 1,
          body: "Veggy Supreme",
          extra: "Nice one",
        },
        {
          id: 2,
          body: "Vegan Pepperoni",
          extra: "Also nice",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
.item-holder {
  display: flex;
  justify-content: center;
}
.item-holder .item {
  border: 2px solid #252525;
  padding: 24px;
  margin: 0 12px;
}
</style>