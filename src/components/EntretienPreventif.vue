<template>
  <v-app>
    <v-main class="d-flex flex-column align-center justify-space-around">
      <h1>Trucs et astuces pour augmenter la durée de vie des appareils</h1>
      <v-card width="page-100%">
        <v-card-title class = "text-h4">
          Téléphone cellulaire
        </v-card-title>
        <v-card-text>
          <p class="text-left"><ul><li>Changer la batterie à tous les trois ans</li>
              <li>Supprimer et désinstaller des applications qui ne sont pas nécessaires</li>
              <li>Nettoyer le port de chargement fréquemment</li>
              <li>Se munir d'un protecteur d'écran et d'une pochette de téléphone robuste</li>
              <li>Effectuer les mises à jour logicielles</li>
              <li>S'assurer que les données de l'appareil sont sauvegardées dans un système Cloud en cas de bris ou de dysfonctionnement
          </li></ul></p>
        </v-card-text>
      </v-card>
      <v-card width="page-100%">
        <v-card-title class = "text-h4">
          Ordinateur
        </v-card-title>
        <v-card-text>
          <p class = "text-left"><ul><li>Effectuer de façon régulière les mises à jour logicielle</li>
          <li>Activer un antivirus et faire des vérifications régulières</li>
          <li>Supprimer et désinstaller des logiciels inutiles ou anciens ou des fichiers désuets.</li>
          <li>Nettoyer les composantes (clavier, écran, souris, ports) à l'aide de cotton tige pour maintenir l'ordinateur en bon état</li>
          <li>Libérer de l'espace de stockage au besoin</li>
          <li>Effectuer un nettoyages en profondeur ponctuel chez un réparateur.</li></ul></p>
        </v-card-text>
      </v-card>
      <v-card width="page-100%">
        <v-card-title class = "text-h4">
          Console de jeux vidéos
        </v-card-title>
        <v-card-text>
          <p class = "text-left"><ul><li>Effectuer les mises à jour logicielles et garder les composantes à jour</li>
        <li>Remplacer les câbles abimés</li>
        <li>Démêler les câbles</li>
        <li>Retirer la batterie et débrancher lorsque l'appareil n'est pas utilisé</li>
        <li>Nettoyer et dépoussiérer la console de façon régulière</li></ul></p>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

  export default {
        name: "EntretienPreventif",
        components: {
        },
      };

</script>
