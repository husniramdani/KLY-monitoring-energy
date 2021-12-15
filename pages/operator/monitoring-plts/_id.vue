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
        <downloadexcel
          class="btn"
          :data="getProductDetails"
          :fields="json_fields"
          :before-generate="startDownload"
          :before-finish="finishDownload"
          name="Data-Detail-Products.xls"
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
      </v-col>
    </v-row>
    <!-- <v-row class="mt-0">
      <v-col cols="12" sm="8" md="5">
        <v-text-field
          solo
          v-model="search_code"
          label="Cari Kode Produksi"
          prepend-inner-icon="mdi-magnify"
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row> -->
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="getProductDetails"
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
  name: "OperatorDetailMonitoringPlts",
  layout: "operator",
  components: {
    downloadexcel,
  },
  async fetch({ store, route }) {
    const { query } = route;
    await store.dispatch("product/getProductDetails", query);
  },
  data() {
    return {
      isLoading: false,
      search_code: "",
      headers: [
        {
          text: "LUX-Intensitas Cahaya (Lux)",
          value: "lux_intensitas_cahaya",
          class: "white--text blue",
          align: "center"
        },
        {
          text: "IRR-Intensitas Irradian Cahaya (W/m2)",
          value: "irr_intensitas_irradian_cahaya",
          class: "white--text blue",
          align: "center"
        },
        {
          text: "SUD-Suhu Udara (C)",
          value: "sud_suhu_udara",
          filterable: false,
          class: "white--text blue",
          align: "center"
        },
        {
          text: "KUD-Kelembapan Udara (%RH)",
          value: "kud_kelembapan_udara",
          filterable: false,
          class: "white--text blue",
          align: "center"
        },
        {
          text: "Tanggal",
          value: "date",
          filterable: false,
          class: "white--text blue",
          align: "center"
        },
      ],
      json_fields: {
        "LUX-Intensitas Cahaya (Lux)": "lux_intensitas_cahaya",
        "IRR-Intensitas Irradian Cahaya (W/m2)": "irr_intensitas_irradian_cahaya",
        "SUD-Suhu Udara (C)": "sud_suhu_udara",
        "KUD-Kelembapan Udara (%RH)": "kud_kelembapan_udara",
        "Tanggal": "date",
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
          created_at: data.created_at,
        },
      });
    },
    startDownload() {
      this.isLoading = true;
    },
    finishDownload() {
      this.isLoading = false;
    },
  },
  computed: {
    ...mapGetters("product", ["getProducts", "getProductDetails"]),
    ...mapGetters("user", ["getUserDetail"]),
  },
  async mounted() {
    // const id = this?.getUserDetail?.id || null;
    // await this.$store.dispatch("product/getProductsByUserId", id);
  },
};
</script>
