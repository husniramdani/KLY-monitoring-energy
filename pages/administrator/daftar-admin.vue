<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
        ><v-icon dark> mdi-plus </v-icon>Admin</v-btn>
        <v-btn
          color="warning"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
        ><v-icon dark> mdi-tray-arrow-down </v-icon>Download PDF</v-btn>
        <v-btn
          color="success"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3"
        ><v-icon dark> mdi-tray-arrow-down </v-icon>Download Excel</v-btn>
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
          dense
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
              color="primary"
              class="mr-2"
              @click="detailProduct(item)"
            > mdi-eye</v-icon>
            <v-icon
              color="success"
              @click="editProduct(item)"
            >mdi-pencil</v-icon>
            <v-icon
              color="error"
              @click="deleteProduct(item)"
            >mdi-delete</v-icon>
            <v-icon
              color="success" 
              @click="downlaodProduct(item)"
            >mdi-tray-arrow-down</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "DaftarAdmin",
  layout: "administrator",
  data () {
    return {
      search:"",
      headers: [
        {
          text: 'NO',
          align: 'start',
          filterable: false,
          value: 'no',
          class: "white--text blue"
        },
        { text: 'FOTO', value: 'photo', class: "white--text blue" },
        { text: 'NAMA LENGKAP', value: 'fullname', class: "white--text blue" },
        { text: 'EMAIL', value: 'email', filterable: false, class: "white--text blue"},
        { text: 'USERNAME', value: 'username', filterable: false, class: "white--text blue"},
        { text: 'AKSI', value: 'id', filterable: false, class: "white--text blue"}
      ],
      admin: [
        {
          no: 1,
          photo: "ava1.png",
          fullname: "Admin xxx",
          email: "a@a.com",
          username: "adminxx",
          id: 1,
        },
      ],
    }
  },
  methods:{
    showProduct(id){},
    editProduct(id){},
    deleteProduct(id){},
    downloadProduct(id){},
  }
};
</script>
