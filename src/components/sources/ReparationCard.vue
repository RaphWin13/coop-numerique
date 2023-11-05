<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
      variant="outlined"
      :class="{ 'on-hover': isHovering }"
      class="mb-5 mx-1"
      style="cursor: pointer;"
      v-bind="props"
    >
        <v-card-title class="text-h4 font-weight-black">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
          Comment réparer
        </v-card-title>

        <v-card-subtitle class="text-h6 font-weight-black">
          Tutoriels de réparation
        </v-card-subtitle>

        <v-list>
          <v-list-item v-for="(point, index) in repareTuto" :key="index">
            <v-list-item-content>
              <v-list-item-title><a :href="point.link" target="_blank">{{ point.name }}</a></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-card-subtitle class="text-h6 font-weight-black pa-4">
          Points de réparation
        </v-card-subtitle>

        <v-list>
          <v-list-item v-for="(point, index) in reparationPoints" :key="index">
            <v-list-item-content>
              <v-list-item-title><a :href="point.link" target="_blank">{{ point.name }}</a></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <router-link
        to="/reparation" custom v-slot="{ navigate }">
          <v-btn 
            @click="navigate"
            color = "grey"
            class = "ma-4"
            style="cursor: pointer;"
          >
          Utiliser notre service de réparation
          </v-btn>
        </router-link>

        <v-card-subtitle class="text-h6 font-weight-black pa-4">
          Trouver des pièces de rechange
        </v-card-subtitle>

        <v-list>
          <v-list-item v-for="(point, index) in piecesFindingPoints" :key="index">
            <v-list-item-content>
              <v-list-item-title><a :href="point.link" target="_blank">{{ point.name }}</a></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        

        <router-link
        to="/boutique" custom v-slot="{ navigate }">
          <v-btn 
            @click="navigate"
            color = "grey"
            class = "ma-4"
            style="cursor: pointer;"
          >
          Notre boutique de pièces de rechange
          </v-btn>
        </router-link>

    </v-card>
</v-hover>
</template>

<script>
import { repareList, findPieces, repareTuto } from '@/data/sources/reparation'

  export default {
        name: "RecuperationCard",
        components: {},
        data() {
          return {
            reparationPoints: repareList,
            piecesFindingPoints: findPieces,
            repareTuto: repareTuto,
          };
        },
    };

</script>
