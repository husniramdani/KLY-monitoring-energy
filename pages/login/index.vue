<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" class="mb-5">
              <v-card  elevation="1" class="mx-auto" outlined>
                <v-row class="mt-5">
                  <v-col cols="12" class="px-8">
                    <v-text-field
                      v-model="username"
                      :rules="rules.username"
                      outlined
                      filled
                      required
                      placeholder="Username"
                      hide-details="auto"
                      color="primary"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="px-8">
                    <v-text-field
                      v-model="password"
                      outlined
                      required
                      filled
                      type="password"
                      placeholder="Password"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="px-8">
                    <v-checkbox
                      class="mt-0"
                      v-model="rememberMe"
                      label="Remember Me"
                      color="primary"
                      hide-details="auto"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row justify="center" class="mt-10">
                  <v-col cols="6" md="6">
                    <v-btn depressed large block color="primary">Log In</v-btn>
                  </v-col>
                </v-row>
                <v-row justify="center" class="mb-5">
                  <v-col class="px-8 text-center" cols="12">
                    <nuxt-link to="/" class="primary--text font-weight-light">Forgetten Your Password</nuxt-link>
                  </v-col>
                  <v-col class="px-8 text-center text-sm-body-2 .text-md-caption mt-5">
                    Don't have an account? 
                    <nuxt-link to="/register" class="primary--text">Sign Up</nuxt-link>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col>
              <img
                class="m-auto float-sm-right w-10/12 md:w-10/12"
                src="~assets/images/login.webp"
                alt="login-1"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  layout: "landing",
  data() {
    return {
      username:"",
      password:"",
      rememberMe:"",
      rules: {
        username: [
          val => val.includes(" ") == false || `No spaces allowed`,
        ],
        
      },
    };
  }
};
</script>
