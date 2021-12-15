<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <div v-if="step == 1">
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
                <v-col cols="12" sm="4" class="font-weight-medium d-flex" >
                  <span class="pr-2">Pilih Lokasi <InformationTooltip text="Masukkan lokasi anda"/></span> 
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
                    return-object
                  ></v-select>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="4" class="font-weight-medium d-flex" >
                  <span class="pr-2">Pilih AC/DC <InformationTooltip text="Pilih AC (pakai inverter), pilih DC (tidak pakai inverter)"/></span>
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
                <v-col cols="12" sm="4" class="font-weight-medium d-flex" >
                  <span class="pr-2">Total Enegri Bulanan (KWh) <InformationTooltip text="Total energi yang dipakai dalam 1 bulan"/></span>
                </v-col>
                <v-col cols="12" sm="8">
                  <v-text-field
                    v-model="energyTotal"
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
              <br>
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
              Hasil Perhitungan Energi (AC)
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
          <CardCalculatorResult title="Rencana Beban harian" :value="calculateDailyExpensePlan" unit="Watthour"/>
          <CardCalculatorResult title="Daily Energy Comsumption (DEC)" :value="calculateDEC" :customize="false" unit="Watthour"/>
          <CardCalculatorResult title="Kapasitas Baterai" :value="calculateBatteryCapacity" 
            :customize="true" unit="Watthour" :value2="calculateNumberOfBatteries"/>
        </v-row>
        <v-row justify="space-around mt-4 mt-md-10">
          <v-col cols="2" class="d-none d-sm-block"></v-col>
          <CardCalculatorResult title="Kapasitas Inverter" :value="inverterCapacity" :customize="false" unit="Watt"/>
          <CardCalculatorResult title="Kapasitas PV - dengan Inverter" :value="PVCapacityWithInverter" :customize="false" unit="Wattpeak"/>
          <v-col cols="2" class="d-none d-sm-block"></v-col>
        </v-row>
      </div>
      <div v-if="result==2">
        <v-row class="mb-10">
          <v-col cols="12" sm="6" class="d-flex align-start flex-column"
            ><p class="font-weight-medium text-h3 text-md-h2 mb-auto">
              Hasil Perhitungan Energi (DC)
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
          <v-col cols="2" class="d-none d-sm-block"></v-col>
          <CardCalculatorResult title="Rencana Beban harian" :value="calculateDailyExpensePlan" unit="Watthour"/>
          <CardCalculatorResult title="Daily Energy Comsumption (DEC)" :value="calculateDEC" :customize="false" unit="Watthour"/>
          <v-col cols="2" class="d-none d-sm-block"></v-col>
        </v-row>
        <v-row justify="space-around mt-4 mt-md-10">
          <v-col cols="2" class="d-none d-sm-block"></v-col>
          <CardCalculatorResult title="Kapasitas PV - tanpa Inverter" :value="PVCapacityWithoutInverter" :customize="false" unit="Wattpeak"/>
          <CardCalculatorResult title="Kapasitas Baterai" :value="calculateBatteryCapacity" 
          :customize="true" unit="Watthour" :value2="calculateNumberOfBatteries"/>
          <v-col cols="2" class="d-none d-sm-block"></v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
const RATIO_PV_PERFORMANCE = 0.75
const BATTERY_EFFICIENCY = 0.95
const CORRECTION_PSH = 0.7
const DOD_MAX = 0.2
const OTONOM_DAY = 1
const DAY_IN_A_MONTH = 30
const BATTERY_VOLTAGE = 24
const BATTERY_UNIT_CAPACITY = 100
const RATIO_AC_DC = 1.2
const PERFORMANCE_RATIO_PV = 0.75

export default {
  name: "SimpleMode",
  layout: "landing",
  data() {
    return {
      step:1,
      result:0,
      locationList: [
        { id: 1, name : "Yogyakarta", psh: 5.0 },
        { id: 2, name : "Bantul", psh: 5.1 },
        { id: 3, name : "Sleman", psh: 4.5 },
        { id: 4, name : "Gunung Kidul", psh: 5.1 },
        { id: 5, name : "Kulon Progo", psh: 4.8 },
      ],
      location: null,
      electricTypeList : [
        {id : 1, name : "AC"},
        {id : 2, name : "DC"}
      ],
      electricType: null,
      energyTotal:"",
      alertAttribute: {
        show: false,
        type: "success",
        title: "",
        body: ""
      }
    };
  },
  computed:{
    validate(){
      let data = false;
      if(this.location == null || this.electricType == null || this.energyTotal == ""){
        data=true
      }
      return data
    },
    conversionKwhToWh(){
      // Total Energi Bulanan (KWh) => Total Energi Bulanan (Watthour)
      // E(kWh) = P(W) × t(hr) / 1000
      // Maka akan didapatkan = Total Energi Bulanan (Watthour atau Wh).
      return (this.energyTotal*1000).toFixed(2)
    },
    calculateDailyExpensePlan(){
      // Rencana beban harian
      return (this.conversionKwhToWh/DAY_IN_A_MONTH).toFixed(2)
    },
    calculateDEC(){
      // Daily Energy Comsumption (DEC)
      return (this.calculateDailyExpensePlan/BATTERY_EFFICIENCY).toFixed(2)
    },
    calculateBatteryCapacity(){
      // Kapasitas Baterai = ((DEC-Rencana Beban Harian) / (Efisiensi Baterai*DOD Max)*Hari Otonom))
      return ((this.calculateDEC-this.calculateDailyExpensePlan)/((BATTERY_EFFICIENCY*DOD_MAX )*OTONOM_DAY)).toFixed(2)
    },
    calculateNumberOfBatteries(){
      // Jumlah Baterai = (Kapasitas Baterai / Tegangan Baterai) / Kapasitas per unit baterai
      return ((this.calculateBatteryCapacity/BATTERY_VOLTAGE)/BATTERY_UNIT_CAPACITY).toFixed(2)
    },
    inverterCapacity(){
      // Kapasitas Inverter= (DEC:Rasio Performa PV) / (PSH*PSH Correction)
      // Kapasitas Inverter= (DEC:75%) / (PSH*PSH Correction)
      return ((this.calculateDEC/RATIO_PV_PERFORMANCE) / (this.location.psh/CORRECTION_PSH)).toFixed(2)
    },
    PVCapacityWithInverter(){
      // Kapasitas PV Inverter= Kapasitas Inverter * Rasio DC/AC
      return (this.inverterCapacity/RATIO_AC_DC).toFixed(2)
    },
    PVCapacityWithoutInverter(){
      // Kapasitas PV Inverter= Kapasitas Inverter * Rasio DC/AC
      return ((this.calculateDEC/PERFORMANCE_RATIO_PV)/(this.location.psh/CORRECTION_PSH)).toFixed(2)
    }
  },
  methods:{
    calculate(){
      if(this.validate){
        
        return
      }
      if(this.electricType == 1){
        this.result = 1
        this.step=2
      }
      if(this.electricType == 2){
        this.result = 2
        this.step=2
      }
    },
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
