<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row>
        <v-col cols="12" sm="6"
          ><p class="font-weight-medium text-h4 text-md-h3">
            Energy Monitoring System
          </p>
          <p class="text-body-2">
            Make smart decisions about your energy use. You will be surprised
            with the amount of Savings!Make smart decisions about your energy
            use. You will be surprised with the amount of Savings!
          </p>
          <v-btn depressed large color="primary" class="d-none d-sm-block"
            >Get It Now</v-btn
          >
        </v-col>
        <v-col>
          <img
            class="m-auto float-sm-right w-10/12 md:w-9/12"
            src="~assets/images/landing-1.webp"
            alt="landing-1"
          />
        </v-col>
      </v-row>
      <v-row class="d-sm-none">
        <v-col class="d-flex justify-center"
          ><v-btn depressed large color="primary">Get It Now</v-btn></v-col
        >
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  layout: "landing",
  data() {
    return {};
  }
};
</script>
