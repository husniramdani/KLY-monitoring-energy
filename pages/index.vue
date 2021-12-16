<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row>
        <v-col cols="12" sm="6"
          ><p class="font-weight-medium text-h4 text-md-h3">
            Sistem Pemantauan Energi
          </p>
          <p class="text-body-2">
            Buat keputusan cerdas tentang penggunaan energi Anda. Anda akan terkejut dengan jumlah Tabungan!
          </p>
          <!-- <v-btn depressed large color="primary" class="d-none d-sm-block"
            >Dapatkan Sekarang</v-btn
          > -->
        </v-col>
        <v-col>
          <img
            class="m-auto float-sm-right w-10/12 md:w-9/12"
            src="~assets/images/landing-1.webp"
            alt="landing-1"
          />
        </v-col>
      </v-row>
      <!-- <v-row class="d-sm-none">
        <v-col class="d-flex justify-center"
          ><v-btn depressed large color="primary">Dapatkan Sekarang</v-btn></v-col
        >
      </v-row> -->
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
          title : "Data Waktu Nyata",
          description : "Data dipantau dan ditampilkan secara real time di situs web untuk memudahkan pemantauan data.",
          image : "realtime-1.webp",
          alt: "realtime-1"
        },
        {
          title : "Pencadangan Data Otomatis",
          description : "Saat data dimonitor, data langsung masuk ke database kami sehingga kemungkinan data hilang sangat kecil.",
          image : "automatic-data-backup.webp",
          alt:"automatic-data-backup-1"
        },
        {
          title : "Kontrol Berbasis IoT",
          description : "Alat pemantau data ini menggunakan teknologi Internet of Things (IOT) sehingga data dapat dipantau dari jarak jauh.",
          image : "iot-based-control.webp",
          alt:"iot-based-control"
        }
      ]
    };
  }
};
</script>
