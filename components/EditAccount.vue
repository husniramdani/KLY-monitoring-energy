<template>
  <div>
    <v-card 
      elevation="1"
      class="pa-4">
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Foto</b>
        </v-col>
        <v-col cols="9">
          <v-file-input
            v-model="photo"
            outlined
            dense
            hide-details="auto"
            accept="image/*"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Nama Lengkap</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="fullname"
            outlined
            dense
            filled
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
          >Simpan</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "EditAccount",
  data() {
    return {
      photo:"",
      fullname:"Fullname here",
    }
  }
};
</script>
