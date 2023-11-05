<template>
    <v-card class="mt-10 ml-10 pt-5 d-flex flex-column align-center" elevation="0">
        <v-card-title class="mb-5">Quel est votre type d'appareil?</v-card-title>
        <DeviceType
            v-for="device in devices"
            :key="device"
            :deviceType=device.type
            :iconTitle=device.icon
            :text=device.text
            :path=device.path
        />
    </v-card>
</template>

<script>
import DeviceType from './DeviceType.vue';

    export default {
        name: "DiagnosticPage",
        components: {
            DeviceType
        },
        data() {
            return {
                devices: [
                    {
                        "type": "Ordinateur",
                        "path": "questionnaireOrdinateur",
                        "text": "Pour les ordinateurs de maisons et les portables", 
                        "icon": "mdi-laptop"
                        
                    },
                    {
                        "type": "Téléphone et Tablettes", 
                        "path": "questionnaireTelephone",
                        "text": "Pour les téléphones intelligents et les tablettes", 
                        "icon": "mdi-cellphone"
                    },
                    {
                        "type": "Consoles de jeu",
                        "path": "questionnaireConsole",
                        "text": "Pour les consoles de tout genre, soit PS4, PS5, Xbox One, Xbox Series S|X et Nintendo Switch",
                        "icon": "mdi-controller"
                    },
                    {
                        "type": "Périphériques externes",
                        "path": "",
                        "text": "Pour les claviers, souris, imprimantes et tout autre périphériques pour les ordinateurs", 
                        "icon": "mdi-keyboard"
                    }
                    
                ]
            }
        }
    }

</script>