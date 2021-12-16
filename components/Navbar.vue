<template>
  <div>
    <v-container class="px-10">
      <div class="max-w-landing m-auto">
        <v-row
          no-gutters
          class="flex items-center justify-between h-16 sm:h-22"
        >
          <v-col cols="6" sm="2" md="3" class="">
            <nuxt-link to="/" class="text-xl font-semibold">
              <img class="w-10" src="~assets/images/logo.webp" alt="logo" />
            </nuxt-link>
          </v-col>
          <v-col cols="6" class="d-none d-sm-block text-center space-x-8">
            <nuxt-link class="text--darken-2 grey--text" to="/"
              >Beranda</nuxt-link
            >
            <nuxt-link class="text--darken-2 grey--text" to="/calculator"
              >Kalkulator</nuxt-link
            >
            <nuxt-link class="text--darken-2 grey--text" to="/contact"
              >Kontak</nuxt-link
            >
          </v-col>
          <v-col cols="4" md="3" class="d-none d-sm-block text-right">
            <nuxt-link to="/login" class="mr-6 font-semibold">Masuk</nuxt-link>
            <v-btn color="primary" depressed @click="onDemo"
              >Demo <ph-arrow-right class="ml-1" :size="16"
            /></v-btn>
          </v-col>
          <v-col cols="6" class="d-sm-none text-right">
            <v-btn
              small
              class="mx-2"
              fab
              color="primary"
              @click.stop="drawer = !drawer"
            >
              <v-icon> mdi-format-list-bulleted-square </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <!-- <v-list-item-content>
          <v-btn color="primary">logout</v-btn>
        </v-list-item-content> -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <nuxt-link class="text--darken-2 grey--text flex" :to="item.to">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </nuxt-link>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <nuxt-link class="text--darken-2 grey--text" to="/login">
              <v-btn color="primary">Login</v-btn>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <nuxt-link class="text--darken-2 grey--text" to="/dashboard/demo">
            <v-btn color="primary">Demo</v-btn>
            </nuxt-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { PhArrowRight } from "phosphor-vue";
export default {
  name: "Navbar",
  components: {
    PhArrowRight,
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard", to: "/" },
        { title: "Kalkulator", icon: "mdi-forum", to: "/calculator" },
        { title: "Contact", icon: "mdi-forum", to: "/contact" },
      ],
    };
  },
  methods: {
    onDemo() {
      this.$router.push({
        name: "dashboard-demo",
        path: "/dashboard/demo",
      });
    },
  },
};
</script>
