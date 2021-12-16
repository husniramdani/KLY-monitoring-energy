<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-text class="mt-5" align="center">
          <div align="center" class="d-block mb-3">
            <v-icon 
              class="grey--text h6 pl-1"
              size="100"
            >mdi-alert-circle-outline</v-icon>
          </div>
          Silahkan membeli produk terlebih dahulu</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="clickOke"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
  export default {
    name: "Notifications",
    props:{
      dialog: {
        type: Boolean,
        required: true,
      },
      onHandlerYes: {
        type: Function,
        required: false,
      },
    },
    data () {
      return {
        dialog_: this.dialog,
      }
    },
    methods:{
      clickOke() {
        this.onHandlerYes();
      }
    }
  }
</script>

<style scoped>
.title-content {
  font-size: 20px;
  font-weight: 700;
}
</style>