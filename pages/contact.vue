<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <br><br>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" class="mb-5">
              <v-card  elevation="1" class="mx-auto" outlined>
                <v-row class="mt-5">
                  <v-col cols="12" class="text-center">
                    <span class="font-weight-bold">Need Support?</span><br/>
                    <span class="body-2">Contact us if you need further assistance.</span>
                  </v-col>
                </v-row>
                <v-row justify="center" class="my-5">
                  <v-col cols="6" sm="6">
                    <v-btn depressed large block color="primary" class="text-capitalize">Send Message</v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <img
                class="m-auto float-sm-right md:w-11/12"
                src="~assets/images/customer-support-1.webp"
                alt="customer-support-1"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <br><br><br>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  layout: "landing",
  data() {
    return {
      email:"",
      name:"",
      message:"",
      rules: {
          name: [
            val => val.length <= 20 || `Max 20 characters!`,
          ],
          email: [
            val => {
              if(val.length > 0) {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(val) || 'Invalid e-mail.';
              } else {
                return true
              }
            }
          ],
        },
    };
  }
};
</script>
