<template>
    <v-row>
      <v-col cols="12">
        <v-card 
          elevation="1"
          class="pa-7">
          <v-row>
            <v-col cols="12" md="12">
              <p class="primary--text font-weight-bold">Data lingkungan</p>
              LUX-Intensitas Cahaya (Lux) <br/>
              IRR-Intensitas Irradian Cahaya (W/m2) <br/>
              SUD-Suhu Udara (C) <br/>
              KUD-Kelembapan Udara (%RH) <br/>
            </v-col>
            <v-col cols="12" md="12">
                <v-data-table
                    :headers="headers"
                    :items="datas"
                    class="elevation-1"
                >
                </v-data-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
</template>
<script>
export default {
    name: "MonitoringTableView",
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
        { text: 'Intensitas Cahaya (Lux)', value: 'lux_intensitas_cahaya', class: "white--text blue"  },
        { text: 'IRR-Intensitas Irradian Cahaya (W/m2)', value: 'irr_intensitas_irradian_cahaya', filterable: false, class: "white--text blue" },
        { text: 'SUD-Suhu Udara (C)', value: 'sud_suhu_udara', filterable: false, class: "white--text blue" },
        { text: 'KUD-Kelembapan Udara (%RH)', value: 'kud_kelembapan_udara', filterable: false, class: "white--text blue" },
        { text: 'Tanggal', value: 'date', filterable: false, class: "white--text blue" },
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