<script setup>
import { smartphoneRootQuestion } from "../data/questions/smartphone";
import DeviceQuestionnaire from "./questionnaire/DeviceQuestionnaire.vue";

const rootQuestion = smartphoneRootQuestion;
</script>

<template>
  <v-app>
    <v-app-bar title="Co-op numérique"></v-app-bar>
    <v-main class="d-flex flex-column align-center">
      <DeviceQuestionnaire v-bind:firstPart="rootQuestion"></DeviceQuestionnaire>
    </v-main>
  </v-app>
</template>
