<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <Navigation />
    <div class="main-container">
      <span class="helper"></span>
      <img src="../../src/assets/background-PP-web.png">
      
      <div class="grid"> <!-- dit grid heb ik gemaakt om de verschillende stroken van de afbeelding na te maken in code, op deze manier kan ik dan op een overzichtelijke manier de stroken gebruiken met coderen, in dit geval om een fill animatie te maken en de positie te behouden-->
        <div class="btn 1">
        
        </div>
        <div class="btn 2">
        
        </div>
        <div class="btn 3">
        
        </div>
        <div class="btn 4">
        
        </div>
        <div class="btn 5">
        
        </div>
        <div class="btn 6">
        
        </div>
        <div class="btn 7">
        
        </div>

        <router-link :to="'/About'" style="width: 100%; height: 70%; margin-top: 15vh;"><div class="btn about1 hover-anim">
          <div class="link about">
            About
          </div>
        </div></router-link>
        
        <router-link :to="'/Cv'" style="width: 100%; height: 64%; margin-top: 18vh;"><div class="btn cv1 hover-anim">
          <div class="link cv">
            Cv
          </div>
        </div></router-link>

        <router-link :to="'/Portfolio'" style=" width: 100%; height: 56.1%; margin-top: 22vh; margin-left: 0.2vw;"><div class="btn portfolio1 hover-anim">
          <div class="link portfolio">
            Portfolio
          </div>
        </div></router-link>

        <router-link :to="'/Contact'" style="width: 100%; height: 40%; margin-top: 30vh; margin-left: 0.2vw;"><div class="btn contact1 hover-anim">
         <div class="link contact">
            Contact
          </div>
        </div></router-link>

      </div>

    </div>
  </div>
</template>
<script>
// import Navigation from "@/components/Navigation.vue";
// export default {
//   components: {
//     Navigation,
//   },
//   name: "Home",
//   data() {
//     return {};
//   },6
// };
</script>

<style lang="scss" scoped>
h1 
{
  color: black;
}
a, a:link, a:visited {
  color: #FFFAFA;
  text-decoration: none;
  background-color: #141414;
}
.main-container
{
  background-color: #141414;
  width: 100vw;
  height: 100vh;
  // background: url("../../src/assets/blackwhite2.jpg");
  background-size: cover;
  text-align: center;
  position: absolute;
}
.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
.main-container img
{
  width: 80%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
}
.btn
{
  color: white;
  position: relative;
}
.link
{
  font-size: 1vw;
  text-align: center;
  width: 100%;
  position: absolute;
  text-decoration: none;
}
//hier background-color aangeven om de kleur van het paneel 'home' aan te passen.
.about1
{
  height: 100%;
}

//animatie voor de opvullende bars als je hoverd
.hover-anim
{
  background: linear-gradient(to bottom, #000 50%, #fff 50%);
  background-size: 100% 200%;
  background-position: top;
  transition: all .5s ease-out;
  color: white;
}
.hover-anim:hover
{
  background-position: bottom;
  color: #000;
  cursor: pointer;
}
//hier background-color aangeven om de kleur van het paneel 'about' aan te passen.
.cv1
{
  height: 100%;
}
//hier background-color aangeven om de kleur van het paneel 'portfolio' aan te passen.
.portfolio1
{
  height: 100%;
}
//hier background-color aangeven om de kleur van het paneel 'contact' aan te passen.
.contact1
{
  height: 100%;
}
.about
{
  bottom: 3vh;
}
.cv
{
  bottom: 3vh;
}
.portfolio
{
  bottom: 3vh;
}
.contact
{
  bottom: 3vh;
}

.grid
{
  position: absolute;
  top: 0px;
  display: grid;
  width: 68%;
  height: 100%;
  // grid-template-columns: 122px 122px 124px 123px 124px 124px 124px 125px 125px 124px 122px;
  grid-template-columns: 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5% 8.5%;
  column-gap: 0.63%;
  grid-template-rows: auto;
  left: 16%;

}
// .img-overlay
// {
//     background: url("../../src/assets/background-PP-web.png");
//     width: 80vw;
//     height: 80vh;
//     margin: 0 auto;
//     position: relative;
//     background-size: cover;
//     top: 25px;
// }
</style>