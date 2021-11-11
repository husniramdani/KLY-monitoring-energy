<template>
  <div class="absolute bottom-0 w-full p-3">
    <v-btn outlined color="red" block @click="onLogout">
      <v-icon light>
        mdi-exit-to-app
      </v-icon>
      Keluar
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonLogout",
  methods: {
    onLogout() {
      this.$store.dispatch("user/onUserLogout");
      this.$cookit.removeAll()
      this.$router.push("/")
    }
  }
};
</script>
