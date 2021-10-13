<template>
  <v-app>
    <Navbar />
    <Nuxt />
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: "Landing",
  middleware: "landing"
};
</script>
