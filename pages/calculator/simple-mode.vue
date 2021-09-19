<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row align="center" justify="center">
        <v-col>
          <img
            class="m-auto float-sm-left w-8/12 md:w-10/12"
            src="~assets/images/simple-mode-1.webp"
            alt="calculator-1"
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-card  elevation="1" class="mx-auto pa-5" outlined>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="4" class="font-weight-medium" >
                Pilih Lokasi <v-icon
                  class="black--text subtitle-1"
                  >mdi-information-outline
                </v-icon>
              </v-col>
              <v-col cols="12" sm="8">
                <v-select
                :items="locationList"
                v-model="location"
                item-text="name"
                item-value="id"
                outlined
                dense
                filled
                hide-details="auto"
              ></v-select>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="4" class="font-weight-medium" >
                Pilih AC/DC <v-icon
                  class="black--text subtitle-1"
                  >mdi-information-outline
                </v-icon>
              </v-col>
              <v-col cols="12" sm="8">
                <v-select
                :items="electricTypeList"
                v-model="electricType"
                item-text="name"
                item-value="id"
                outlined
                filled
                dense
                hide-details="auto"
              ></v-select>
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="4" class="font-weight-medium" >
                Total Enegri Bulanan (KWh)<v-icon
                  class="black--text subtitle-1"
                  >mdi-information-outline
                </v-icon>
              </v-col>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="energyTotal"
                  outlined
                  filled
                  required
                  dense
                  hide-details="auto"
                  color="primary"
                ></v-text-field>
              </v-col>
            </v-row>
            <br>
            <v-row class="d-flex justify-end pr-5">
              <v-col cols="6" md="3">
                <v-btn depressed large block color="primary" class="text-capitalize">Berikutnya</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "SimpleMode",
  layout: "landing",
  data() {
    return {
      locationList: [
        { id: 1, name : "Yogyakarta" },
        { id: 2, name : "Sleman" },
      ],
      location: null,
      electricTypeList : [ 
        {id : 1, name : "AC"}, 
        {id : 2, name : "DC"}
      ],
      electricType: null,
      energyTotal:""
    };
  }
};
</script>
