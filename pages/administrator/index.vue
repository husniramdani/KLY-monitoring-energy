<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(content, index) in cardDashboard" :key="index">
        <CardDashboardAdministrator :content="content" :checkFunction="moreInformation"/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  layout: "administrator",
  data() {
    return {
      cardDashboard: [
        {
          title: "Admin",
          quantity : 1,
          body:"Jumlah Admin",
          url:"/administrator/admin"
        },
        {
          title: "Operator",
          quantity : 7,
          body:"Jumlah Operator",
          url:"/administrator/operator"
        },
        {
          title: "Produk",
          quantity : 31,
          body:"Jumlah Produk",
          url:"/administrator/produk"
        },
        {
          title: "Produk",
          quantity : 3,
          body:"Jumlah Produk Terpakai",
          url:"/administrator/operator-produk"
        },
      ]
    }
  },
  methods:{
    moreInformation(){
      console.log("Test")
    }
  }
};
</script>
