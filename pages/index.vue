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
      <v-row class="mt-10">
        <CardLanding v-for="(content, index) in contents" :key="index" :content="content"/>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Home",
  layout: "landing",
  data() {
    return {
      contents : [
        {
          title : "Realtime Data",
          description : "Data is monitored and displayed in real time on the website for make it easier to monitor the data.",
          image : "realtime-1.webp",
          alt: "realtime-1"
        },
        {
          title : "Automatic Data Backup",
          description : "When the data is monitored, the data is directly entered into our database so the possibility of data being lost is very small.",
          image : "automatic-data-backup.webp",
          alt:"automatic-data-backup-1"
        },
        {
          title : "IoT Based Control",
          description : "This data monitoring device uses Internet of Things (IOT) technology so that data can be monitored remotely.",
          image : "iot-based-control.webp",
          alt:"iot-based-control"
        }
      ]
    };
  }
};
</script>