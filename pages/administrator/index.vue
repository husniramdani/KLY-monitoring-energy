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
          quantity : 3,
          body:"Jumlah Admin"
        },
        {
          title: "Operator",
          quantity : 1,
          body:"Jumlah Operator"
        },
        {
          title: "Produk",
          quantity : 3,
          body:"Jumlah Produk"
        },
        {
          title: "Produk",
          quantity : 3,
          body:"Jumlah Produk Terpakai"
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
