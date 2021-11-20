<template>
  <v-col
    cols="12"
    md="auto"
    class="white--text text-center px-5 py-3 px-md-10 py-md-7 card-category mt-4 mt-md-0"
  >
    <v-row v-if="customize === true" justify="space-around">
      <v-col cols="auto">
        <p class="font-weight-light mb-0">{{ title }}</p>
        <b>{{ value }} {{ unit }}</b>
      </v-col>
      <div heigt="100%" class="border-left"></div>
      <v-col cols="auto">
        <p class="font-weight-light mb-0">Jumlah Baterai</p>
        <b>{{value2}} Unit</b>
      </v-col>
    </v-row>
    <div v-else>
      <p class="font-weight-light mb-0">{{ title }}</p>
      <b>{{ value }} {{ unit }}</b>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "CardCalculatorResult",
  props: {
    title: { type: String, required: true, default: "Title" },
    value: { type: String, required: true, default: "0" },
    value2: { type: String, required: false, default: "0" },
    customize: { type: Boolean, required: false, default: false },
    unit: { type: String, required: true }
  }
};
</script>
<style scoped>
.border-left {
  border-right: 1px solid white;
}
</style>
