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
          <v-menu
            ref="menu"
            v-model="time_created_model"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time_created"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time_created"
                readonly
                outlined
                dense
                v-bind="attrs"
                hide-details="auto"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="time_created_model"
              v-model="time_created"
              format="24hr"
              full-width
              @click:minute="$refs.menu.save(time_created)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal Pembuatan</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            v-model="calender_created_date"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedCreatedDateFormat"
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
              :max="release_date"
              v-model="created_date"
              @change="calender_created_date = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Waktu Release</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            ref="menu1"
            v-model="time_release_model"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time_release"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time_release"
                readonly
                outlined
                dense
                v-bind="attrs"
                hide-details="auto"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="time_release_model"
              v-model="time_release"
              format="24hr"
              full-width
              @click:minute="$refs.menu1.save(time_release)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal Release</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            v-model="calender_release_date"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedReleaseDateFormat"
                clearable
                readonly
                required
                outlined
                dense
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
                @click:clear="release_date = null"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              :min="created_date"
              v-model="release_date"
              @change="calender_release_date = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row> -->
      <v-row class="mt-5 d-flex" align="center">
        <v-col cols="12" class="d-flex justify-end pt-1">
          <v-btn
            color="error"
            elevation="2"
            class="text-capitalize mb-3 px-10 mr-5"
            to="/administrator/produk"
            ><v-icon dark class="pr-1"> mdi-cancel </v-icon> Batal</v-btn
          >
          <v-btn
            color="primary"
            elevation="2"
            class="text-capitalize mb-3 px-10"
            @click="submitRequest"
            ><v-icon dark class="pr-1"> mdi-folder-outline </v-icon
            >Simpan</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AdministratorEditProduct",
  layout: "administrator",
  data() {
    const { code, name, id } = this.$route.params;
    return {
      product_id: id ? id : null,
      product_name: name ? name : "-",
      product_code: code ? code : "-",
      calender_release_date: false,
      calender_created_date: false,
      created_date: "",
      release_date: "",
      time_created_model: false,
      time_created: null,
      time_release_model: false,
      time_release: null,
    };
  },
  computed: {
    computedCreatedDateFormat() {
      return this.created_date
        ? this.$moment(this.created_date).format("DD-MM-YYYY")
        : "";
    },
    computedReleaseDateFormat() {
      return this.release_date
        ? this.$moment(this.release_date).format("DD-MM-YYYY")
        : "";
    },
  },
  methods: {
    cancel() {},
    submitRequest() {
      let payload = {
        id: this.product_id,
        name: this.product_name,
        code: this.product_code,
      };
      this.$store.dispatch("product/editProduct", payload).then(async (res) => {
        await this.$store.dispatch("product/getProducts");
      });
      this.$router.push({ name: "administrator-produk" });
    },
  },
};
</script>
