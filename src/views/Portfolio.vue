<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>

    <Navigation />
  <div class="bg-container">

    <div class="pf-container">
      <div class="info"></div>
      <div class="info big-title">All Projects</div>
      <div class="info"></div>
      <div class="info"></div>
      <div class="info"></div>
      <div class="project row1"></div>
      <div class="project row" v-for="project in projects"> <!-- for loop, voor elke ingevulde rij in mijn array zal er een project row worden aangemaakt, dit gebruik ik om automatisch projecten aan te maken op mijn website zonder dat ik lappen html code hoeft te typen -->
        <a :href=project.imagelink><div class="project-slot" :class="project.classname" :data-content=project.imagetext><img :src="project.imglink" class='proj-img' v-if="project.imglink"></div></a> <!-- de if zorgt ervoor dat de link alleen wordt opgehaald als deze ook daadwerkelijk gevuld is in de "imglink" js variabele-->
        <div class="project-description">
          <div class="proj-title">{{project.boventitle}}</div>
          <div class="proj-maintitle">{{project.title}}</div>
          </div>
      </div>

<!-- dit is de html tekst die ik voorheen had om dezelfde aantal projecten te tonen, het verschil is gigantisch (ik laat dit hier ook staan als voorbeeld/herinnering)-->

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
    projects: 
    [
      //hier vul ik alle korte informatie in die ik wil laten zien over mijn projecten, in dit geval: titels en een afbeelding
      { boventitle: 'Internship project',     title: 'Torrevieja website',      imglink: require('../../src/assets/torrevieja.png'), imagetext: "Torrevieja.nl", imagelink: "google.com"}, //moet gebruik maken van require() om de images op te halen anders worden ze niet gevonden
      { boventitle: 'School project',         title: 'Southpark Intro',         imglink: require('../../src/assets/southpark.png'), imagetext: "Bezoek Southpark", imagelink: "google.com"}, 
      { boventitle: 'Stakeholder project',    title: 'Happy Idiots',            imglink: require('../../src/assets/happyidiots.png'), imagetext: "Happy Idiots", imagelink: "google.com"},
      { boventitle: 'School project',         title: 'Semester 2 Portfolio',    imglink: require('../../src/assets/sem2porto.png'), imagetext: "Check Portfolio", imagelink: "google.com"},
      { }, //lege rij omdat dit een spacer is
      { boventitle: 'School project',         title: 'Memory Game',             imglink: require('../../src/assets/memory.png'), imagetext: "Speel Memory", imagelink: "google.com"},
      { boventitle: 'School project',         title: 'Spiderman Game',          imglink: require('../../src/assets/spiderman.png'), imagetext: "Bekijk spiderman", imagelink: "google.com"},
      { boventitle: '',                       title: "",                        imglink: ""},
      { boventitle: '',                       title: "",                        imglink: ""},
      
    ]
  }
}
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */


.big-title
{
  font-size: 30px;
  color: white;
  font-weight: bold;
  padding-top: 20%;
  padding-left: 10px;
}

.pf-container
{
  background-color: #161516;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 6% 20% 20% 20% 20%;
  grid-template-rows: 12% auto auto;
  grid-column-gap: 40px;

}
.project-slot
{
  position: relative;
  margin-top: 15%;
  // border: solid 1px #FF4234;
  max-width: 100%;
  height: 22vh;
}

.project-slot img
{
  vertical-align: top;
}


.project-slot:after
{
  content: '\A';
  position: absolute;
  width: 100%; height:100%;
  top:0; left:0;
  background:rgba(0,0,0,0.6);
  opacity: 0;
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  content: attr(data-content);
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  line-height: 6;
  cursor: pointer;
}

.project-slot:hover:after
{
  opacity: 1;
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