<script setup>
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
        <v-card 
            variant="elevated"
            :class="{ 'on-hover': isHovering }"
            class="mb-5 mx-1"
            width="100%"
            v-bind="props"
            elevation=20
        >
            <v-card-title>
              <p class="text-h5 font-weight-black"> Confirmation {{exactDate()}} à {{exactTime()}}</p>
            </v-card-title>
        </v-card>
    </v-hover>
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