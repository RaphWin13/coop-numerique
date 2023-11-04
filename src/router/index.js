import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import DiagnosticPage from "../components/diagnostic/DiagnosticPage.vue";
import ReparationPage from "@/components/ReparationPage.vue";

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
        path: "/diagnostic",
        name: "diagnostic",
        component: DiagnosticPage
    },
    {
        path: "/reparation",
        name: "reparation",
        component: ReparationPage,
    },
] 


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
