<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
        variant="flat"
        :class="{ 'on-hover': isHovering }"
        class="mb-5 mx-1"
        width="60%"
        v-bind="props"
    >
        <v-card-title class="text-h4 font-weight-black">
          Notre équipe de réparateurs
        </v-card-title>

        <v-card-text class="text-h6 font-weight-medium pa-2">
          L'équipe de réparation reçoit une formation sur la réparation de divers appareils électroniques.
          La formation par les pairs est un élément clé de notre programme.

        </v-card-text>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-row>
                <v-col cols="4" v-for="reparator in reparators" :key="reparator.name">
                  <v-list-item>
                    <a href="https://www.flaticon.com/fr/icones-gratuites/la-personne">
                      <img v-bind:src="require(`@/assets/team/${reparator.name}.png`)" 
                      width="200"/>
                    </a>
                    <v-list-item-title class="text-h5 font-weight-black ma-2 pa-2">{{ reparator.name }}</v-list-item-title>
                    <v-list-item-subtitle class="text-h6 pa-2">Spécialité: {{ reparator.speciality }}</v-list-item-subtitle>
                    <v-list-item-subtitle class="text-h6 pa-2" >{{ reparator.experience }} d'expérience</v-list-item-subtitle>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        
        <v-card-title class="text-h5 font-weight-black">
          Vous voulez vous joindre à notre équipe?
        </v-card-title>

        <v-card-text class="text-h6 ma-2">
          <p>Vous avez de l'expérience en réparation? Nous adorerions vous rencontrer!</p>
          <p>Vous souhaitez acquérir de l'expérience en réparation? Nous offrons les formations!</p>
        </v-card-text>

        <v-btn class="text-h5 font-weight-black" color="grey" height="100">
          Joignez-vous à notre équipe!
        </v-btn>
    </v-card>
</v-hover>
</template>

<script>
  export default {
        name: "ReparatorsCard",
        components: {},
        data() {
          return {
            reparators: [
              {
                name: "Jessy",
                speciality: "Réparation de téléphone",
                experience: "5 ans",
              },
              {
                name: "Sabrina",
                speciality: "Réparation de téléphone",
                experience: "3 ans",
              },
              {
                name: "Laurence",
                speciality: "Réparation d'ordinateurs",
                experience: "4 ans",
              },
              {
                name: "Raphaël",
                speciality: "Réparation de consoles de jeux vidéos",
                experience: "4 ans",
              },
              {
                name: "Félix",
                speciality: "Réparation d'ordinateurs",
                experience: "5 ans",
              },
              
            ]
          }
        },
      };
</script>
