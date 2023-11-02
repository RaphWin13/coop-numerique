<script setup>
import Part from '@/util/questionnaire/Part';
import Answer from '@/util/questionnaire/Answer';
// import QuestionnairePart from './questionnaire/QuestionnairePart.vue';
import DeviceQuestionnaire from './questionnaire/DeviceQuestionnaire.vue';

const autreQuestion1 = new Part("Ceci est la question suivant la réponse 1")
const autreQuestion2 = new Part("Ceci est la question suivant la réponse 2", [new Answer("raiponce 1", new Part("paf")), new Answer("raiponce 2", new Part("pouf"))])

const question = new Part("Ceci est une question", [new Answer("réponse 1", autreQuestion1), new Answer("réponse 2", autreQuestion2)])
</script>

<template>
  <v-app>
    <v-app-bar></v-app-bar>
    <div>Hello</div>
    <DeviceQuestionnaire v-bind:firstPart=question></DeviceQuestionnaire>
    <!-- <QuestionnairePart v-bind:part=question v-bind:reactToAnswer=reactToAnswer></QuestionnairePart> -->
  </v-app>
</template>
