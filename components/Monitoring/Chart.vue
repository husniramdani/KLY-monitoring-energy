<template>
    <v-row>
      <v-col cols="12">
        <v-card 
          elevation="1"
          class="pa-7">
          <v-row>
            <v-col cols="12" md="12">
              <!-- <div class="canvas-chart" ref="chartdiv1"></div> -->
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: "MonitoringChart",
  data(){
    return {
      search_code:"",
      table_data : false,
      graph_data : false,
      headers: [
        {
          text: 'NO',
          align: 'start',
          filterable: false,
          value: 'no',
          class: "white--text blue" 
        },
        { text: 'LUX', value: 'lux_intensitas_cahaya', class: "white--text blue"  },
        { text: 'IRR', value: 'irr_intensitas_irradian_cahaya', filterable: false, class: "white--text blue" },
        { text: 'SUD', value: 'sud_suhu_udara', filterable: false, class: "white--text blue" },
        { text: 'KUD', value: 'kud_kelembapan_udara', filterable: false, class: "white--text blue" },
      ],
      datas: [
          {
            "no": 1,
            "product_code": "ABC213123",
            "lux_intensitas_cahaya": 20,
            "irr_intensitas_irradian_cahaya": 25,
            "sud_suhu_udara": 22,
            "kud_kelembapan_udara": 18,
            "date": "2021-12-05T12:17:13.000Z"
        },
        {
            "no": 2,
            "product_code": "ABC213123",
            "lux_intensitas_cahaya": 25,
            "irr_intensitas_irradian_cahaya": 30,
            "sud_suhu_udara": 27,
            "kud_kelembapan_udara": 23,
            "date": "2021-12-06T12:17:13.000Z"
        }
      ]
    }
  },
  methods:{
  }
}
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>