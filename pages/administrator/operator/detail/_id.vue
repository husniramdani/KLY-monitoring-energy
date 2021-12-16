<template>
  <div>
    <v-card 
      elevation="1"
      class="pa-4">
      <!-- <v-row align="center">
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
      </v-row> -->
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Nama Operator</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="fullname"
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
            color="success"
            elevation="2"
            class="text-capitalize mb-3 px-10 mr-5"
            @click="edit"
          ><v-icon dark class="pr-1"> mdi-pencil </v-icon>Edit</v-btn>
          <v-btn
            color="primary"
            elevation="2"
            class="text-capitalize mb-3 px-10"
            to="/administrator/operator"
          ><v-icon dark class="pr-1"> mdi-arrow-left </v-icon> Kembali</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "AdministratorDetailOperator",
  layout: "administrator",
  data() {
    return {
      photo:"",
      fullname:this.$route.params.fullname,
      username:this.$route.params.username,
      email:this.$route.params.email,
    }
  },
  methods:{
    edit(){
      this.$router.push({ name : "administrator-operator-id", params : this.$route.params})
    }
  }
};
</script>
