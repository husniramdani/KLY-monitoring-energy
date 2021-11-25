<template>
  <v-app>
    <v-overlay :value="getIsLoading" :z-index="100">
      <v-progress-circular
        :value="80"
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-navigation-drawer v-model="drawer" fixed app class="shadow">
      <img class="m-auto mt-8 mb-4 w-10" src="~assets/images/logo.webp" alt="logo" />
      <div
        class="text-lg font-semibold py-2.5 px-2 text-center shadow mx-5 blue--text"
      >
        Operator
      </div>
      <v-list dense>
        <v-list-item
          to="/operator"
          router
          exact
          class="m-3 bg-blue-400 rounded-lg"
          @click="changeTitle('Dashboard Operator')"
        >
          <v-list-item-icon>
            <v-icon color="white">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-white">Dashboard</v-list-item-title>
        </v-list-item>

        <span class="text-sm ml-5 text-gray-700">Main Menu</span>
        <v-list-group :value="false" prepend-icon="mdi-chart-line-variant">
          <template v-slot:activator>
            <v-list-item-title>Alat Monitoring</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in items_monitoring"
            :key="i"
            :to="item.to"
            router
            exact
            @click="changeTitle(item.title_header)"
            class="m-3 rounded"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item
          v-for="(item, i) in items_menu"
          :key="i"
          :to="item.to"
          router
          exact
          @click="changeTitle(item.title_header)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <ButtonLogout />
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      flat
      class="my-6 mx-8 rounded"
      color="white"
      elevation="1"
    >
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main class="grey lighten-5">
      <v-container class="py-5 mt-5 px-8">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  middleware: "dashboard",
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      selectedItem: 0,
      items_monitoring: [
        {
          icon: "",
          title: "Daftar Produk",
          to: "/operator/monitoring-product",
          title_header:"Daftar Produk"
        },
        {
          icon: "",
          title: "Data PLTS",
          to: "/operator/monitoring-plts",
          title_header:"Semua Data PLTS"
        }
      ],
      items_menu: [
        {
          icon: "mdi-message-outline",
          title: "Hubungi Admin",
          to: "/operator/call-center",
          title_header:"Pesan Admin"
        },
        {
          icon: "mdi-account-outline",
          title: "Akun Saya",
          to: "/operator/account",
          title_header:"Profil Saya"
        }
      ],
      right: true,
      rightDrawer: false,
      title: "Dashboard Operator"
    };
  },
  methods:{
    changeTitle(title){
      this.title = title
    }
  },
  computed: {
    ...mapGetters("user", ["getIsLoading"]),
    // isLoading: this.$store.getters["user/getIsLoading"],
  },
  mounted(){
    console.log("here", this.$store.getters["user/getIsLoading"])
  }
};
</script>
