<template>
  <v-container class="px-10 mt-10">
    <div class="max-w-landing m-auto">
      <v-row no-gutters class="flex justify-between">
        <v-col cols="12" sm="5">
          <p class="font-weight-bold text-h6">Tentang</p>
          <p class="text-body-2">
            Website ini merupakan website yang digunakan untuk memantau energi
            dari jarak jauh guna mengetahui kejadian yang tidak terduga serta
            untuk memudahkan engineer untuk maintenance.
          </p>
        </v-col>
        <v-col cols="12" sm="5">
          <p class="font-weight-bold text-h6">Alamat</p>
          <div class="text-body-2">
            <span class="flex items-center mb-2">
              <span><ph-phone :size="22" color="#2196F3"/></span>
              <span class="ml-3"> +62 xxx xxxx xxxx</span>
            </span>
            <span class="flex items-center mb-2">
              <span><ph-map-pin :size="22" color="#2196F3"/></span>
              <span class="ml-3"
                >Bulaksumur, Catur Tunggal, Kec. Depok, Kabupaten Sleman, Daerah
                Istimewa Yogyakarta 55281</span
              >
            </span>
            <span class="flex items-center mb-2">
              <span><ph-envelope-simple :size="22" color="#2196F3"/></span>
              <span class="ml-3">energisuhono@gmail.com</span>
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { PhPhone, PhMapPin, PhEnvelopeSimple } from "phosphor-vue";
export default {
  name: "Footer",
  components: {
    PhPhone,
    PhMapPin,
    PhEnvelopeSimple
  }
};
</script>
