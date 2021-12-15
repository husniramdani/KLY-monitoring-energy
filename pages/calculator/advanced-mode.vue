<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <div v-if="step == 1">
        <v-row align="center">
          <v-col cols="12" sm="8">
            <v-row align="center">
              <v-col cols="6" sm="3" class="font-weight-medium" >
                <span class="pr-2">Pilih Lokasi <InformationTooltip text="Masukkan lokasi anda"/></span>
              </v-col>
              <v-col cols="6" sm="6">
                <v-select
                :items="locationList"
                v-model="location"
                item-text="name"
                outlined
                dense
                filled
                hide-details="auto"
                return-object
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
                      <b>Jenis Beban {{index+1}}</b>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-text-field
                        v-model="input.loadType"
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
                      <span class="pr-2">Sumber <InformationTooltip text="Pilih Panel Surya jika siang, pilih baterai jika malam"/></span>
                    </v-col>
                    <v-col cols="6" sm="6">
                      <v-select
                        width="100%"
                        :items="sourceLoadList"
                        v-model="input.sourceLoad"
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
                      <span class="pr-2">Daya (Watt) <InformationTooltip text="Daya yang dibutuhkan untuk jenis beban tersebut."/></span>
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
                      <span class="pr-2">Durasi(Hour) <InformationTooltip text="Durasi pemakaian per hari untuk jenis beban tersebut."/></span>
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
                        <v-icon dark> mdi-plus </v-icon>Hapus
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
                  <span class="pr-2">Efiensi Baterai(%) <InformationTooltip text="Efisiensi Baterai yang direkomendasikan adalah 95%."/></span>
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
                  <span class="pr-2">DOD Max(%) <InformationTooltip text="kondisi baterai yang boleh dipakai. DOD yang direkomendasikan : 20%."/></span>
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
                  <span class="pr-2">Hari Otonom <InformationTooltip text="Kondisi PV ketika tidak mendapat sinar matahari. Rekomendasi: 1 hari"/></span>
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
                  <span class="pr-2">Tegangan Baterai <InformationTooltip text="Tegangan pada sistem (Baterai)"/></span>
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
                  <span class="pr-2">Kapasitas Baterai/Unit <InformationTooltip text="Nilai rekomendasi adalah 100, 150, dan 200."/></span>
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
                  <span class="pr-2">Rasio Performa PV (%) <InformationTooltip text="Rasio Performa PV yang direkomendasikan adalah 75%"/></span>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="performanceRatioPV"
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
                  <span class="pr-2">Rasio AC/DC (%) <InformationTooltip text="Nilai rekomendasi untuk rasio DC/AC adalah 120%"/></span>
                </v-col>
                <v-col cols="6" sm="6">
                  <v-text-field
                    v-model="ratioAC_DC"
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
              Hasil Perhitungan Energi
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
          <CardCalculatorResult title="Rencana Beban harian" :value="totalEnergy" unit="Watthour"/>
          <CardCalculatorResult title="Daily Energy Comsumption (DEC)" :value="calculateDEC" :customize="false" unit="Watthour"/>
          <CardCalculatorResult title="Kapasitas Baterai" :value="calculateBatteryCapacity" 
            :customize="true" unit="Watthour" :value2="calculateNumberOfBatteries" />
        </v-row>
        <v-row justify="space-around mt-4 mt-md-10">
          <CardCalculatorResult title="Kapasitas Inverter" :value="inverterCapacity" :customize="false" unit="Watt"/>
          <CardCalculatorResult title="Kapasitas PV - dengan Inverter" :value="PVCapacityWithInverter" :customize="false" unit="Wattpeak"/>
          <CardCalculatorResult title="Kapasitas PV - tanpa Inverter" :value="PVCapacityWithoutInverter" :customize="false" unit="Wattpeak"/>
        </v-row>
      </div>
    </div>
  </v-container>
</template>
<script>
const CORRECTION_PSH = 0.7
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
      batteryVoltageList:[
        {id:12, name : "12 Volt", value:12},
        {id:24, name : "24 Volt", value:24},
        {id:48, name : "48 Volt", value: 48},
      ],
      batteryVoltage:"",
      batteryCapacityList:[
        { id:100, name: "100", value:100 },
        { id:150, name: "150", value:150 },
        { id:200, name: "200", value:200 },
      ],
      batteryCapacity:"",
      performanceRatioPV:"",
      ratioAC_DC:"",
      sourceLoadList:[
        {
          id : 1,
          name : "Panel Surya"
        },
        {
          id : 2,
          name : "Baterai"
        }
      ],
      calculateResult:{
        totalEnergy : 0,
        totalEnergyPV : 0,
        totalEnergyBattery : 0
      }
    };
  },
  computed:{
    totalEnergy(){
      return this.calculateResult.totalEnergy
    },
    totalEnergyPV(){
      return this.calculateResult.totalEnergyPV
    },
    totalEnergyBattery(){
      return this.calculateResult.totalEnergyBattery
    },
    batteryEfficiencyConvert(){
      return this.batteryEfficiency/100
    },
    dodConvert(){
      return this.maxDod/100
    },
    ratioAcDcConvert(){
      return this.ratioAC_DC/100
    },
    performanceRatioPVConvert(){
      return this.performanceRatioPV/100
    },
    calculateDEC(){
      // DEC = Total Energi PV + (Total Energi Baterai / Efisiensi Baterai)
      return (this.totalEnergyPV + (this.totalEnergyBattery/this.batteryEfficiencyConvert)).toFixed(2)
    },
    calculateBatteryCapacity(){
      // Kapasitas Baterai= ((DEC-Total Energi PV)/(Efisiensi Baterai * DOD max))*Hari Otonom
      return (((this.calculateDEC-this.totalEnergyPV)/(this.batteryEfficiencyConvert*this.dodConvert))*this.otonomDay).toFixed(2)
    },
    calculateNumberOfBatteries(){
      // Jumlah Baterai (Unit) = (Kapasitas Baterai/Tegangan Baterai)/Kapasitas per unit Baterai
      return ((this.calculateBatteryCapacity/this.batteryVoltage)/this.batteryCapacity).toFixed(2)
    },
    inverterCapacity(){
      // Kapasitas Inverter= (DEC:Rasio Performa PV) / (PSH*PSH Correction)
      // Kapasitas Inverter= (DEC:75%) / (PSH*PSH Correction)
      return ((this.calculateDEC/(this.performanceRatioPVConvert)) / (this.location.psh*CORRECTION_PSH)).toFixed(2)
    },
    PVCapacityWithInverter(){
      // Kapasitas PV (Wattpeak) = Kapasitas Inverter PV (Wattpeak) * Rasio DC/AC (%)
      return (this.inverterCapacity*this.ratioAcDcConvert).toFixed(2)
    },
    PVCapacityWithoutInverter(){
      // Kapasitas PV non Inverter (Wattpeak)= (DEC / Rasio Performa PV) / (PSH * PSH Correction).
      return ((this.calculateDEC/this.performanceRatioPVConvert)/(this.location.psh*CORRECTION_PSH)).toFixed(2)
    },
    validate(){
      let data = false
      if(this.location == null || this.batteryEfficiency=="" || this.maxDod==""
      || this.otonomDay=="" || this.batteryVoltage=="" || this.batteryCapacity==""
      || this.performanceRatioPV=="" || this.ratioAC_DC==""){
        data = true
      }
      return data
    }
  },
  methods:{
    calculate(){
      console.log(this.validate, this.location)
      if(!this.validate){
        for(let data of this.loadComponent){
          console.log(data.loadType=="" || data.sourceLoad=="" || this.power=="" || this.duration=="")
          console.log(data.loadType,data.sourceLoad,data.power,data.duration)
          if(data.loadType=="" || data.sourceLoad=="" || data.power=="" || data.duration==""){
            return
          }
        }
      } else {
        return
      }
      this.result=1
      this.step=0
      this.calculateDailyExpensePlan()
    },
    addLoad(){
      this.loadComponent.push({
        loadType:"",
        sourceLoad:null,
        power:"",
        duration:"",
      })
    },
    removeLoad(index){
      this.loadComponent.splice(index, 1);
    },
    calculateDailyExpensePlan(){
      this.calculateResult = {
        totalEnergy: 0,
        totalEnergyPV: 0,
        totalEnergyBattery: 0,
        
      }
      for(let data of this.loadComponent){
        if(data.power != "" && data.duration != 0){
          if(data.sourceLoad == 1){
            this.calculateResult.totalEnergyPV += (data.power * data.duration)
          } else if(data.sourceLoad == 2){
            this.calculateResult.totalEnergyBattery += (data.power * data.duration)
          }
        }
      }
      this.calculateResult.totalEnergy = this.calculateResult.totalEnergyPV + this.calculateResult.totalEnergyBattery
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
