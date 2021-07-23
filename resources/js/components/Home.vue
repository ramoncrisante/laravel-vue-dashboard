<template>
  <div>
    <h1 v-if="user">Welcome {{ user.first_name }} {{ user.last_name }}!</h1>
    <h1 v-if="!user">Hello!</h1>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },
  async created() {
    const response = await axios.get("user");
    this.user = response.data;
  },
};
</script>