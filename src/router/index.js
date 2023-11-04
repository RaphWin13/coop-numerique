import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ReparationPage from "@/components/ReparationPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/rdv",
        name: "Reparation",
        component: ReparationPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
