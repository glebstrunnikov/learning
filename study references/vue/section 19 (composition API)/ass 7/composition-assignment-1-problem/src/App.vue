<template>
  <h2 v-if="goalVisible">{{ goal }}</h2>
  <!-- <h2 v-if="goalVisible">{{ goal.data }}</h2> -->
  <!-- <h2 v-if="data.goalVisible.value">{{ data.goal.value }}</h2> -->

  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
export default {
  mounted() {
    console.log('privet');
  },
};
</script>

<script setup>
import { ref } from 'vue';
// import { reactive } from 'vue';
// import { reactive, toRefs } from 'vue';

const goal = ref('Learn Vue');
let goalVisible = ref(true);
function toggleGoal() {
  goalVisible.value = !goalVisible.value;
}

// const data = reactive({
//   goal: 'Learn Vue',
//   goalVisible: true,
// });
// function toggleGoal() {
//   data.goalVisible = !data.goalVisible;
// }

// const dataRaw = reactive({ goal: 'Learn Vue', goalVisible: true });
// const data = toRefs(dataRaw);
// function toggleGoal() {
//   console.log(data.goalVisible.value);
//   data.goalVisible.value = !data.goalVisible.value;
// }
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
