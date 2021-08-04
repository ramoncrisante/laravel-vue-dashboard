<template>
  <div>
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  async created() {
    /* const response = await axios.get("user");
    this.$store.dispatch('user', response.data); */
  },
};
</script>

<style>
</style>