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
        <!-- <v-btn
          color="accent"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
          to="/operator/monitoring-product/add"
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
        </downloadexcel> -->
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
          :headers="headers"
          :items="getProducts"
          :search="search_code"
          class="elevation-1"
        >
          <template v-slot:[`item.id`]="{ item }">
            <v-btn
              color="accent"
              elevation="2"
              outlined
              small
              class="text-capitalize"
              @click="detailProduct(item)"
            >
              Detail
            </v-btn>
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
  name: "OperatorMonitoringPlts",
  layout: "operator",
  components: {
    downloadexcel,
  },
  data() {
    return {
      isLoading: false,
      search_code: "",
      headers: [
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
          align: 'center',
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
    detailProduct(data) {
      this.$router.push({
        name: "operator-monitoring-plts-id",
        params: data,
        query: {
          code: data.code,
          created_at: data.created_at
        }
      });
    },
  },
  computed: {
    ...mapGetters("product", ["getProducts"]),
    ...mapGetters("user", ["getUserDetail"]),
  },
  async mounted() {
    const id = this?.getUserDetail?.id || null;
    await this.$store.dispatch("product/getProductsByUserId", id);
  },
};
</script>
