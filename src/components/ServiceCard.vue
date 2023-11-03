<template>
    <v-hover
        v-slot="{ isHovering, props }"
    >
        <v-card 
            variant="outlined"
            :class="{ 'on-hover': isHovering }"
            class="mb-5 mx-1"
            style="cursor: pointer;"
            width="50%"
            v-bind="props"
        >
            <v-card-title>
                <v-icon :icon=iconTitle class="mr-2"></v-icon>
                {{ typeService }}
            </v-card-title>
            <v-card-text>{{ question }}</v-card-text>
        </v-card>
    </v-hover>
</template>

<script>

    export default {
        name: "ServiceCard",
        props: {
            typeService: String,
            iconTitle: String,
            question: String
        }
    }
</script>

<style scoped>

.on-hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
}
</style>