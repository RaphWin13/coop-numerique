<template>
  <v-card variant="outlined" class="mx-5 mt-5 px-6 py-4" elevation="0">
    <v-card-title>{{ deviceType }}</v-card-title>
    <v-divider />
    <div class="d-flex flex-column align-center mt-3" v-for="(part, index) in parts" :key="part.id">
      <QuestionnairePart v-bind:part="part" v-bind:partPosition="index" v-bind:reactToAnswer="reactToAnswer" ></QuestionnairePart>
    </div>
  </v-card>
  <v-footer class="text-center d-flex flex-column">
      <v-list>
        <v-list-item >
          <v-list-item-content>
            <p>Sources du questionnaire</p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(point, index) in sources" :key="index">
          <v-list-item-content>
            <v-list-item-title><a :href="point" target="_blank">{{ point }}</a></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </v-footer>
</template>

<script setup>
import QuestionnairePart from "./QuestionnairePart.vue";
import { toRefs, reactive } from "vue";

const props = defineProps(["firstPart", "deviceType", "sources"]);
const { firstPart, deviceType } = toRefs(props);
let parts = reactive([firstPart.value]);

const reactToAnswer = (e, partPosition, selectedAnswer) => {
  const partToAdd = parts[partPosition].answers[selectedAnswer].followUp;
  
  if (partToAdd != undefined) {
    parts.splice(partPosition + 1, Infinity, partToAdd);
  }
};
</script>

<style></style>
