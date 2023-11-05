<template>
  <v-app id="app">
    <HomeNavbar />
    <router-view></router-view>
    <div class="d-flex justify-end"> 
      <v-btn
        prepend-icon="mdi-chat"
        size="large"
        width="10%"
        class="d-flex ma-7"
      >
        Chat
      </v-btn>
    </div>
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
  color: #2c3e50;
}
</style>
