<template>
  <ul>
    <li v-for="goal in goals" :key="goals[goal]">
      <slot :item="goal" moreData="(or not)"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["keep calm", "drink tea", "smoke bamboo"],
    };
  },
};
</script>
