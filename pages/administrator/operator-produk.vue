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
          :items="operatorProducts"
          :search="search"
          class="elevation-1"
        >
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
  name: "OperatorProduk",
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
        { text: 'KODE PRODUKSi', value: 'code', class: "white--text blue"  },
        { text: 'NAMA OPERATOR', value: 'date_created', class: "white--text blue"  },
        { text: 'TANGGAL KEPEMILIKAN', value: 'date_release', filterable: false, class: "white--text blue" },
        { text: 'AKSI', value: 'id', filterable: false, class: "white--text blue" }
      ],
      operatorProducts: [
        {
          no: 1,
          code: "KODEPRODUKSI1",
          date_created: "Operator A",
          date_release: "28 September 2021",
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
