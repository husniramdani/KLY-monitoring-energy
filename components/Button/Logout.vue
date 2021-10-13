<template>
  <div class="absolute bottom-0 w-full p-3">
    <v-btn outlined color="red" block @click="onLogout">
      <v-icon light>
        mdi-exit-to-app
      </v-icon>
      Log Out
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ButtonLogout",
  methods: {
    onLogout() {
      console.log("logout");
    }
  }
};
</script>
