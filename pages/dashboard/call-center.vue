<template>
  <div>
    <v-row>
      <v-col cols="3">
        <v-card 
          elevation="1"
          class="pa-4">
          <span class="blue--text">WhatsApp</span><br>
          <span class="grey--text mt-2">+62*********</span><br>
          <v-btn 
            depressed
            small
            color="primary"
            target="_blank"
            class="mt-3 py-4" @click="step=1, result=0"
            href="https://api.whatsapp.com/send?phone=+6289630223381&text=Dear%20Admin">
            <v-icon dark> mdi-send-outline  </v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "call-center",
  layout: "dashboard"
};
</script>
