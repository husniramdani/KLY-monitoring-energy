<template>
  <div>
    <v-overlay :value="isLoading" :z-index="100">
      <v-progress-circular
        :value="80"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col cols="12" class="flex">
        <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
          to="/administrator/produk/add"
          ><v-icon dark> mdi-plus </v-icon>Produk</v-btn
        >
        <downloadexcel
          class="btn"
          :data="getProducts"
          :fields="json_fields"
          :before-generate="startDownload"
          :before-finish="finishDownload"
          name="Data-Products.xls"
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
          color="warning"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
          ><v-icon dark> mdi-tray-arrow-down </v-icon>Download PDF</v-btn
        > -->
      </v-col>
    </v-row>
    <v-row class="mt-0">
      <v-col cols="12" sm="8" md="5">
        <v-text-field
          solo
          v-model="search_code"
          label="Cari Kode Produksi"
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
          :items="getProducts"
          :search="search_code"
          class="elevation-1"
        >
          <template v-slot:[`item.id`]="{ item }">
            <v-icon class="black--text h6 pl-1" @click="detailProduct(item)"
              >mdi-information-outline
            </v-icon>

            <v-icon
              color="success"
              @click="editProduct(item)"
              class="black--text h6 pl-1"
              >mdi-pencil</v-icon
            >
            <v-icon color="error" class="h6 pl-1" @click="deleteProduct(item)"
              >mdi-trash-can-outline</v-icon
            >
            <!-- <v-icon
              color="warning"
              class="h6 pl-1"
              @click="downlaodProduct(item)"
              >mdi-tray-arrow-down</v-icon
            >
            <v-icon
              color="success"
              class="h6 pl-1"
              @click="downlaodProduct(item)"
              >mdi-tray-arrow-down</v-icon
            > -->
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import downloadexcel from "vue-json-excel";

export default {
  name: "Produk",
  layout: "administrator",
  components: {
    downloadexcel,
  },
  async fetch({ store, route }) {
    await store.dispatch("product/getProducts");
  },
  data() {
    return {
      isLoading: false,
      search_code: "",
      headers: [
        // {
        //   text: "NO",
        //   align: "start",
        //   filterable: false,
        //   value: "no",
        //   class: "white--text blue",
        // },
        { text: "KODE PRODUKSi", value: "code", class: "white--text blue" },
        { text: "NAMA PRODUK", value: "name", class: "white--text blue" },
        {
          text: "TANGGAL PEMBUATAN",
          value: "created_at",
          filterable: false,
          class: "white--text blue",
        },
        {
          text: "TANGGAL RILIS",
          value: "created_at",
          filterable: false,
          class: "white--text blue",
        },
        {
          text: "AKSI",
          value: "id",
          filterable: false,
          class: "white--text blue",
        },
      ],
      json_fields: {
        "Kode Produksi": {
          field: "code",
          callback: (value) => {
            return value;
          },
        },
        "Nama Produk": "name",
        "Tanggal Pembuatan": "created_at",
        "Tanggal Rilis": "created_at",
      },
    };
  },
  methods: {
    detailProduct(id) {
      this.$router.push({ name: "administrator-produk-detail-id", params: id });
    },
    editProduct(id) {
      this.$router.push({ name: "administrator-produk-id", params: id });
    },
    async deleteProduct(id) {
      await this.$api.$delete(`/api/v1/product/${id.id}`).then(async (res) => {
        if (res.code === 200) {
          await this.$store.dispatch("product/getProducts");
        }
      });
    },
    downloadProduct(id) {},
    startDownload() {
      this.isLoading = true;
    },
    finishDownload() {
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters("product", ["getProducts"]),
  },
};
</script>
