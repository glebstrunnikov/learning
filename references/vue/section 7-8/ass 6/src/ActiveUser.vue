<template>
  <h2>{{ name }},</h2>
  <h3>{{ age }}</h3>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    name: {
      type: String,
      default: "Gleb",
    },
    age: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style></style>
