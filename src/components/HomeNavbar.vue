<template>
    <v-toolbar
        color="white"
    >
        <img height="50" class="ma-5" :src="require('../assets/light-bulb.png')"/>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <router-link
                 v-for="item in navbarItems"
                :key="item"
                :to="{ name: item.route }"
                custom
            >
                <v-btn
                    style="cursor: pointer;"
                >
                <v-icon left :icon="item.icon" size="large" style="padding-right: 10%;"></v-icon>
                {{ item.name }}
                </v-btn>
            </router-link>
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
                navbarItems: [
                    { name: "home", route: "home", icon: "mdi-home"},
                    { name: "recycler", route: "recycler", icon: "mdi-recycle"},
                    { name: "à propos", route: "aPropos", icon: "mdi-information" },
                    { name: "nous contacter", route: "contacts", icon: "mdi-phone" }
                ]
            }
        }
    }
</script>