<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row>
        <v-col cols="12" sm="6"
          ><p class="font-weight-medium text-h4 text-md-h3">
            PLTS Calculator
          </p>
          <p class="text-body-2">
              Calculate how musch power you need with these solar calculators 
              to estimate the size and the cost of the solar panel array 
              needed for your home energy usage.
          </p>
          <div class="d-flex align-end">
            <v-btn depressed large color="primary" class="d-none d-sm-flex text-capitalize mr-5"
                to="/calculator/simple-mode">Simple Mode</v-btn>
            <v-btn depressed large color="primary" class="d-none d-sm-flex text-capitalize"
                >Advanced Mode</v-btn>
          </div>
        </v-col>
        <v-col>
          <img
            class="m-auto float-sm-right w-10/12 md:w-9/12"
            src="~assets/images/calculator-1.webp"
            alt="calculator-1"
          />
        </v-col>
      </v-row>
      <v-row class="d-sm-none mt-5">
        <v-col class="d-flex justify-center">
            <v-btn depressed large color="primary" class="text-capitalize mr-5">Simple Mode</v-btn>
            <v-btn depressed large color="primary" class="text-capitalize">Advanced Mode</v-btn>
        </v-col>
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
