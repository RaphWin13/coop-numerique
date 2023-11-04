<template>
  <v-app>
    <v-app-bar title="Co-op numérique"></v-app-bar>
    <v-main class="d-flex flex-column align-center">
      <AppointementCard></AppointementCard>
      <ReparatorsCard></ReparatorsCard>
    </v-main>
  </v-app>
</template>

<script>
  import AppointementCard from './reparation/AppointementCard.vue';
  import ReparatorsCard from './reparation/ReparatorsCard.vue';

  export default {
        name: "ReparationPage",
        components: {
          AppointementCard,
          ReparatorsCard,
        },
      };

</script>
