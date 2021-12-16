<template>
  <div>
    <v-overlay :value="isLoading" :z-index="100">
      <v-progress-circular
        :value="80"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col class="d-flex justify-end">
        <downloadexcel
          class="btn mb-3 mr-3"
          :data="getProductDetails"
          :fields="json_fields"
          :before-generate="startDownload"
          :before-finish="finishDownload"
          name="Data-Detail-Products.xls"
        >
          <v-btn
            color="success"
            elevation="2"
            outlined
            small
            class="text-capitalize mb-3"
          >
            <v-icon dark> mdi-tray-arrow-down </v-icon>
            Download Excel
          </v-btn>
        </downloadexcel>
        <v-btn
          :disabled="graph_data"
          color="primary"
          class="text-capitalize mb-3 mr-3"
          small
          ><v-icon dark> mdi-plus </v-icon>Data Grafik</v-btn
        >
        <v-btn
          color="primary"
          class="text-capitalize mb-3 mr-3"
          small
          @click="showTableData"
          ><v-icon dark> mdi-plus </v-icon>Data Tabel</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card elevation="1" class="pa-7">
          <v-row>
            <v-col cols="12 text-center justify-end">
              <p class="text-h6 text-md-h6 font-weight-medium">
                Data Lingkungan
              </p>
              <div class="line-decoration"></div>
            </v-col>
            <v-col cols="12" class="pa-0">
              <div class="canvas-chart" ref="chartdiv"></div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import downloadexcel from "vue-json-excel";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  name: "OperatorDetailMonitoringPltsGrafik",
  layout: "operator",
  components: {
    downloadexcel,
    am4core,
    am4charts,
    am4themes_animated,
  },
  async fetch({ store, route }) {
    const { query } = route;
    await store.dispatch("product/getProductDetails", query);
  },
  data() {
    return {
      isLoading: false,
      search_code: "",
      graph_data: true,
      chartData1: [
        {
          x: 10,
          value: 450,
          value2: 162,
          value3: 1100,
          value4: 200,
        },
        {
          x: 30,
          value: 669,
          value3: 841,
          value4: 150,
        },
        {
          x: 40,
          value: 1200,
          value3: 199,
          value4: 400,
        },
        {
          x: 50,
          value: 1000,
          value2: 867,
          value3: 250,
          value4: 450,
        },
        {
          x: 60,
          value2: 185,
          value3: 669,
          value4: 450,
        },
        {
          x: 70,
          value: 150,
          value2: 150,
          value3: 200,
          value4: 450,
        },
        {
          x: 80,
          value: 1220,
          value2: 350,
          value3: 600,
        },
      ],
      headers: [
        {
          text: "LUX-Intensitas Cahaya (Lux)",
          value: "lux_intensitas_cahaya",
          class: "white--text blue",
          align: "center",
        },
        {
          text: "IRR-Intensitas Irradian Cahaya (W/m2)",
          value: "irr_intensitas_irradian_cahaya",
          class: "white--text blue",
          align: "center",
        },
        {
          text: "SUD-Suhu Udara (C)",
          value: "sud_suhu_udara",
          filterable: false,
          class: "white--text blue",
          align: "center",
        },
        {
          text: "KUD-Kelembapan Udara (%RH)",
          value: "kud_kelembapan_udara",
          filterable: false,
          class: "white--text blue",
          align: "center",
        },
        {
          text: "Tanggal",
          value: "date",
          filterable: false,
          class: "white--text blue",
          align: "center",
        },
      ],
      json_fields: {
        "LUX-Intensitas Cahaya (Lux)": "lux_intensitas_cahaya",
        "IRR-Intensitas Irradian Cahaya (W/m2)":
          "irr_intensitas_irradian_cahaya",
        "SUD-Suhu Udara (C)": "sud_suhu_udara",
        "KUD-Kelembapan Udara (%RH)": "kud_kelembapan_udara",
        Tanggal: "date",
      },
    };
  },
  methods: {
    startDownload() {
      this.isLoading = true;
    },
    finishDownload() {
      this.isLoading = false;
    },
    showTableData() {
      const { params, query } = this.$route;
      this.$router.push({
        name: "operator-monitoring-plts-table-id",
        params,
        query,
      });
    },
    lineChart(refs, datas) {
      console.log(datas)
      let chart = am4core.create(refs, am4charts.XYChart);
      chart.data = datas;
      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.ValueAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 30;

      chart.yAxes.push(new am4charts.ValueAxis());
      this.createSeries(chart, "lux_intensitas_cahaya", "LUX-Intensitas Cahaya (Lux)");
      this.createSeries(
        chart,
        "irr_intensitas_irradian_cahaya",
        "IRR-Intensitas Irradian Cahaya (W/m2)"
      );
      this.createSeries(chart, "sud_suhu_udara", "SUD-Suhu Udara (C)");
      this.createSeries(chart, "kud_kelembapan_udara", "KUD-Kelembapan Udara (%RH)");
      chart.legend = new am4charts.Legend();
      chart.cursor = new am4charts.XYCursor();
    },
    createSeries(chart, field, name) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.valueX = "id";
      series.name = name;
      series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;

      series.smoothing = "monotoneX";

      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color("#fff");
      bullet.circle.strokeWidth = 2;

      return series;
    },
  },
  computed: {
    ...mapGetters("product", ["getProducts", "getProductDetails"]),
    ...mapGetters("user", ["getUserDetail"]),
  },
  mounted() {
    this.lineChart(this.$refs.chartdiv, this.getProductDetails);
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.line-decoration {
  height: 2px;
  width: 20%;
  background-color: #2196f3;
  margin: auto;
}
.canvas-chart {
  width: 100%;
  height: 400px;
}
</style>
