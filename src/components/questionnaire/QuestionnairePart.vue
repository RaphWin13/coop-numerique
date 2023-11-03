<template>
  <div style="padding: 1em;">
    <b style="margin: 1em">{{ part.text }}</b>
  </div>
  <div>
    <v-radio-group id="v-radio-group" style="display: inline-block" :inline=true>
      <div v-for="(answer, index) in part.answers" :key="index" id="div">
        <v-radio @change="reactToAnswer($event, partPosition, index)" :label="answer.text" :value="index" id="v-radio"></v-radio>
      </div>
    </v-radio-group>
  </div>
</template>

<script setup>
defineProps(["part", "partPosition", "reactToAnswer"]);
console.log("define props")
</script>

<style></style>
