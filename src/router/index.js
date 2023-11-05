import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DiagnosticPage from "../components/diagnostic/DiagnosticPage.vue";
import ReparationPage from "@/components/ReparationPage.vue";
import EntretienPreventif from "@/components/entretien/EntretienPreventif.vue";
import BoutiquePage from "@/components/BoutiquePage.vue";
import DeviceQuestionnaire from "@/components/questionnaire/DeviceQuestionnaire.vue"

import { smartphoneRootQuestion } from "@/data/questions/smartphone";
import { computerRootQuestion } from "@/data/questions/ordinateur";
import { consoleRootQuestion } from "@/data/questions/consoleJeuVideo";
import {consoleVideoSources, computerSources, smartphoneSources} from '@/data/sources/sourcesQuestionnaires'

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/",
        name: "recycler"
    },
    {
        path: "/",
        name: "aPropos",
    },
    {
        path: "/",
        name: "contacts",
    },
    {
        path: "/boutique",
        name: "boutique",
        component: BoutiquePage
    },
    {
        path: "/entretien",
        name: "entretienPreventif",
        component: EntretienPreventif
    },
    {
        path: "/diagnostic",
        name: "diagnostic",
        component: DiagnosticPage
    },
    {
        path: "/reparation",
        name: "reparation",
        component: ReparationPage,
    },
    {
        path: "/diagnostic/questionnaire/telephone",
        name: "questionnaireTelephone",
        component: DeviceQuestionnaire,
        props: {
            deviceType: "Téléphones intelligents et tablettes",
            firstPart: smartphoneRootQuestion,
            sources: smartphoneSources
        }
    },
    {
        path: "/diagnostic/questionnaire/ordinateur",
        name: "questionnaireOrdinateur",
        component: DeviceQuestionnaire,
        props: {
            deviceType: "Ordinateurs",
            firstPart: computerRootQuestion,
            sources: computerSources
        }
    },
    {
        path: "/diagnostic/questionnaire/console",
        name: "questionnaireConsole",
        component: DeviceQuestionnaire,
        props: {
            deviceType: "Consoles de jeu",
            firstPart: consoleRootQuestion,
            sources: consoleVideoSources
        }
    }
] 


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
