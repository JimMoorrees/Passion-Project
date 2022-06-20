<template>
  <section class="navigation" :class="isOpened ? 'open' : '' "> 
  <!-- wanneer de div 'togglebtn' aangeklikt word, dan word de value van isOpened aangepast (true / false), 
  als de value true is dan word de class "open" toegevoegd aan navigation, als deze false is wordt de class weer weggehaald.  -->
    <div class="container">
      <div class="nav-logo">
        <img  class="img-logo" src="../../src/assets/logo-white.png">
      </div>
      <div class="togglebtn" :class="isOpened ? 'bx-menu-alt-right' : 'bx-menu'" id="btn" @click="isOpened = !isOpened"><font-awesome-icon icon="fa-solid fa-sliders" /></div>
      <nav>
        <!-- active-class="(class naam)" zorgt ervoor dat de link die actief is deze class krijgt, op deze manier kan ik in mijn css in dit geval "active" zo stylen dat alleen de link die op het moment actief is deze styling krijgt-->
        <div class="nav-link"><router-link active-class="active" :to="'/'"><font-awesome-icon class="icons" icon="fa-solid fa-house" fixed-width /><span v-if="isOpened" class="space">home</span></router-link></div><!-- v-if zorgt ervoor dat de span waar het aan vast zit alleen wordt getoont als 'isOpened'  true is. -->
        <div class="nav-link"><router-link active-class="active" :to="'/About'"><font-awesome-icon class="icons" icon="fa-solid fa-user" fixed-width /><span v-if="isOpened" class="space">about</span></router-link></div>
        <div class="nav-link"><router-link active-class="active" :to="'/Cv'"><font-awesome-icon class="icons" icon="fa-solid fa-list" fixed-width /><span v-if="isOpened" class="space">CV</span></router-link></div>
        <div class="nav-link"><router-link active-class="active" :to="'/Portfolio'"><font-awesome-icon class="icons" icon="fa-solid fa-toolbox" fixed-width /><span v-if="isOpened" class="space">portfolio</span></router-link></div>
        <!-- <div class="nav-link"><router-link :to="'/Services'">Services</router-link></div> -->
        <div class="nav-link"><router-link active-class="active" :to="'/Contact'"><font-awesome-icon class="icons" icon="fa-solid fa-comments" fixed-width /><span v-if="isOpened" class="space">Contact</span></router-link></div>

      </nav>
    </div>
  </section>
</template>

<script>
export default 
{
    name: "Navigation",

  data() 
  {
    return {
      isOpened: false
    }
  }
}





</script>

<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
.togglebtn
{
  height: 27px;
  background-color: #FF4234;
  vertical-align: middle;
  text-align: center;
  color: white;
  cursor: pointer;
  font-size: 22px;
}
section.navigation {
  width: 75px;
  height: 100vh;
  background-color: #232123;
  position: absolute;
  top: 0%;
  border-right: solid 0.5px rgb(88, 88, 88);
  transition-duration: 0.3s;
  z-index: 10000000;
}
.open
{
  width: 15% !important;
}

nav {
  padding: 16px 0;
}

nav a {
  color: white;
  text-decoration: none;
  // border-bottom: 1px solid transparent;
  // margin-right: 24px;
  width: 100%;
  padding-top: 5px;
}

.active
{
  color: #FF4234;
  border-color: #444344;
}

.nav-link
{
  padding: 15px 0px 15px 0px;
  text-align: left;
  font-size: 22px;
  overflow: hidden;
  white-space: nowrap;
}

nav a:hover {
  border-color: white;
  transition-duration: 0.2s;
  background-color: #FF4234;
  color: black;
}

.nav-logo
{
  height: 200px;
  text-align: center;
}
.img-logo
{
  width: 100%;
  height: auto;
}
.icons
{
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 15px;
  padding-top: 15px;
}
.space
{
  padding-left: 30px;
  padding-right: 57%;
}
</style>