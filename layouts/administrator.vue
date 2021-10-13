<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app class="shadow relative">
      <p class="text-xl text-center my-4 font-semibold">Logo</p>
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
          <v-list-item-title class="text-white">Dashboard</v-list-item-title>
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
      <v-container class="my-10 mx-8">
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
export default {
  middleware: "user",
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
          to: "/administrator/daftar-admin"
        },
        {
          icon: "",
          title: "Daftar Produk",
          to: "/administrator/daftar-operator"
        }
      ],
      items_produk: [
        {
          icon: "",
          title: "Produk",
          to: "/administrator/produk"
        },
        {
          icon: "",
          title: "Operator Produk",
          to: "/administrator/operator-produk"
        }
      ],
      items_menu: [
        {
          icon: "mdi-message-outline",
          title: "Pesan",
          to: "/administrator/call-center"
        },
        {
          icon: "mdi-account-outline",
          title: "Akun Saya",
          to: "/administrator/account"
        }
      ],
      right: true,
      rightDrawer: false,
      title: "Dashboard Administrator"
    };
  }
};
</script>
