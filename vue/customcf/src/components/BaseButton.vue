<template>
  <button :class="btnType" class="btn">{{ btnName }}</button>
</template>

<script>
export default {
  props: {
    btnName: String,
    btnType: {
      type: String,
      default: "btn-primary",
    },
  },
};
</script>

<style scoped>
button {
  border-radius: 2rem;
}
</style>
