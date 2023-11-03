<template>
    <v-toolbar
        color="white"
    >
        <img height="50" class="ma-5" :src="require('../assets/light-bulb.png')"/>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn
                v-for="item in navbarItems"
                :key="item"
                :to="item.route"
                style="cursor: pointer;"
            >
            <v-icon left :icon="item.icon" size="large" style="padding-right: 10%;"></v-icon>
            {{ item.name }}
            </v-btn>
            <v-btn
                style="cursor: pointer;"
            >
                <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "HomeNavbar",
        data() {
            return {
                appName: "Coop numérique",
                navbarItems: [
                    { name: "home", route: "/home", icon: "mdi-home"},
                    { name: "recycler", route: "/recycler", icon: "mdi-recycle"},
                    { name: "diagnostique", route: "/diagnostique", icon: "mdi-card-search"},
                    { name: "rdv", route: "/rdv", icon: "mdi-calendar" },
                    { name: "à propos", route: "/aPropos", icon: "mdi-information" }
                ]
            }
        }
    }
</script>