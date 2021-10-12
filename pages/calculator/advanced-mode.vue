<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <div v-if="step == 1">
        <v-row align="center">
          <v-col cols="12" sm="6">
            <v-row align="center">
              <v-col cols="6" sm="3" class="font-weight-medium" >
                <b>Pilih Lokasi</b> <v-icon
                  class="black--text subtitle-1"
                  >mdi-information-outline
                </v-icon>
              </v-col>
              <v-col cols="6" sm="6">
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
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-btn depressed large block color="primary" class="text-capitalize" @click="addLoad">
              <v-icon dark> mdi-plus </v-icon>Tambah Beban
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-row v-for="(input, index) in loadComponent" :key="`breadcrumb-${index}`">
              <v-col cols="12">
                <v-card elevation="1" class="mx-auto px-3 py-5" outlined>
                  <v-row>
                    <v-col cols="6" sm="6" class="font-weight-medium" >
                      <b>Jenis Beban 1</b>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-text-field
                        v-model="input.loadType"
                        min="0"
                        type="number"
                        outlined
                        filled
                        required
                        dense
                        hide-details="auto"
                        color="primary"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6" class="font-weight-medium" >
                      <b>Sumber</b> <v-icon
                        class="black--text subtitle-1"
                        >mdi-information-outline
                      </v-icon>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-text-field
                        v-model="input.sourceLoad"
                        min="0"
                        type="number"
                        outlined
                        filled
                        required
                        dense
                        hide-details="auto"
                        color="primary"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6" class="font-weight-medium" >
                      <b>Daya (Watt)</b> <v-icon
                        class="black--text subtitle-1"
                        >mdi-information-outline
                      </v-icon>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-text-field
                        v-model="input.power"
                        min="0"
                        type="number"
                        outlined
                        filled
                        required
                        dense
                        hide-details="auto"
                        color="primary"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6" sm="6" class="font-weight-medium" >
                      <b>Durasi(Hour)</b> <v-icon
                        class="black--text subtitle-1"
                        >mdi-information-outline
                      </v-icon>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-text-field
                        v-model="input.duration"
                        min="0"
                        type="number"
                        outlined
                        filled
                        required
                        dense
                        hide-details="auto"
                        color="primary"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row justify="end">
                    <v-col cols="4">
                      <v-btn small depressed outlined block color="error" class="text-capitalize float-right" @click="removeLoad(index)">
                        <v-icon dark> mdi-plus </v-icon>Remove
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="6">
             <v-card elevation="1" class="mx-auto px-3 py-5" outlined>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Efiensi Baterai</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="batteryEfficiency"
                    min="0"
                    type="number"
                    outlined
                    filled
                    required
                    dense
                    hide-details="auto"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>DOD Max</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="maxDod"
                    min="0"
                    type="number"
                    outlined
                    filled
                    required
                    dense
                    hide-details="auto"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Hari Otonom</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="otonomDay"
                    min="0"
                    type="number"
                    outlined
                    filled
                    required
                    dense
                    hide-details="auto"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Tegangan Baterai</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-select
                    width="100%"
                    :items="batteryVoltageList"
                    v-model="batteryVoltage"
                    item-text="name"
                    item-value="id"
                    outlined
                    dense
                    filled
                    hide-details="auto"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Kapasitas Baterai/Unit</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-select
                    width="100%"
                    :items="batteryCapacityList"
                    v-model="batteryCapacity"
                    item-text="name"
                    item-value="id"
                    outlined
                    dense
                    filled
                    hide-details="auto"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Rasio Performa PV</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="performanceRatio"
                    min="0"
                    type="number"
                    outlined
                    filled
                    required
                    dense
                    hide-details="auto"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="6" class="font-weight-medium" >
                  <b>Rasio AC/DC</b> <v-icon
                    class="black--text subtitle-1"
                    >mdi-information-outline
                  </v-icon>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="ratio"
                    min="0"
                    type="number"
                    outlined
                    filled
                    required
                    dense
                    hide-details="auto"
                    color="primary"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row class="d-flex justify-end pr-5">
                <v-col cols="6" md="3">
                  <v-btn depressed large block color="primary" class="text-capitalize" @click="calculate">Berikutnya</v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div v-if="result == 1">
        <v-row class="mb-10">
          <v-col cols="12" sm="6" class="d-flex align-start flex-column"
            ><p class="font-weight-medium text-h3 text-md-h2 mb-auto">
              Energy Calculation Results
            </p>
            <v-btn depressed large color="primary" class="mt-5" @click="step=1, result=0"
              ><v-icon dark> mdi-arrow-left </v-icon>
              </v-btn
            >
          </v-col>
          <v-col>
            <img
              class="m-auto float-sm-right w-10/12 md:w-9/12"
              src="~assets/images/simple-mode-1.webp"
              alt="landing-1"
            />
          </v-col>
        </v-row>
        <v-row justify="space-around" class="mt-10">
          <CardCalculatorResult title="Rencana Beban harian" value="5330" unit="Watthour"/>
          <CardCalculatorResult title="Daily Energy Comsumption (DEC)" value="5610" :customize="false" unit="Watthour"/>
          <CardCalculatorResult title="Kapasitas Baterai" value="59058" :customize="true" unit="Watthour"/>
        </v-row>
        <v-row justify="space-around mt-4 mt-md-10">
          <CardCalculatorResult title="Kapasitas Inverter" value="2490" :customize="false" unit="Watt"/>
          <CardCalculatorResult title="Kapasitas PV - dengan Inverter" value="2990" :customize="false" unit="Wattpeak"/>
          <CardCalculatorResult title="Kapasitas PV - tanpa Inverter" value="2990" :customize="false" unit="Wattpeak"/>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "SimpleMode",
  layout: "landing",
  data() {
    return {
      step:1,
      result:0,
      locationList: [
        { id: 1, name : "Yogyakarta" },
        { id: 2, name : "Sleman" },
      ],
      location: null,
      loadComponent: [
        {
          loadType:"",
          sourceLoad:"",
          power:"",
          duration:"",
        }
      ],
      batteryEfficiency:"",
      maxDod:"",
      otonomDay:"",
      batteryVoltageList:[],
      batteryVoltage:null,
      batteryCapacityList:[],
      batteryCapacity:null,
      performanceRatio:"",
      ratio:"",
    };
  },
  methods:{
    calculate(){
      this.result=1
      this.step=0
    },
    addLoad(){
      this.loadComponent.push({
        loadType:"",
        sourceLoad:"",
        power:"",
        duration:"",
      })
    },
    removeLoad(index){
      this.loadComponent.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.card-category{
  background: #2196F3;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 5px;
}
</style>