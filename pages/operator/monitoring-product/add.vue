<template>
  <div>
    <v-card 
      elevation="1"
      class="pa-4">
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Nama Alat</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="tool_name"
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
          <b class="text-uppercase">Kode Produk</b>
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
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal Pembuatan</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            v-model="calender"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormattedMomentjs"
                clearable
                readonly
                required
                outlined
                dense
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
                @click:clear="created_date = null"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              v-model="created_date"
              @change="calender = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Kode Lokasi</b>
        </v-col>
        <v-col cols="9" class="mt-0">
          <v-text-field
            v-model="location_code"
            outlined
            dense
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-5 d-flex" align="center">
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            color="primary"
            elevation="2"
            class="text-capitalize mb-3 px-10"
          >VERIFIKASI PRODUK</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "OperatorProductAdd",
  layout: "operator",
  data() {
    return {
      calender:false,
      tool_name:"",
      product_code:"",
      created_date:"",
      location_code:"",
    }
  },
  computed:{
    computedDateFormattedMomentjs() {
      return this.created_date ? this.$moment(this.created_date).format("DD-MM-YYYY") : "";
    },
  }
};
</script>
