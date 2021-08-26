<template>
  <div>
    <Nav />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="p-5">
              <div class="alert alert-success" role="alert" v-if="emailResent">
                A fresh verification link has been sent to your email address.
              </div>
              <div class="text-center" v-if="isLoading">
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <p>
                Before proceeding, please check your email for a verification
                link. If you did not receive the email,
                <a href="#" @click.prevent="resendEmail"
                  >click here to request another.</a
                >
              </p>
              <hr />
              <div class="text-center">
                <router-link class="small" to="/register"
                  >Create an Account!</router-link
                >
              </div>
              <div class="text-center">
                <router-link class="small" to="/login"
                  >Already have an account? Login!</router-link
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
import Nav from "../../components/Nav";
import LoadingButton from "../../components/LoadingButton";

export default {
  name: "Verify",
  components: {
    Nav,
    LoadingButton,
  },
  data() {
    return {
      isLoading: false,
      emailResent: false,
    };
  },
  methods: {
    async resendEmail() {
      this.isLoading = true;
      try {
        await axios.get(`email/resend/${this.$route.params.id}`);
        this.isLoading = false;
        this.emailResent = true;
      } catch (error) {
        this.isLoading = false;

        // notify error message
        let toast = Vue.toasted.show(error.response.data.msg, {
          theme: "toasted-primary",
          position: "top-right",
          duration: 5000,
        });
      }
    },
  },
};
</script>