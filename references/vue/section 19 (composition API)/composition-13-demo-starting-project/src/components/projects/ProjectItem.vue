<template>
  <li>
    <h3>{{ projectTitle }}</h3>
  </li>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: ['title'],
  setup(props) {
    const title = computed(() => {
      return props.title;
    });
    return { projectTitle: title };
  },
};
</script>

<style scoped>
li {
  background-color: #00006b;
  color: white;
  padding: 0.5rem;
  margin: 1rem 0;
}

li h3 {
  margin: 0;
}
</style>
