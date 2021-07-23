<template>
  <div>
    <h1 v-if="user">Welcome {{ user.first_name }} {{ user.last_name }}!</h1>
    <h1 v-if="!user">Hello!</h1>
  </div>
</template>

<script>
import axios from "axios"
import {mapGetters} from 'vuex'

export default {
  name: "Home",
  computed: {
      ...mapGetters(['user'])
    }
};
</script>