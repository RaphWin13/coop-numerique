<template>
    <v-card class="mx-15 mt-10 pb-5" elevation="0">
        <v-card-title class="text-center">
            <p class="text-h3 font-weight-black">Coop-numérique</p>
        </v-card-title>
        <v-card-subtitle class="mb-10 text-center">Coop de l'Université Laval</v-card-subtitle>
        <v-row class="d-flex justify-center">
            <ServiceCard 
                v-for="service in services"
                :key=service
                :typeService=service.type
                :iconTitle=service.icon
                :question=service.text
                :path=service.route
            />
        </v-row>
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
                ]
            }
        }
    }

</script>
