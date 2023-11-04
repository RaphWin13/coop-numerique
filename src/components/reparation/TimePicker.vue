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
              <p class="text-h5 font-weight-black"> Plages horaires disponibles {{exactDate()}}</p>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-chip-group
                    v-model="selectedTime"
                    active-class="primary--text"
                    mandatory
                    multiple
                  >
                    <v-chip
                      v-for="time in timeSlots()"
                      :key="time"
                      :value="time"
                      label
                      class="ma-6 large-chip"
                      @click="selectTime(time)"
                    >
                      {{ time }}
                    </v-chip>
                  </v-chip-group>
                </v-col>
              </v-row>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
  import { disponibilities } from '@/data/appointments/disponibilities';
  import { useDate } from 'vuetify/labs/date';

  export default {
  name: 'TimePicker',
  props: {
    value: {
      type: String,
      default: null
    },
    date: {
      type: Date,
      required: true
    }
  },
  methods: {
    exactDate: function () {
      return useDate().toISO(this.date);
    },
    timeSlots: function () {
      return disponibilities[useDate().toISO(this.date)];
    },
    selectTime(time) {
      this.$emit('update:modelValue', time);
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