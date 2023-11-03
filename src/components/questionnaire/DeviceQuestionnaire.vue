<template>
  <div v-for="(part, index) in parts" :key="part.id">
    <QuestionnairePart v-bind:part="part" v-bind:partPosition="index" v-bind:reactToAnswer="reactToAnswer"></QuestionnairePart>
  </div>
</template>

<script setup>
import QuestionnairePart from "./QuestionnairePart.vue";
import { toRefs, reactive } from "vue";

const props = defineProps(["firstPart"]);
const { firstPart } = toRefs(props);
let parts = reactive([firstPart.value]);

const reactToAnswer = (e, partPosition, selectedAnswer) => {
  const partToAdd = parts[partPosition].answers[selectedAnswer].followUp;
  console.log(partToAdd);
  if (partToAdd != undefined) {
    parts.splice(partPosition + 1, Infinity, partToAdd)
  }
  console.log(parts.length);
};
</script>

<style></style>
