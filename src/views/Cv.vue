<template>
  <!-- ALWAYS wrap everything in 1 div. It is not allowed to work directly into <template> -->
  <div>
    <!-- tag met navigation toevoegen om de content in te laden -->
    <Navigation />
  <div class="bg-container">
  <div class="cv-sidebar">
    <div class="leeg"></div>
    <!-- text interpolation zorgt ervoor dat je dmv variabelen text kan toevoegen-->
    <div class="cv title">{{titel}}<span class="stylecolor">{{testachternaam}}</span></div>
    <div class="cv ondertitel"><span class="stylecolor">{{ondertitel}}</span>{{testkleur}}</div>
    <div class="cvimg"></div>
    <div class="cv beschrijving">{{cvBeschrijving}}</div>
    <div class="cv socials"></div>

  </div>
    <div class="cv-container">
      <div class="main-stuff"></div>
      <div class="cvspace"></div>

        <div class="skill-section">
          <div class="skill-title">Skills</div>
          <div class="skills">
            
            <div class="skill-text">Html</div>
            <div class="skillcontainer">
              <div class="skill html">90%</div>
            </div>

            <div class="skill-text">Css</div>
            <div class="skillcontainer">
              <div class="skill css">80%</div>
            </div>

            <div class="skill-text">JS</div>
            <div class="skillcontainer">
              <div class="skill js">80%</div>
            </div>

            <div class="skill-text">Php</div>
            <div class="skillcontainer">
              <div class="skill php">80%</div>
            </div>

          </div>
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
      message: "Reactive strings, yay!", //deze text komt in het {{ message }} tag te staan.
      titel: "Jim ",
      testachternaam: "Moorrees",
      ondertitel: "Front-end ",
      testkleur: "Web Developer",
      cvBeschrijving: "",

    };
  },
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */


.skill-title
{
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 25px;
}
.skillcontainer {
  width: 90%;
  background-color: #ddd;
}
.skill-text
{
  color: white;
  text-align: center;
  padding: 5px;
  font-size: 18px;
}
.skills
{
  display: grid;
  grid-template-columns: 30% 70%;
  margin-top: 25px;
  row-gap: 25%;
}
.skill {
  text-align: right;
  color: white;
  padding: 3%;

}
.html {width: 90%; background-color: #FF4234;}
.css  {width: 80%; background-color: #FF4234;}
.js {width: 50%; background-color: #FF4234;}
.php  {width: 35%; background-color: #FF4234;}

.cv-container
{
  background-color: #161516;
  width: 100%;
  height: 85vh;
  margin-top: 7.5vh;
  display: grid;
  grid-template-columns: 58% 22% 20%;
}
.cv-sidebar
{
  width: 22%;
  height: 93vh;
  background-color: #161516;
  background-size: cover;
  position: absolute;
  top: 3%;
  right: 20%;
  box-shadow: 0px 15px 30px 0px black;
  display: grid;
  grid-template-rows: 10% 5% 5% 20% 20% 40%;

}
.bg-container
{
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
}
.cv
{
  color: rgb(209, 209, 209);
  font-size: 1.1vw;
  text-align: center;
}
.title
{
  font-size: 2.2vw;
}
.ondertitel
{
  line-height: 2;
}
.stylecolor
{
  color: #FF4234;
}
</style>