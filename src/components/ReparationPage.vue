<template>
  <v-app>
    <v-app-bar title="Co-op numérique"></v-app-bar>
    <v-main class="d-flex flex-column align-center">
      <AppointementCard></AppointementCard>
    </v-main>
  </v-app>
</template>

<script>
  import AppointementCard from './reparation/AppointementCard.vue';

  export default {
        name: "ReparationPage",
        components: {
          AppointementCard
        },
      };

</script>
