<template>
  <v-app>
    <v-overlay :value="getIsLoading">
      <v-progress-circular
        :value="80"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <Navbar />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Landing",
  middleware: "landing",
  computed: {
    ...mapGetters("user", ["getUserAuth", "getIsLoading"]),
    // isLoading: this.$store.getters["user/getIsLoading"],
  },
  mounted(){
    // console.log(this.getUserAuth)
  }
};
</script>
