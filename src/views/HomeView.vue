<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="test"/>
  </div>
</template>

<style scoped lang="scss">

</style>


<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HelloWorld',
  components: {
    HelloWorld
  }
}
</script>
