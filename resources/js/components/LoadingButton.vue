<template>
  <button
    type="submit"
    class="btn btn-primary btn-user btn-block"
    :disabled="isLoading"
  >
    <span v-if="!isLoading">{{ text }}</span>
    <div class="spinner-border text-light" role="status" v-if="isLoading">
      <span class="sr-only">Loading...</span>
    </div>
  </button>
</template>
<script>
export default {
  name: "LoadingButton",
  props: {
    text: String,
    isLoading: Boolean,
  },
};
</script>