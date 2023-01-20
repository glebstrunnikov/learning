<template>
  <li>
    <h3>{{ userNameShown }}</h3>
    <button @click="viewProjects">View Projects</button>
  </li>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: ['id', 'userName'],
  emits: ['list-projects'],
  setup(props, ctx) {
    const userNameShown = computed(() => {
      return props.userName;
    });
    const id = computed(() => {
      return props.id;
    });
    function viewProjects() {
      ctx.emit('list-projects', id.value);
    }
    return {
      userNameShown,
      viewProjects,
    };
  },
  // methods: {
  //   viewProjects() {
  //     this.$emit('list-projects', this.id);
  //   },
  // },
};
</script>

<style scoped>
li {
  margin: 0.5rem 0;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border: 1px solid #ccc;
}

li h3 {
  margin: 0;
}
</style>
