<template>
<v-app>
  <v-app-bar flat color="" class="px-32">
    <v-row no-gutters class="flex items-center justify-between">
      <v-col cols="12" sm="4" class="bg-blue-500">
        <p class="text-lg font-semibold">Logo</p>
      </v-col>
      <v-col cols="12" sm="4" class="bg-yellow-500 text-center space-x-4">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/calculator">Calculator</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </v-col>
      <v-col cols="12" sm="4" class="bg-red-500 text-right">
        <nuxt-link to="/login">Login</nuxt-link>
        <nuxt-link to="/dashboard">Demo</nuxt-link>
        <v-btn color="primary">button</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</v-app>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
