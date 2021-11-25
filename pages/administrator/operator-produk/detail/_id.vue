<template>
  <div>
    <v-card 
      elevation="1"
      class="pa-4">
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Nama Operator</b>
        </v-col>
        <v-col cols="9">
          <v-select
            :items="operatorList"
            v-model="operatorSelected"
            item-text="name"
            item-value="id"
            outlined
            dense
            filled
            hide-details="auto"
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Kode Produksi</b>
        </v-col>
        <v-col cols="9">
          <v-select
            :items="productList"
            v-model="productSelected"
            item-text="name"
            item-value="id"
            outlined
            dense
            filled
            hide-details="auto"
          ></v-select>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Tanggal</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            v-model="calender"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="computedDateFormat"
                clearable
                readonly
                required
                outlined
                dense
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
                @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker
              no-title
              v-model="date"
              @change="calender = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Waktu</b>
        </v-col>
        <v-col cols="9">
          <v-menu
            ref="menu1"
            v-model="time_model"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time"
                readonly
                outlined
                dense
                v-bind="attrs"
                hide-details="auto"
                v-on="on"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="time_model"
              v-model="time"
              format="24hr"
              full-width
              @click:minute="$refs.menu1.save(time)"
            ></v-time-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row class="mt-5 d-flex" align="center">
        <v-col cols="12" class="d-flex justify-end pt-1">
            <v-btn
                color="success"
                elevation="2"
                class="text-capitalize mb-3 px-10 mr-5"
                to="/administrator/operator-produk/1"
            ><v-icon dark class="pr-1"> mdi-pencil </v-icon>Edit</v-btn>
            <v-btn
                color="primary"
                elevation="2"
                class="text-capitalize mb-3 px-10"
                to="/administrator/operator-produk"
            ><v-icon dark class="pr-1"> mdi-arrow-left </v-icon> Kembali</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>

export default {
  name: "AdministratorEditOperatorProduct",
  layout: "administrator",
  data() {
    return {
      operatorList:[],
      operatorSelected:null,
      productList:[],
      productSelected:null,
      calender:false,
      date:"",
      time_model:false,
      time: null,
    }
  },
  computed:{
    computedDateFormat() {
      return this.date ? this.$moment(this.date).format("DD-MM-YYYY") : "";
    },
  },
  methods:{
    cancel(){
      
    },
    submitRequest(){
      // let payload = {
      //   name:this.tool_name,
	    //   code:this.product_code
      // }
      // this.$store.dispatch("product/addProduct", payload)
      // .then((response) => {
      //   if(response.code == 200){
      //     this.clearForm()
      //   }
      // })
      this.$router.push({ name : "administrator-operator-produk"})
    }
  }
};
</script>