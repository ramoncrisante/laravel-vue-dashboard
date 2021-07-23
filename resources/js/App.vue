<template>

  <div>
    <Nav  />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue"
import axios from 'axios'

export default {
  components: {
    Nav,
  },
  async created() {
    const response = await axios.get("user");
    this.$store.dispatch('user', response.data);
  },
};
</script>

<style>
</style>