<template>
  <div style="padding: 1em;">
    <b style="margin: 1em">{{ part.text }}</b>
  </div>
  <div>
    <v-radio-group style="display: inline-block" :inline=true>
      <div v-for="(answer, index) in part.answers" :key="index">
        <v-radio @input="reactToAnswer($event, partPosition, index)" :label="answer.text" :value="index"></v-radio>
      </div>
    </v-radio-group>
  </div>

  <RecuperationCard v-if="part.isRecuperation"></RecuperationCard>
  <ReparationCard v-if="part.isReparation"></ReparationCard>

</template>

<script setup>
defineProps(["part", "partPosition", "reactToAnswer"]);
</script>

<script>
import RecuperationCard from "../sources/RecuperationCard.vue";
import ReparationCard from "../sources/ReparationCard.vue";

export default {
        name: "QuestionnairePart",
        components: {
          RecuperationCard,
          ReparationCard,
        },
    };
    
</script>
<style></style>
