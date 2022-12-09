<template>
  <button
    :class="{
      btn: 1,
      'btn-primary': btnType === 'primary',
      'btn-secondary': btnType === 'secondary',
      'btn-thirdly': btnType === 'thirdly',
    }"
  >
    <h3>{{ btnText }}</h3>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    btnText: {
      type: String,
      default: "",
    },
    btnType: {
      type: String,
      default: "primary",
    },
  },
};
</script>
<style scoped>
h3 {
  margin: 0;
}
.btn {
  padding: 1rem;
  margin: 0.5rem;
  border-color: rgba(0, 0, 0, 0);
}
.btn:hover {
  border-color: rgb(22, 239, 29);
  cursor: pointer;
}
.btn-primary {
  color: white;
  background-color: rgb(8, 8, 46);
}
.btn-secondary {
  color: rgb(8, 8, 46);
  background-color: white;
}

.btn-thirdly {
  color: rgb(8, 8, 46);
  background-color: white;
  padding: 0.25rem;
}
</style>
