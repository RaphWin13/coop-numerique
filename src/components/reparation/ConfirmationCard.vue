<script setup>
</script>

<template>
            <v-btn class="text-h5 font-weight-black" color="grey" height="100">
              Confirmer votre rendez-vous le {{exactDate()}} à {{exactTime()}}
            </v-btn>
</template>

<script>
  import { useDate } from 'vuetify/labs/date';

  export default {
  name: 'ConfirmationCard',
  props: {
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedTime: null
    }
  },
  methods: {
    exactDate: function () {
      return useDate().toISO(this.date);
    },
    exactTime: function () {
      if(this.time != null && this.time != false && this.time != true)
        this.selectedTime = this.time;
      return this.selectedTime;
    }
  }
};

</script>


<style scoped>
  .large-chip {
    font-size: 3.5rem !important; 
    height: 4rem !important; 
    padding: 10px 12px; 
  }
  </style>