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
        ><v-icon dark> mdi-plus </v-icon>Produk</v-btn>
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
          :headers="headers"
          :items="products"
          :search="search_code"
          class="elevation-1"
        >
          <template v-slot:[`item.id`]="{ item }">
             <v-icon class="black--text h6 pl-1" @click="detailProduct(item)">
               mdi-information-outline
            </v-icon>

            <v-icon
              color="success"
              @click="editProduct(item)"
              class="black--text h6 pl-1">
              mdi-pencil
            </v-icon>
            <v-icon color="error" class="h6 pl-1" @click="deleteProduct(item)">
              mdi-trash-can-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Product",
  layout: "dashboard",
  data () {
    return {
      search_code:"",
      headers: [
        { text: 'NAMA ALAT', value: 'tool_name', class: "white--text blue"  },
        { text: 'KODE PRODUK', value: 'product_code', filterable: false, class: "white--text blue" },
        { text: 'TANGGAL PEMBUATAN', value: 'created_date', filterable: false, class: "white--text blue" },
        { text: 'KODE LOKASI', value: 'location_code', filterable: false, class: "white--text blue" },
        { text: 'AKSI', value: 'id', filterable: false, class: "white--text blue" }
      ],
      products: [
        {
          tool_name: "Produk demo",
          product_code: "DEMO001",
          created_date: "2021-12-15 10:00:00",
          location_code: "Yogya",
          id: 1,
        },
        {
          tool_name: "Produk demo 02",
          product_code: "DEMO002",
          created_date: "2021-12-14 10:00:00",
          location_code: "Yogya",
          id: 2,
        },
      ],
    }
  },
};
</script>
