<template>
  <div>
    <v-card elevation="1" class="pa-4">
      <!-- <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Foto</b>
        </v-col>
        <v-col cols="9">
          <v-file-input
            v-model="photo"
            outlined
            dense
            disabled
            hide-details="auto"
            accept="image/*"
          ></v-file-input>
        </v-col>
      </v-row> -->
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
            disabled
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">email</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="email"
            :rules="rules.email"
            outlined
            dense
            disabled
            filled
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
            filled
            disabled
            required
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
      <!-- <v-row align="center">
        <v-col cols="3">
          <b class="text-uppercase">Status</b>
        </v-col>
        <v-col cols="9">
          <v-text-field
            v-model="status"
            outlined
            dense
            filled
            required
            disabled
            hide-details="auto"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row> -->
      <!-- <v-row class="mt-5 d-flex" align="center">
        <v-col class="d-flex justify-end">
          <v-btn
            color="success"
            elevation="2"
            small
            class="text-capitalize mb-3"
            ><v-icon dark class="pr-1"> mdi-pencil </v-icon>Edit Data</v-btn
          >
        </v-col>
      </v-row> -->
    </v-card>
    <!-- <v-row class="mt-5 d-flex" align="center">
      <v-col cols="12" sm="6">
        <v-btn
          color="warning"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3 mr-3"
          ><v-icon dark> mdi-tray-arrow-down </v-icon>Download PDF</v-btn
        >
        <v-btn
          color="success"
          elevation="2"
          outlined
          small
          class="text-capitalize mb-3"
          ><v-icon dark> mdi-tray-arrow-down </v-icon>Download Excel</v-btn
        >
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Account",
  layout: "operator",
  async fetch({ store }) {
    await store.dispatch("user/getUserDetail");
  },
  data() {
    const { name, email, username } = this.$store.state.user.userDetail;

    return {
      photo: "",
      fullname: name ? name : "-",
      email: email ? email : "-",
      username: username ? username : "-",
      status: "statushere",
      rules: {
        email: [
          (val) => {
            if (val.length > 0) {
              const pattern =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(val) || "Invalid e-mail.";
            } else {
              return true;
            }
          },
        ],
        username: [(val) => val.includes(" ") == false || `No spaces allowed`],
      },
    };
  },
  computed: {
    ...mapGetters("user", ["getUserDetail"]),
  },
};
</script>
