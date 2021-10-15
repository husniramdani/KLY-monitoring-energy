<template>
  <v-app>
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
    ...mapGetters("user", ["getUserAuth"]),
  },
  mounted(){
    // console.log(this.getUserAuth)
  }
};
</script>
