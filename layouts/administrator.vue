<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app class="shadow relative">
      <img class="m-auto mt-8 mb-4 w-10" src="~assets/images/logo.webp" alt="logo" />
      <div
        class="text-lg font-semibold py-2.5 px-2 text-center shadow mx-5 blue--text"
      >
        Administrator
      </div>
      <v-list dense>
        <v-list-item
          to="/administrator"
          router
          exact
          class="m-3 bg-blue-400 rounded-lg"
        >
          <v-list-item-icon>
            <v-icon color="white">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="text-white" @click="title= 'Dashboard Administrator'">Dashboard</v-list-item-title>
        </v-list-item>

        <span class="text-sm ml-5 text-gray-700">Administrator Menu</span>
        <v-list-group :value="false" prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-title>Master User</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in items_user"
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

        <v-list-group :value="false" prepend-icon="mdi-format-list-bulleted">
          <template v-slot:activator>
            <v-list-item-title>Daftar Produk</v-list-item-title>
          </template>
          <v-list-item
            v-for="(item, i) in items_produk"
            :key="i"
            :to="item.to"
            @click="changeTitle(item.title_header)"
            router
            exact
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
      <v-toolbar-title class="text-uppercase" v-text="title" />
      <v-spacer />
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main class="grey lighten-5">
      <v-container class="py-10 mt-5 px-8">
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
      items_user: [
        {
          icon: "",
          title: "Daftar Admin",
          to: "/administrator/daftar-admin",
          title_header:"Daftar Admin"
        },
        {
          icon: "",
          title: "Daftar Operator",
          to: "/administrator/daftar-operator",
          title_header:"Daftar Operator"
        }
      ],
      items_produk: [
        {
          icon: "",
          title: "Produk",
          to: "/administrator/produk",
          title_header:"Daftar Produk"
        },
        {
          icon: "",
          title: "Operator Produk",
          to: "/administrator/operator-produk",
          title_header:"Daftar Operator Produk"
        }
      ],
      items_menu: [
        {
          icon: "mdi-account-outline",
          title: "Akun Saya",
          to: "/administrator/account",
          title_header:"Profil Saya"
        }
      ],
      right: true,
      rightDrawer: false,
      title: "Dashboard Administrator"
    };
  },
  computed: {
    ...mapGetters("user", ["getUserAuth"]),
  },
  methods:{
    changeTitle(title){
      console.log("Test")
      this.title = title
    }
  }
};
</script>
