<template>
  <div>
    <v-row>
      <v-col cols="12" class="d-flex">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
          to="/administrator/operator/add"
        ><v-icon dark> mdi-plus </v-icon>Operator</v-btn>
        <downloadexcel
          class="btn"
          :data="operators"
          :fields="json_fields"
          name="Data-Operator.xls"
        >
          <v-btn
            color="success"
            elevation="2"
            outlined
            small
            class="text-capitalize mb-3"
            ><v-icon dark> mdi-tray-arrow-down </v-icon>Download Excel</v-btn
          >
        </downloadexcel>
        <!-- <v-btn
          color="success"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3"
        ><v-icon dark> mdi-tray-arrow-down </v-icon>Download Excel</v-btn> -->
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="12" sm="8" md="5">
        <v-text-field
            solo
            v-model="search"
            label="Cari Operator"
            prepend-inner-icon="mdi-magnify"
            hide-details="auto"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="operators"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:[`item.photo`]="{ item }">
            <img
              width="100"
              :src="require(`~/assets/profile-picture/${item.photo}`)"
              :alt="item.photo"
            />
          </template>
          <template v-slot:[`item.id`]="{ item }">
            <v-icon
              class="black--text h6 pl-1"
              @click="detailProduct(item)"
              >mdi-information-outline
            </v-icon>
            
            <v-icon
              color="success"
              @click="editProduct(item)"
              class="black--text h6 pl-1"
            >mdi-pencil</v-icon>
            <v-icon
              color="error"
              class="h6 pl-1"
              @click="deleteProduct(item)"
            >mdi-trash-can-outline</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import downloadexcel from "vue-json-excel";
export default {
  name: "DaftarOperator",
  layout: "administrator",
  components: {
    downloadexcel,
  },
  data () {
    return {
      search:"",
      headers: [
        // {
        //   text: 'NO',
        //   align: 'start',
        //   filterable: false,
        //   value: 'no',
        //   class: "white--text blue"
        // },
        // { text: 'FOTO', value: 'photo', class: "white--text blue" },
        { text: 'NAMA LENGKAP', value: 'fullname', class: "white--text blue" },
        { text: 'EMAIL', value: 'email', filterable: false, class: "white--text blue"},
        { text: 'USERNAME', value: 'username', filterable: false, class: "white--text blue"},
        { text: 'AKSI', value: 'id', filterable: false, class: "white--text blue"}
      ],
      operators: [
        {
          no: 1,
          photo: "ava1.png",
          fullname: "operator3",
          email: "usertesting3@gmail.com",
          username: "operator3",
          id: 62,
        },
        {
          id: 29,
          username: "usertest",
          email: "salsabilalaily@mail.ugm.ac.id",
          fullname: "User Test",
          created_at: "2021-11-18 14:22:31",
          updated_at: "2021-11-18 14:22:31"
        },
        {
            id: 66,
            username: "Operator",
            email: "salsabilalailyr@gmail.com",
            fullname: "OperatorBila",
            created_at: "2021-12-14 22:57:24",
            updated_at: "2021-12-14 22:57:24"
        },
        {
            id: 65,
            username: "administrator",
            email: "admintesting@gmail.com",
            fullname: "admin",
            created_at: "2021-12-14 22:55:13",
            updated_at: "2021-12-14 22:55:13"
        },
        {
            id: 67,
            username: "userbaru",
            email: "userbaru@email.com",
            fullname: "User Baru",
            created_at: "2021-12-14 23:04:36",
            updated_at: "2021-12-14 23:04:36"
        },
        {
            id: 68,
            username: "adminbaru",
            email: "adminbaru@email.com",
            fullname: "Admin Baru",
            created_at: "2021-12-14 23:06:49",
            updated_at: "2021-12-14 23:06:49"
        },
        {
            id: 74,
            username: "newadmin",
            email: "newadmin@gmail.com",
            fullname: "New Administrator",
            created_at: "2021-12-14 23:14:32",
            updated_at: "2021-12-14 23:14:32"
        },
      ],
      json_fields: {
        "Nama Lengkap": "fullname",
        "Email": "email",
        "Username": "username",
      },
    }
  },
  methods:{
    detailProduct(id){
      this.$router.push({ name : "administrator-operator-detail-id", params : id})
    },
    editProduct(id){
      this.$router.push({ name : "administrator-operator-id", params : id})
    },
    deleteProduct(id){},
  }
};
</script>
<style>
.blue {
  background: #2196F3;
}

</style>
