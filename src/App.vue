<template>
  <v-app id="app">
    <HomeNavbar />
    <router-view></router-view>
  </v-app>
</template>

<script>
import HomeNavbar from "./components/HomeNavbar.vue";


export default {
  name: "App",
  components: {
    HomeNavbar
}
}
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
