<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form class="user" @submit.prevent="register">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="First Name"
                      v-model="first_name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Last Name"
                      v-model="last_name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="exampleInputEmail"
                    placeholder="Email Address"
                    v-model="email"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleInputPassword"
                      placeholder="Password"
                      v-model="password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                      v-model="password_confirm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-user btn-block"
                >
                  Register Account
                </button>
              </form>
              <hr />
              <div class="text-center">
                <a class="small" href="forgot-password.html"
                  >Forgot Password?</a
                >
              </div>
              <div class="text-center">
                <a class="small" href="login.html"
                  >Already have an account? Login!</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async register() {
      await axios.post("register", {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm,
      });

      this.$router.push('/login');
    },
  },
};
</script>