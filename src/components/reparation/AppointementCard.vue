<template>
  <v-hover v-slot="{ isHovering, props }">
        <v-card 
            variant="flat"
            :class="{ 'on-hover': isHovering }"
            class="mb-5 mx-1"
            width="60%"
            v-bind="props"
        >
            <v-card-title>
              <p class="text-h4 font-weight-black">Notre service de réparation</p>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-medium">
              Nous offrons un service de réparation pour tous les électroniques.
              Amenez-nous vos téléphones, ordinateurs, tablettes, consoles de jeux, etc. 
              Notre équipe de réparateurs fera tout en son posible pour leur donner une seconde vie.
            </v-card-text>
        
            <v-card-title>
              <p class="text-h4 font-weight-black">Prenez un rendez-vous pour réparer votre appareil</p>
            </v-card-title>

            <v-container fluid>
              <v-row>
                <v-col>
                  <v-date-picker 
                    v-model="selectedDate"
                    :allowed-dates="allowedDates"
                    elevation=20
                    min-width="100%">
                  </v-date-picker>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col> 
                  <TimePicker 
                    v-model="selectedTime"
                    v-if="selectedDate != null" 
                    :date="selectedDate"
                  />
                </v-col>
              </v-row>
              
              <v-row>
                <v-col> 
                  <ConfirmationCard 
                    v-if="showConfirmation" 
                    :date="selectedDate"
                    :time="selectedTime"
                  />
                </v-col>
              </v-row>
            </v-container>
        </v-card>
    </v-hover>
</template>

<script>
  import { VDatePicker } from 'vuetify/labs/VDatePicker';
  import TimePicker from './TimePicker.vue';
  import ConfirmationCard from './ConfirmationCard.vue';
  import { useDate } from 'vuetify/labs/date';
  import { disponibilities } from '@/data/appointments/disponibilities';

  export default {
    name: "AppointementCard",
    components: {
      VDatePicker,
      TimePicker,
      ConfirmationCard
    },
    data() {
      return {
        selectedDate: null,
        selectedTime: null,
        showConfirmation: false
      };
    },
    methods: {
      allowedDates: date => {
        date = useDate().toISO(date)
        return (disponibilities[date] != null && disponibilities[date].length > 0)
      }
    },
    watch: {
      selectedDate: function () {
        this.showConfirmation = false;
      },
      selectedTime: function () {
        if (this.selectedTime != null && this.selectedTime != false && this.selectedTime != true)
          this.showConfirmation = true;
      }
    }
  };
</script>

<style scoped>
  .date-time-picker {
    display: flex;
    justify-content: space-between;
  }
  </style>

