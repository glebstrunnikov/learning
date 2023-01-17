<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <h2>Father value: {{ testValue }}</h2>
  <button @click="add">add father</button>
  <test-switch></test-switch>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TestSwitch from "./components/TestSwitch.vue";
// import { computed } from "vue";

export default {
  data() {
    return {
      testValue: 10,
    };
  },
  provide() {
    // return { testValue: computed(() => this.testValue) };
    return { testValue: this.testValue };
  },
  name: "App",
  components: {
    HelloWorld,
    TestSwitch,
  },
  methods: {
    add() {
      this.testValue++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
