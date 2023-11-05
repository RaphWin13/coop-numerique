<template>
    <v-card class="mx-15 mt-15 pb-5" height="100%" elevation="0">
        <div class="d-flex justify-space-between mt-10 mb-10 px-3">
            <ServiceCard 
                v-for="service in services"
                :key=service
                :typeService=service.type
                :iconTitle=service.icon
                :question=service.text
                :path=service.route
            />
        </div>
        <v-card-text class="d-flex">
            <v-card class="mr-1 px-5 pb-5" width="auto" elevation="0">
                <v-card-title class="pl-2 text-h5 font-weight-bold">
                    Notre mission
                </v-card-title>
                <p class="pl-2 text-h6">Revaloriser plutôt que jeter, tout en redonnant à la communauté!</p>
                <div class="d-flex flex-column">
                    <div class="text-center mt-7">
                        <v-hover
                            v-slot="{ isHovering, props }"
                        >
                        <div class="d-flex mb-3">
                            <v-card variant="outlined" class="mx-2" width="20%" style="cursor: pointer;" v-bind="props">
                                <v-card-title class="font-weight-bold">R</v-card-title>
                            </v-card>
                            <v-card v-if="isHovering" elevation="0">
                                <v-card-title>Revalorisation</v-card-title>
                            </v-card>
                        </div>
                        </v-hover>
                        <v-hover
                            v-slot="{ isHovering, props }"
                        >
                        <div class="d-flex  mb-3">
                            <v-card variant="outlined" class="mx-2" width="20%" style="cursor: pointer;" v-bind="props">
                                <v-card-title class="font-weight-bold">E</v-card-title>
                            </v-card>
                            <v-card v-if="isHovering" elevation="0">
                                <v-card-title>Éducation</v-card-title>
                            </v-card>
                        </div>
                        </v-hover>
                        <v-hover
                            v-slot="{ isHovering, props }"
                        >
                        <div class="d-flex mb-3">
                            <v-card variant="outlined" class="mx-2" width="20%" style="cursor: pointer;" v-bind="props">
                                <v-card-title class="font-weight-bold">C</v-card-title>
                            </v-card>
                            <v-card v-if="isHovering" elevation="0">
                                <v-card-title>Communauté</v-card-title>
                            </v-card>
                        </div>
                        </v-hover>
                        <v-hover
                            v-slot="{ isHovering, props }"
                        >
                        <div class="d-flex mb-3">
                            <v-card variant="outlined" class="mx-2" width="20%" style="cursor: pointer;" v-bind="props">
                                <v-card-title class="font-weight-bold">U</v-card-title>
                            </v-card>
                            <v-card v-if="isHovering" elevation="0">
                                <v-card-title>Usage préventif</v-card-title>
                            </v-card>
                        </div>
                        </v-hover>
                        <v-hover
                            v-slot="{ isHovering, props }"
                        >
                        <div class="d-flex mb-3">
                            <v-card variant="outlined" class="mx-2" width="20%" style="cursor: pointer;" v-bind="props">
                                <v-card-title class="font-weight-bold">P</v-card-title>
                            </v-card>
                            <v-card v-if="isHovering" elevation="0">
                                <v-card-title>Protection des données</v-card-title>
                            </v-card>
                        </div>
                        </v-hover>
                    </div>
                </div>
            </v-card>

        </v-card-text>
    </v-card>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

    export default {
        name: "HomePage",
        components: {
            ServiceCard
        },
        data() {
            return {
                services: [
                    {"type": "Diagnostic", route: "diagnostic", "text": "Vous souhaitez diagnostiquer un appareil?", "icon": "mdi-magnify"},
                    {"type": "Prendre un RDV",  route: "reparation", "text": "vous souhaitez prendre rendez-vous avec l'un de nos spécialistes?", "icon": "mdi-calendar"},
                    {"type": "Boutique",  route: "boutique", "text": "Achat de matériel électronique remis à neuf", "icon": "mdi-shopping"},
                    {"type": "Entretien préventif",  route: "entretienPreventif", "text": "Trucs et astuces pour l'entretien préventif de vos appareils électronique", "icon": "mdi-tools"},
                    {"type": "Plus d'informations",  route: "diagnostic", "text": "En apprendre plus sur les problèmes récurrents des appareils électroniques modernes et comment les réparer soi-même", "icon": "mdi-laptop"},
                ],
                missionCoopText: "La mission de la coop est de promouvoir une utilisation responsable des appareils électroniques."
            }
        }
    }

</script>
