<template>
  <v-app>
    <HomeNavbar />
    <v-divider />
    <HomePage />
  </v-app>
</template>

<script>
import HomeNavbar from "./components/HomeNavbar.vue";
import HomePage from "./components/HomePage.vue";

export default {
  name: 'App',
  components: {
    HomePage,
    HomeNavbar
}
}
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
