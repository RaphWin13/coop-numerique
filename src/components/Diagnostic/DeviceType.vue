<template>
    <v-hover
        v-slot="{ isHovering, props }"
    >
        <v-card
            :class="{ 'on-hover': isHovering }"
            class="mb-5"
            variant="outlined"
            width="50%"
            elevation="0"
            v-bind=props
            @click="$router.push({ name: path })"
        >
            <v-card-title>
                <v-icon :icon=iconTitle class="mr-2"></v-icon>
                {{ deviceType }}
            </v-card-title>
            <v-card-text>
                {{ text }}
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>

    export default {
        name: "DeviceType",
        props: {
            deviceType: String,
            iconTitle: String,
            text: String,
            path: String
        },
    }

</script>

<style scoped>

.on-hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.04);
}
</style>