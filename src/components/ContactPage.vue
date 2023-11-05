<template>
<v-title  class="text-h1 d-flex justify-space-around mt-10">COOP RécupAtek</v-title>
  <div class="d-flex flex-column align-center mt-8">
    <v-card class="mb-5" variant="flat" width="60%" elevation="0">
      <v-card-title class = "text-h4 mt-2">
        Contactez-nous
      </v-card-title>
      <v-card-text class="ma-2"> 
        <p class="text-h6">1000 ave Watts, Québec, QC, G1K 2P6</p>
        <p class="text-h6">(418) 986-3636 – info@recupatek.qc.ca</p>
      </v-card-text>
    </v-card>

    <v-card class="mb-5" variant="outlined" width="60%" elevation="10">
      <v-card-title class = "text-h4 mt-2">
        Heures d'ouverture
      </v-card-title>
      <v-card-subtitle class="text-h6 font-weight-black pa-4">
        Services de réparation:
      </v-card-subtitle>
      <v-card-text class="text-body-1"> 
        Tous les jours de 9 h 00 à 17 h 00 
      </v-card-text>

      <v-card-subtitle class="text-h6 font-weight-black pa-4">
        Ateliers:
      </v-card-subtitle>
      <v-card-text class="text-body-1">
        Tous les jours de 9 h 00 à 19h30
      </v-card-text>

      <v-card-subtitle class="text-h6 font-weight-black pa-4">
        Recyclerie:
      </v-card-subtitle>
      <v-card-text class="text-body-1">
        Lundi au vendredi: 9 h 00 à 18 h 30
        Samedi: 10 h 30 à 16 h 30
      </v-card-text>

      <v-card-subtitle class="text-h6 font-weight-black pa-4">
        Formations thématiques:
      </v-card-subtitle>
      <v-card-text class="text-h6 font-weight-black">
        Consultez notre infolettre!
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
  export default {
        name: "AboutPage",
      };
</script>
