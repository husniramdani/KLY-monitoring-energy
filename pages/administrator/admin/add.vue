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
            :rules="rules.fullname"
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
          <b class="text-uppercase">Email</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="email"
            :rules="rules.email"
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
          <b class="text-uppercase">Username</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="username"
            :rules="rules.username"
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
          <b class="text-uppercase">Password</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="password"
            :rules="rules.fullname"
            type="password"
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
            color="error"
            elevation="2"
            class="text-capitalize mb-3 px-10 mr-5"
            to="/administrator/admin"
          ><v-icon dark class="pr-1"> mdi-cancel </v-icon> Batal</v-btn>
          <v-btn
            color="primary"
            elevation="2"
            class="text-capitalize mb-3 px-10"
            @click="submitRequest"
          ><v-icon dark class="pr-1"> mdi-folder-outline </v-icon>Simpan</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AdministratorAddAdmin",
  layout: "administrator",
  data() {
    return {
      photo:"",
      fullname:"",
      username:"",
      password:"",
      email:"",
      rules: {
        fullname: [
          val => val.length <= 20 || `Max 20 characters!`,
        ],
        username: [
          val => val.includes(" ") == false || `No spaces allowed`,
        ],
        email: [
          val => {
            if(val.length > 0) {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(val) || 'Invalid e-mail.';
            } else {
              return true
            }
          }
        ],
        password: [
          val => val.length >= 6 || `Min 6 characters!`,
        ],
      },
    }
  },
  methods:{
      submitRequest(){
          this.$router.push({ name : "administrator-admin"})
      }
  }
};
</script>
