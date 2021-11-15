<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(item, index) of demoDashboard" :key="index">
        <v-card elevation="1" class="mx-auto" outlined height="100%">
          <v-row class="pa-4">
            <v-col cols="12">
              <span class="primary--text">{{item.value}}</span>
              <p>{{item.title}}</p>
            </v-col>
            <v-col cols="12" class="mt-3">
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card 
          elevation="1"
          class="pa-7">
          <v-row>
            <v-col cols="12 text-center justify-end">
              <p class="text-h6 text-md-h6 font-weight-medium">
                Data Lingkungan
              </p>
              <div class="line-decoration"></div>
            </v-col>
            <v-col cols="12" class="pa-0">
              <div class="canvas-chart" ref="chartdiv">
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card 
          elevation="1"
          class="pa-7">
          <v-row>
            <v-col cols="12 text-center justify-end">
              <p class="text-h6 text-md-h6 font-weight-medium">
                Data Lingkungan
              </p>
              <div class="line-decoration"></div>
            </v-col>
            <v-col cols="12" class="pa-0">
              <div class="canvas-chart" ref="chartdiv1">
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated)
export default {
  name: "dashboard-demo",
  layout: "dashboard",
  data() {
    return {
      demoDashboard : [
        {
          title:"Kode Produk",
          value:"querty"
        },
        {
          title:"Tanggal Pembuatan",
          value:"2020/07/12 20:08:34"
        },
        {
          title:"Tanggal Kepemilikan",
          value:"2020/07/12 20:08:34"
        },
        {
          title:"Hari ini",
          value: this.$moment().format('DD MMMM YYYY')
        },
      ],
      chartData1 : [{
        "x": 10,
        "value": 450,
        "value2": 162,
        "value3": 1100,
        "value4": 200
      }, {
        "x": 30,
        "value": 669,
        "value3": 841,
        "value4": 150
      }, {
        "x": 40,
        "value": 1200,
        "value3": 199,
        "value4": 400
      }, {
        "x": 50,
        "value": 1000,
        "value2": 867,
        "value3": 250,
        "value4": 450
      }, {
        "x": 60,
        "value2": 185,
        "value3": 669,
        "value4": 450
      }, {
        "x": 70,
        "value": 150,
        "value2": 150,
        "value3": 200,
        "value4": 450
      }, {
        "x": 80,
        "value": 1220,
        "value2": 350,
        "value3": 600
      }]
    }
  },
  methods:{
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    lineChart(refs, datas){
      let chart = am4core.create(refs, am4charts.XYChart);
      chart.data = datas
      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.ValueAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.minGridDistance = 30;

      chart.yAxes.push(new am4charts.ValueAxis());
      this.createSeries(chart, "value", "LUX-Intensitas Cahaya (Lux)");
      this.createSeries(chart, "value2", "IRR-Intensitas Irradian Cahaya (W/m2)");
      this.createSeries(chart, "value3", "SUD-Suhu Udara (C)");
      this.createSeries(chart, "value4", "KUD-Kelembapan Udara (%RH)");
      chart.legend = new am4charts.Legend();
      chart.cursor = new am4charts.XYCursor();
    },
    createSeries(chart, field, name) {
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = field;
      series.dataFields.valueX = "x";
      series.name = name;
      series.tooltipText = "{dateX}: [b]{valueY}[/]";
      series.strokeWidth = 2;
      
      series.smoothing = "monotoneX";
      
      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = am4core.color("#fff");
      bullet.circle.strokeWidth = 2;
      
      return series;
    }
  },
  mounted(){
    this.lineChart(this.$refs.chartdiv, this.chartData1)
    this.lineChart(this.$refs.chartdiv1, this.chartData1)
  }
};
</script>
<style scoped>
.canvas-chart {
  width: 100%;
  height: 400px;
}
</style>