<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          to="/operator/monitoring-product/add"
          class="text-capitalize mb-3 mr-3"
        ><v-icon dark> mdi-plus </v-icon>Produk</v-btn>
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
            dense
            v-model="search_code"
            label="Cari Kode Produksi atau Nama Operator"
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
          :items="products"
          :search="search_code"
          class="elevation-1"
        >
          <template v-slot:[`item.id`]="{ item }">
            <v-icon
              color="primary"
              class="mr-2"
              small
              @click="detailProduct(item)"
            > mdi-eye</v-icon>
            <v-icon
              color="success"
              @click="editProduct(item)"
              small
            >mdi-pencil</v-icon>
            <v-icon
              color="error"
              @click="deleteProduct(item)"
              small
            >mdi-delete</v-icon>
            <v-icon
              color="success" 
              small
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
  name: "Product",
  layout: "operator",
  data () {
    return {
      search_code:"",
      headers: [
        {
          text: 'NO',
          align: 'start',
          filterable: false,
          value: 'no',
          class: "white--text blue" 
        },
        { text: 'NAMA ALAT', value: 'tool_name', class: "white--text blue"  },
        { text: 'KODE PRODUK', value: 'product_code', filterable: false, class: "white--text blue" },
        { text: 'TANGGAL PEMBUATAN', value: 'created_date', filterable: false, class: "white--text blue" },
        { text: 'KODE LOKASI', value: 'location_code', filterable: false, class: "white--text blue" },
        { text: 'AKSI', value: 'id', filterable: false, class: "white--text blue" }
      ],
      products: [
        {
          no: 1,
          tool_name: "nama alat",
          product_code: "kode here",
          created_date: "date created here",
          location_code: "location code here",
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
  },
};
</script>
