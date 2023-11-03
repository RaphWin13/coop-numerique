<template>
    <v-window>
        <v-window-item
            v-for="device in devices"
            :key="device"
        >
            <v-card>
                <v-card-title>{{ device.type }}</v-card-title>
            </v-card>
        </v-window-item>
    </v-window>
</template>

<script>

    export default {
        name: "DeviceType",
        data() {
            return {
                devices: [
                    {"type": "Ordinateur"},
                    {"type": "Téléphone et Tablettes"},
                    {"type": "Consoles de jeu"},
                    {"type": "Périphériques externes"}
                    
                ]
            }
        }
    }

</script>