<template>
  <div>
    <v-card elevation="1" class="pa-4">
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Nama Produk</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="product_name"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Kode Produksi</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="product_code"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Waktu Pembuatan</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="time_created"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row> -->
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal Pembuatan</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="created_date"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Waktu Release</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="release_time"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal Release</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="release_date"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row> -->
      <v-row class="mt-5 d-flex" align="center">
        <v-col cols="12" class="d-flex justify-end pt-1">
          <v-btn
            color="success"
            elevation="2"
            class="text-capitalize mb-3 px-10 mr-5"
            @click="editProduct"
            ><v-icon dark class="pr-1"> mdi-pencil </v-icon>Edit</v-btn
          >
          <v-btn
            color="primary"
            elevation="2"
            class="text-capitalize mb-3 px-10"
            to="/administrator/operator-produk"
            ><v-icon dark class="pr-1"> mdi-arrow-left </v-icon> Kembali</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AdministratorDetailProduct",
  layout: "administrator",
  data() {
    const { code, name, created_at } = this.$route.params;
    return {
      product_name: name ? name : "-",
      product_code: code ? code : "-",
      created_date: created_at ? created_at : "-",
      release_date: "",
      time_created: null,
      release_date: null,
    };
  },
  methods: {
    cancel() {},
    editProduct(id) {
      this.$router.push({ name: "administrator-operator-produk-id", params: this.$route.params });
    },
  },
};
</script>
