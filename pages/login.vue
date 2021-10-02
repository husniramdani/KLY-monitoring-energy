<template>
  <v-container class="px-10 mt-md-10">
    <div class="max-w-landing m-auto">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="6" class="mb-5">
              <v-card elevation="1" class="mx-auto" outlined>
                <!-- form -->
                <form @submit.prevent="userLogin">
                  <v-row class="mt-5">
                    <v-col cols="12" class="px-8">
                      <v-text-field
                        v-model="email"
                        :rules="rules.email"
                        outlined
                        filled
                        required
                        placeholder="Email"
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
                      <v-btn type="submit" depressed large block color="primary"
                        >Log In</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row justify="center" class="mb-5">
                    <v-col class="px-8 text-center" cols="12">
                      <nuxt-link
                        to="/forgot-password"
                        class="primary--text font-weight-light"
                        >Forgetten Your Password</nuxt-link
                      >
                    </v-col>
                    <v-col
                      class="px-8 text-center text-sm-body-2 .text-md-caption mt-5"
                    >
                      Don't have an account?
                      <nuxt-link to="/register" class="primary--text"
                        >Sign Up</nuxt-link
                      >
                    </v-col>
                  </v-row>
                </form>
                <!-- end of form -->
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
      email: "",
      password: "",
      rememberMe: "",
      rules: {
        email: [
          val => {
            if (val.length > 0) {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return pattern.test(val) || "Invalid e-mail.";
            } else {
              return true;
            }
          }
        ]
      }
    };
  },
  methods: {
    async userLogin() {
      const params = {
        email: this.email,
        password: this.password
      };
      console.log(this.rememberMe)
      this.$api
        .$post("/auth/login", params)
        .then(async res => {
          const msg = res?.message || "Something when wrong!";
          console.log(res);
          const maxAge = this.rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 24
          if (res.code === 200) {
            this.$cookit.set("access-token", res.data.access_token.token, {
              maxAge,
              sameSite: "lax",
              path: "/"
            });
          }
        })
        .catch(err => {
          return err;
        });
    }
  }
};
</script>
