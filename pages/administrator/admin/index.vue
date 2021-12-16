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
          to="/administrator/admin/add"
        ><v-icon dark> mdi-plus </v-icon>Admin</v-btn>
        <!-- <v-btn
          color="warning"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
        ><v-icon dark> mdi-tray-arrow-down </v-icon>Download PDF</v-btn> -->
        <downloadexcel
          class="btn"
          :data="admin"
          :fields="json_fields"
          name="Data-Admin.xls"
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
            label="Cari Admin"
            prepend-inner-icon="mdi-magnify"
            hide-details="auto"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="admin"
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
  name: "DaftarAdmin",
  layout: "administrator",
  components: {
    downloadexcel
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
      admin: [
        {
          no: 1,
          photo: "ava1.png",
          fullname: "administrator",
          email: "admin@test.dev",
          username: "admin",
          id: 1,
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
      this.$router.push({ name : "administrator-admin-detail-id", params : id})
    },
    editProduct(id){
      this.$router.push({ name : "administrator-admin-id", params : id})
    },
    deleteProduct(id){},
    downloadProduct(id){},
  }
};
</script>
