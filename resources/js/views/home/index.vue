<template>
  <div>
    <Nav />
    <h1>Welcome to Laravel & Vue Sb admin</h1>
    <router-link to="/admin"> Go to dashboard </router-link>
  </div>
</template>

<script>
import Nav from "../../components/Nav";

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>
