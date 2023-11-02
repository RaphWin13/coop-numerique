<script setup>
import Part from '@/util/questionnaire/Part';
import Answer from '@/util/questionnaire/Answer';
import QuestionnairePart from './questionnaire/QuestionnairePart.vue';

const question = new Part("Ceci est une question", [new Answer("réponse 1"), new Answer("réponse 2")])
</script>

<template>
  <v-app>
    <v-app-bar></v-app-bar>
    <div>Hello</div>
    <QuestionnairePart v-bind:part=question></QuestionnairePart>
  </v-app>
</template>
