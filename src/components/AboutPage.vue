<template>
  <v-card elevation="0">
  <v-card-title  class="text-h3 d-flex justify-space-around mt-10 font-weight-bold">COOP RécupAtek</v-card-title>
  <div class="d-flex flex-column align-center mt-8">
    <v-card class="mb-5" variant="flat" width="60%" elevation="0">
      <v-card-text class="text-md-h6 text-justify">
        RécupAtek c’est une coopérative visant la valorisation des appareils électroniques en offrant des services de récupération, de réparation, de redistribution et d’accompagnement. 
        Les membres bénéficient de l’accès aux services de réparations et aux ateliers pour la réparation autonome (formations préalables). 
        Les services de formations, de dépôt d’appareils électroniques désuets/inutilisés au centre de récupération et d’achat d’appareils revalorisés sont quant-à-eux offert à tous! 
      <v-card class="mb-5" variant="flat" elevation="0">
        <v-card-title class="text-h4 mt-10 pa-0 font-weight-bold">
          Notre mission
        </v-card-title>
        <v-card-subtitle class="text-h6 text-center font-weight-black py-8">
          Revaloriser plutôt que jeter, tout en redonnant à la communauté!
        </v-card-subtitle>
        <v-card-text class="text-body-1 mt-2 pa-0">
          <p class="text-h6 font-weight-black">Revalorisation</p>
          <p class="text-h6 font-weight-black">Éducation</p>
          <p class="text-h6 font-weight-black">Communauté</p>
          <p class="text-h6 font-weight-black">Usage préventif</p>
          <p class="text-h6 font-weight-black">Protection des données</p>
          <p class="pa-2 mt-7">Nous sommes fiers de contribuer à notre communauté en favorisant l’accès à l’emploi, en collaboration avec l’organisme ÉquiTravail et en redistribuant des appareils 
          électroniques revalorisés avec le Réseau FADOQ - Québec et Chaudières-Appalaches.</p>
        </v-card-text>
      </v-card>
      
      </v-card-text>
    </v-card>

    <v-card class="mb-5 pa-2" variant="outlined" width="60%" elevation="0">
      <v-card-title class="text-h4 mt-2 font-weight-bold">
        Adhérez à la COOP
      </v-card-title>
      <v-card-text class="text-body-1 mt-2 px-10">
        <p class="pa-2 text-justify">Les abonnements annuels vous donnent accès aux ateliers, aux services de réparation et à un tarif réduit pour les formations. 
          Vous pouvez adhérer au tarif régulier, au tarif socio-participatif (contribution à notre volet communautaire) 
          ou encore au tarif réduit pour les citoyens à faible revenu (aucunes justifications nécessaires). </p>

        <p class="pa-2 font-weight-bold">Tarif socio-participatif: 25$</p>
        <p class="pa-2 font-weight-bold">Tarif régulier: 20$</p>
        <p class="pa-2 font-weight-bold">Tarif réduit: 10$</p>
      </v-card-text>
    </v-card>
  </div>
  </v-card>
</template>

<script>
  export default {
        name: "AboutPage",
      };
</script>
