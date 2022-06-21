<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>

    <Navigation />
  <div class="bg-container">

    <div class="pf-container">
      <div class="project row1"></div>
      <div class="project row" v-for="item in items">
        <div class="project-slot"><img :src="item.imglink" class='proj-img'></div>
        <div class="project-description">
          <div class="proj-title">{{item.boventitle}}</div>
          <div class="proj-maintitle">{{item.title}}</div>
          </div>
      </div>

      <!-- <div class="project row3">        
        <div class="project-slot"></div>
        <div class="project-description">
          <div class="proj-title">School project</div>
          <div class="proj-maintitle">Memory Game</div>
        </div>
        </div>

      <div class="project row4">
        <div class="project-slot"><img class="proj-img" src="../../src/assets/happyidiots.png"></div>
        <div class="project-description">
          <div class="proj-title">Stakeholder project</div>
          <div class="proj-maintitle">Happy Idiots</div>
        </div>
      </div>

      <div class="project row5">
        <div class="project-slot"></div>
        <div class="project-description">
          <div class="proj-title">School project</div>
          <div class="proj-maintitle">Blackjack</div>
        </div>
      </div>
      <div class="project row1"></div>
      <div class="project row2">
        <div class="project-slot"></div>
        <div class="project-description">
          <div class="proj-title">Internship project</div>
          <div class="proj-maintitle">Torrevieja website</div>
        </div>
      </div>
      <div class="project row3">
        <div class="project-slot"></div>
        <div class="project-description">
          <div class="proj-title">Internship project</div>
          <div class="proj-maintitle">Frietje on Tour</div>
        </div>
      </div>
      <div class="project row4">
        <div class="project-slot"><img class="proj-img" src="../../src/assets/spiderman.png"></div>
        <div class="project-description">
          <div class="proj-title">School project</div>
          <div class="proj-maintitle">Spiderman game</div>
        </div>
      </div>
      <div class="project row5">
        <div class="project-slot"></div>
        <div class="project-description">
          <div class="proj-title">School project</div>
          <div class="proj-maintitle">Semester 2 Portfolio</div>
        </div>
      </div> -->
    </div>
  </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
// Default theme
import '@splidejs/splide/css';

export default {
  components: {
    Navigation,
  },
  // counter: 1,
  // imgname1: 'southpark',
  // link: "<img class='proj-img' src=''../../src/assets/"+imgname+counter+".png'>",
  data() {
  return {
    items: 
    [
      { boventitle: 'School project',  title: "Southpark Intro", imglink: require('../../src/assets/southpark.png')}, //moet gebruik maken van require() om de images op te halen anders worden ze niet gevonden
      { message: 'Bar' },
      { message: 'Bar' },
      { message: 'Bar' },
      { message: '' }, //lege message omdat dit een spacer is
      { message: 'Bar' },
      { message: 'Bar' },
      { message: 'Bar' },
      { message: 'Bar' },
      
    ]
  }
}
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */

.pf-container
{
  background-color: #161516;
  width: 100%;
  height: 85vh;
  margin-top: 7.5vh;
  display: grid;
  grid-template-columns: 6% 20% 20% 20% 20%;
  grid-template-rows: 50% 50%;
  grid-column-gap: 40px;

}
.project-slot
{
  margin-top: 15%;
  // border: solid 1px #FF4234;
  max-width: 100%;
  height: 22vh;
}
.project-description
{
  color: white;
  max-width: 100%;
  height: 5vh;
  padding-top: 20px;
  padding-left: 5px;
}

.bg-container
{
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
}
.proj-title
{
  color: #FF4234;
  font-size: 15px;
  font-weight: bold;
}
.proj-maintitle
{
    font-size: 25px;
    padding-top: 5px;
}
.proj-img
{
  width: 100%;
  height: 100%;
  background-size: cover;
}
</style>