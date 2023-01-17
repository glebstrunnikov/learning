<template>
  <h2>child value: {{ testValue }}</h2>
  <button @click="add">add child</button>
</template>

<script>
export default {
  data() {},
  inject: ["testValue"],
  methods: {
    add() {
      this.testValue.value++;
      console.log(this.testValue.value);
    },
  },
  mounted() {
    console.log(this.testValue.value);
  },
};
</script>
