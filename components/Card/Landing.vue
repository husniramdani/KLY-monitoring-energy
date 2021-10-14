<template>
  <v-col cols="12" sm="4">
    <v-card elevation="1" class="mx-auto" outlined height="100%">
      <v-row class="pa-8">
        <v-col>
          <img
            class="w-2/12 md:w-3/12"
            :src="require(`~/assets/images/${content.image}`)"
            :alt="content.alt"
          />
        </v-col>
        <v-col cols="12">
          <p class="text-h6 text-md-h6 font-weight-medium">
            {{ content.title }}
          </p>
          <div class="line-decoration"></div>
        </v-col>
        <v-col cols="12">
          <p class="body-2">{{ content.description }}</p>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "CardLanding",
  props: ["content"]
};
</script>

<style scoped>
.line-decoration {
  height: 2px;
  width: 30%;
  background-color: #2196f3;
}
</style>
