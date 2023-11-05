<template>
  <v-app>
    <v-main class="d-flex flex-column align-center">
      <v-title class="text-h2 font-weight-black pa-4"> Boutique </v-title>
      <v-subtitle class="text-h6 pa-4"> Nos produits réusinés sont vendus par d'autres membres de la coop ou proviennent de dons. Tous les profits des dons vont à la continuité des services de la coop. </v-subtitle>
      <v-btn class="ma-4 font-weight-black" color="light-grey" height="60">
        Faire un don de produit
      </v-btn>
      <v-btn class="ma-4 font-weight-black" color="light-grey" height="60">
        En savoir plus sur la vente de produits usagés
      </v-btn>

      <v-title class="text-h3 font-weight-black pa-4"> Produits réusinés </v-title>
      <v-container>
        <v-row>
          <v-col
            v-for="product in products"
            :key="product.name"
            cols="3"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-container>
      <v-btn class="ma-4" color="grey" height="60">
        Voir plus de produits
      </v-btn>

      
      <v-title class="text-h3 font-weight-black pa-4"> Pièces réusinés </v-title>
      <v-container>
        <v-row>
          <v-col
            v-for="product in pieces"
            :key="product.name"
            cols="3"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </v-container>
      <v-btn class="ma-4" color="grey" height="60">
        Voir plus de produits
      </v-btn>
    </v-main>
  </v-app>
</template>

<script>
  import ProductCard from './boutique/ProductCard.vue';
  import { refurbishedProducts } from '@/data/boutique/refurbishedProducts';
  import { pieces } from '@/data/boutique/pieces';

  export default {
        name: "BoutiquePage",
        components: {
          ProductCard,
        },
        data() {
          return {
            products: refurbishedProducts,
            pieces: pieces,
          };
        },
      };

</script>
