<template>
    <v-window>
        <v-window-item
            v-for="device in devices"
            :key="device"
        >
            <v-card>
                <v-card-title>{{ device.type }}</v-card-title>
                <DeviceQuestionnaire v-bind:firstPart="rootQuestion"></DeviceQuestionnaire>
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>
import DeviceQuestionnaire from "../questionnaire/DeviceQuestionnaire.vue";
import smartphoneRootQuestion from "src/data/questions/smartphone";

    export default {
        name: "DeviceType",
        components: {
            DeviceQuestionnaire
        },
        data() {
            return {
                devices: [
                    {"type": "Ordinateur"},
                    {"type": "Téléphone et Tablettes"},
                    {"type": "Consoles de jeu"},
                    {"type": "Périphériques externes"}
                    
                ],
                rootQuestion: smartphoneRootQuestion
            }
        }
    }

</script>