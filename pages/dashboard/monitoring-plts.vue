<template>
  <div>
    <v-row class="mt-0">
      <v-col cols="12" sm="8" md="7">
        <v-text-field
            solo
            dense
            v-model="search_code"
            label="Pilih Kode Produk"
            prepend-inner-icon="mdi-magnify"
            hide-details="auto"
          ></v-text-field>
      </v-col>
      <v-col class="d-flex justify-end">
        <!-- <v-btn
          color="primary"
          class="text-capitalize mb-3 mr-3"
          small
          @click="showGraphData()"
        ><v-icon dark> mdi-plus </v-icon>Data Grafik</v-btn> -->
        <v-btn
          color="primary"
          class="text-capitalize mb-3 mr-3"
          small
          @click="showTableData"
        ><v-icon dark> mdi-plus </v-icon>Data Tabel</v-btn>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="7">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          to="/operator/monitoring-product/add"
          class="text-capitalize mb-3 mr-3"
        ><v-icon dark> mdi-plus </v-icon>Download Keterangan Tabel</v-btn>
        <v-btn
          color="success"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3"
        ><v-icon dark> mdi-tray-arrow-down </v-icon>Download Excel</v-btn>
      </v-col>
    </v-row> -->
    <MonitoringTableView v-if="table_data" />
    <MonitoringChart v-if="graph_data"/>
  </div>
</template>
<script>
export default {
  name: "PLTS",
  layout: "dashboard",
  data(){
    return {
      table_data : true,
      graph_data : false,
    }
  },
  methods:{
    showTableData(){
      this.table_data = true
      this.graph_data = false
    },
    showGraphData(){
      this.table_data = false
      this.graph_data = true
    },
  }
};
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
