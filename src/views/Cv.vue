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
    <div class="cvimg">
      <img class="cvimg1" src="../../src/assets/background-PP-web.png">
    </div>
    <div class="cv beschrijving">
      <div class="infotext">Full name</div>
      <div class="personal-info">{{fullname}}</div>
      <div class="infotext">Email </div>
      <div class="personal-info">{{email}}</div>
      <div class="infotext">Telefoonnummer </div>
      <div class="personal-info">{{phonenumber}}</div>
      <div class="infotext">Born </div>
      <div class="personal-info">{{born}}</div>
      <div class="infotext">Nationaliteit </div>
      <div class="personal-info">{{nationality}}</div>
      
    </div>
    <div class="cv socials">
      <div class="social-left social instagram"><font-awesome-icon class="socialicon" icon="fa-brands fa-instagram" /></div>
      <div class="social discord"><font-awesome-icon class="socialicon" icon="fa-brands fa-discord" /></div>
      <div class="social-right social linkedin"><font-awesome-icon class="socialicon" icon="fa-brands fa-linkedin" /></div>
    </div>
  </div>
    <div class="cv-container">
      <div class="spacer"></div>
      <div class="main-stuff">
        <div class="opleidingen">
          <div class="main-titels opleiding-titel">Opleidingen</div>
          <div class="leeg"></div>
          <div class="jaartal">2011 - 2015</div>
          <div class="opleiding">Basisberoepsgerichte leerweg<br/>techniek</div>
          <div class="jaartal">2015 - 2016</div>
          <div class="opleiding">Kaderberoepsgerichte leerweg<br/>techniek</div>
          <div class="jaartal">2016 - 2019</div>
          <div class="opleiding">Applicatie- en <br/>Mediaontwikkelaar niv. 4</div>
          <div class="jaartal">2020 - Heden</div>
          <div class="opleiding">Fontys ICT & Media Design HBO<br/>Associate Degree</div>
        </div>
        <div class="cursussen">
          <div class="main-titels cursusses-titel">Cursussen</div>
          <div class="leeg"></div>
          <div class="jaartal">2017</div>
          <div class="opleiding">Microsoft Office Specialist<br/>Excel 2016</div>
          <div class="jaartal">2017</div>
          <div class="opleiding">Microsoft Office Specialist<br/>Word 2016</div>
          <div class="jaartal">2017</div>
          <div class="opleiding">Microsoft Office Specialist<br/>Powerpoint 2016</div>
          <div class="jaartal">2017</div>
          <div class="opleiding">Networking Essentials<br/>Cisco</div>
        </div>
        <div class="stages">
          <div class="main-titels stages-titel">Stages</div>
          <div class="leeg"></div>
          <div class="jaartal">2019</div>
          <div class="opleiding">J. Ottenheijm Webdesign<br/>Eindstage</div>
        </div>
        <div class="werkervaring">
          <div class="main-titels werkervaring-titel">Werkervaring</div>
          <div class="leeg"></div>
          <div class="jaartal">2013 - Heden</div>
          <div class="opleiding">Van der Hulst Rozenkwekerij<br/></div>
        </div>
      </div>
      <div class="cvspace"></div>

        <div class="skill-section">
          <div class="skill-title">Skills</div>
          <div class="skills">
            
            <div class="skill-text">{{skill1}}</div>
            <div class="skillcontainer">
              <div class="skill html">{{percentage1}}%</div>
            </div>

            <div class="skill-text">{{skill2}}</div>
            <div class="skillcontainer">
              <div class="skill css">{{percentage2}}%</div>
            </div>

            <div class="skill-text">{{skill3}}</div>
            <div class="skillcontainer">
              <div class="skill js">{{percentage3}}%</div>
            </div>

            <div class="skill-text">{{skill4}}</div>
            <div class="skillcontainer">
              <div class="skill php">{{percentage4}}%</div>
            </div>

          </div>
          <div class="skill-title">Other</div>
          <div class="skills">
            
            <div class="skill-text wp">{{skill5}}</div>
            <div class="skillcontainer">
              <div class="skill wordpress">{{percentage5}}%</div>
            </div>

            <div class="skill-text">{{skill6}}</div>
            <div class="skillcontainer">
              <div class="skill vue">{{percentage6}}%</div>
            </div>

            <div class="skill-text">{{skill7}}</div>
            <div class="skillcontainer">
              <div class="skill sql">{{percentage7}}%</div>
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
      fullname: "Jim Johannus Eduardus Antonius",
      born: "3 November 1997",
      email: "jimapestaartje@msn.com",
      phonenumber: "06 10776905",
      nationality: "Nederlands",

      //SKILLS          percentages
      skill1: "Html",   percentage1: "80",
      skill2: "Css",    percentage2: "70",
      skill3: "JS",     percentage3: "50",
      skill4: "Php",    percentage4: "35",

      //Extra skills
      skill5: "Wordpress", percentage5: "55",
      skill6: "Vue.js",    percentage6: "15",
      skill7: "Sql",       percentage7: "45",
      skill8: "",          percentage8: "",
      skill9: "",          percentage9: "",
    };
  },
  
};
</script>
<style lang="scss" scoped>
/* Using "scoped" means that this CSS is only applied within this file */
.opleiding
{
  color: white;
}

.jaartal
{
  color: white;
  padding-left: 25px;
  color: #FF4234;
  font-weight: bold;
}

.cursussen, .stages, .werkervaring
{
  display: grid;
  grid-template-columns: 35% 55%;
  grid-template-rows: 20% auto auto auto auto;
}
.opleidingen
{
  display: grid;
  grid-template-columns: 35% 55%;
  grid-template-rows: 20% auto auto auto auto;
}
.main-titels
{
  text-align: left;
  color: white;
  font-size: 22px;
  padding: 25px;
  margin-top: 0%;
  font-weight: bold;
}

.main-stuff
{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}
.cvimg
{
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}
.cvimg1
{
  background-size: contain;
  background-repeat: no-repeat;
  width: 80%;
  height: 100%;
}
.social-left
{
  text-align: right;
}
.social-right
{
  text-align: left;
}
.social
{
  font-size: 25px;
  position:relative;
  top: calc(50% - 21px);
}
.socialicon
{
  transition-duration: 0.3s;
}
.socialicon:hover
{
  color: #FF4234;
  cursor: pointer;
}
.socials
{
  display: grid;
  grid-template-columns: auto auto auto;
}

.beschrijving
{
  text-align: left !important;
  padding-left: 10%;
}
.infotext
{
  font-weight: bold;
  text-align: left;
  color: #FF4234;
}
.personal-info
{
  padding: 15px 0px 15px 0px;
  margin-bottom: 10px;
}
.wp
{
  font-size: 15px !important;
}
.skill-title
{
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 25px;
  margin-top: 7.5%;
  font-weight: bold;
}
.skillcontainer 
{
  width: 85%;
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
  row-gap: 30px;
  grid-template-rows: auto;
}
.skill {
  text-align: right;
  color: white;
  padding: 3%;

}
.html {width: 80%; background-color: #FF4234;}
.css  {width: 70%; background-color: #FF4234;}
.js {width: 50%; background-color: #FF4234;}
.php  {width: 35%; background-color: #FF4234;}
.wordpress {width: 55%; background-color: #FF4234;}
.vue  {width: 15%; background-color: #FF4234;}
.sql  {width: 45%; background-color: #FF4234;}

.cv-container
{
  background-color: #161516;
  width: 100%;
  height: 85vh;
  margin-top: 7.5vh;
  display: grid;
  grid-template-columns: 5% 53% 22% 20%;
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
  grid-template-rows: 10% 5% 5% 20% 50% 10%;

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
  font-size: 1vw;
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