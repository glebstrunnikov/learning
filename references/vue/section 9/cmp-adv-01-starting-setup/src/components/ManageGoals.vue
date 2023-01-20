<template>
  <div>
    <h2>Manage</h2>
    <input type="text" ref="goalName" />
    <button @click="saveGoal">Set Goal</button>
    <teleport to="body">
      <err-alert v-if="inputInvalid"
        ><h2>Input is invalid!</h2>
        <p>Try again</p>
        <button @click="confirmError">OK</button></err-alert
      ></teleport
    >
  </div>
</template>

<script>
import ErrAlert from "./ErrAlert.vue";
export default {
  components: {
    ErrAlert,
  },
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    saveGoal() {
      const goalName = this.$refs.goalName.value;
      console.log(goalName);
      if (goalName === "") {
        this.inputInvalid = true;
      }
      console.log(this.inputInvalid);
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>
