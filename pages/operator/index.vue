<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(item, index) of operatorDashboard" :key="index">
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
  </div>
</template>
<script>
// import moment from "@nuxtjs/moment"
export default {
  name: "Dashboard",
  layout: "operator",
  data(){
    return {
      operatorDashboard : [
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
      ]
    }
  },
};
</script>
