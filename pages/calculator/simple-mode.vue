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
          <CardCalculatorResult title="Kapasitas Inverter" value="2490" :customize="false" unit="Watt"/>
          <CardCalculatorResult title="Kapasitas PV - dengan Inverter" value="2990" :customize="false" unit="Wattpeak"/>
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
          <CardCalculatorResult title="Kapasitas PV - tanpa Inverter" value="2490" :customize="false" unit="Wattpeak"/>
          <CardCalculatorResult title="Kapasitas Baterai" :value="calculateBatteryCapacity" 
          :customize="true" unit="Watthour" :value2="calculateNumberOfBatteries"/>
          <v-col cols="2" class="d-none d-sm-block"></v-col>
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
      electricTypeList : [
        {id : 1, name : "AC"},
        {id : 2, name : "DC"}
      ],
      electricType: null,
      energyTotal:""
    };
  },
  computed:{
    conversionKwhToWh(){
      // Total Energi Bulanan (KWh) => Total Energi Bulanan (Watthour)
      // E(kWh) = P(W) × t(hr) / 1000
      // Maka akan didapatkan = Total Energi Bulanan (Watthour atau Wh).
      return (this.energyTotal/1000).toFixed(2)
    },
    calculateDailyExpensePlan(){
      return (this.conversionKwhToWh/30).toFixed(2)
    },
    calculateDEC(){
      return (this.calculateDailyExpensePlan/0.95).toFixed(2)
    },
    calculateBatteryCapacity(){
      // Kapasitas Baterai = ((DEC-Rencana Beban Harian) / (Efisiensi Baterai*DOD Max)*Hari Otonom))
      return ((this.calculateDEC-this.calculateDailyExpensePlan)/((0.95*0.2)*1)).toFixed(2)
    },
    calculateNumberOfBatteries(){
      // Jumlah Baterai = (Kapasitas Baterai / Tegangan Baterai) / Kapasitas per unit baterai
      return ((this.calculateBatteryCapacity/24)/100).toFixed(2)
    }
  },
  methods:{
    calculate(){
      console.log(this.electricType)
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
