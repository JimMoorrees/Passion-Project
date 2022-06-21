<template>
  <div>
    <Navigation />
    <div class="bg-container">
      <div class="about-container">
        <div class="spacer"></div>
        <div class="main-about">
          <div class="top-area">
            <div class="top-space"></div>
            <div class="top-stuff">CONTACT PAGE
              <div class="abouttext">My name is Jim Moorrees and i love to design and make websites. Are you in need of a website and want me to help you? feel free to contact me!</div>
            </div>
            <div></div>
          </div>
          <div class="middle-bar">
            <div class="space"></div>
            <div class="left">GET IN<br/>TOUCH<br/>WITH ME<br/><font-awesome-icon class="soci" style="color: #232123" icon="fa-brands fa-instagram" />
                                                                <font-awesome-icon class="soci" style="color: #5865F2" icon="fa-brands fa-discord" />
                                                                <font-awesome-icon class="soci" style="color: #0e76a8" icon="fa-brands fa-linkedin" />
                                                                <font-awesome-icon class="soci" style="color: #009AE4" icon="fa-brands fa-battle-net" /></div>
            <div class="mid">Need a website?
              <div class="mid-text">If you need a website and would like me to help with that, feel free to contact me!</div>
            </div>
            <div class="right">
              <div class="right-box">Contact opnemen?
                <div class="right-text">Are you looking for a website, and do you want to hire me? go to the<router-link class="link kleur" :to="'/Contact'"> contact page</router-link> and feel free to send me a message, together we will see what i can do for you!</div>
              </div>
            </div>
          </div>
          <div class="bottom-bar">2022 © Jim Moorrees</div>
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
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Passion+One&display=swap');


.big-title
{
  font-size: 30px;
  color: white;
  font-weight: bold;
  padding-top: 20%;
  padding-left: 10px;
}

.about-container
{
  background-color: #161516;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2% auto;
}

.bg-container
{
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: absolute;
}
.middle-bar
{
  position: relative;
  bottom: 0px;
  height: 100%;
  width: 100%;
  background-color: #FF4234;
  display: grid;
  grid-template-columns: 10% 20% 25% 45%;
}
.main-about
{
  display: grid;
  grid-template-rows: 68% 27% 5%;
}
.left
{
  font-size: 35px;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-top: 7.5%;
  margin-left: 20%;
  font-family: 'Passion One', cursive;
  letter-spacing: 3px;
}
.mid
{
  font-size: 20px;
  color: #232123;
  text-align: left;
  padding-top: 10%;
  letter-spacing: 1px;
  font-weight: bold;
}
.soci
{
  font-size: 25px;
  padding: 25px 10px 0px 2px;
  filter: drop-shadow(1px 1px 1px black);
  transition-duration: 0.3s;
}
.soci:hover
{
  color: white !important;
  cursor: pointer;
}
.mid-text
{
  font-size: 15px;
  font-weight: normal;
  padding-top: 15px;
}
.right-box
{
  width: 80%;
  background-color: #232123;
  margin: auto;
  margin-top: 3%;
  height: 15vh;
  color: white;
  padding: 15px 20px 0px 20px;
  font-weight: bold;
}
.right-text
{
  font-weight: normal;
  padding-top: 12px;
}
a
{
  text-decoration: none;
  color: #FF4234 !important;
  font-weight: bold;
}
.top-area
{
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../../src/assets/bgabt.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100%;
  display: grid;
  grid-template-columns: 60% 35% 5%;
}
.top-stuff
{
  color: white;
  font-family: 'Passion One', cursive;
  font-size: 70px;
  letter-spacing: 5px;
  font-weight: bold;
  padding-top: 25%;
}
.abouttext
{
  letter-spacing: normal;
  font-weight: normal;
  font-size: 22px;
  padding-top: 2%;
}
.bottom-bar
{
  background-color: black;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 2.5;
  font-size: 15px;
}
</style>