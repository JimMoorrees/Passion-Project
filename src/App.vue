<template>
<head>
  <link src="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
</head>
  <router-view></router-view>
</template>

<style lang="scss">
//Hier alles toevoegen dat op ALLE paginas van toepassing is, voorbeeld: lettertype poppins toevoegen en toepassen.
@import "@/assets/normalize.scss";
#app {
  @font-face 
  {
    font-family: 'Poppins', sans-serif;
    src: local("Poppins"),
    url(./fonts/Poppins/Poppins-Regular.ttf) format("truetype");
  }
font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 1192px;
  margin: auto;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
