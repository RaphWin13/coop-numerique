<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card 
      variant="outlined"
      :class="{ 'on-hover': isHovering }"
      class="mb-5 mx-1"
      style="cursor: pointer;"
      v-bind="props"
    >
        <v-card-title class="text-h5 font-weight-black">
          {{name}}
        </v-card-title>

        <v-card-text class="text-h6 font-weight-medium" height="100">
          {{description}}
        </v-card-text>

        <v-card-text class="text-h6 font-weight-medium">
          {{price}} $
        </v-card-text>

        <v-card-text>
          <v-img
            :src="img"
            width="100%"
            height="500"
            class="grey lighten-2"
          ></v-img>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" text>Réserver</v-btn>
          <v-btn color="primary" text>En savoir plus</v-btn>
        </v-card-actions>

    </v-card>
</v-hover>
</template>

<script>

  export default {
        name: "ProductCard",
        components: {},
        props: {
          product: {
            type: Object,
            required: true
          }
        },
      data() {
        return {
          name : this.product.name,
          price : this.product.price,
          description : this.product.description,
          img : this.product.img,
        };
      },
    };

</script>
