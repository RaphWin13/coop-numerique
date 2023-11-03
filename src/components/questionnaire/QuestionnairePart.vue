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
</template>

<script setup>
defineProps(["part", "partPosition", "reactToAnswer"]);
</script>

<style></style>
