<template>
  <h2>{{ userName }}</h2>
  <h3>{{ userAge }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from '@vue/runtime-core';
export default {
  props: ['firstName', 'secondName'],
  setup(props, context) {
    const userName = computed(() => {
      return props.firstName + ' ' + props.secondName;
    });
    console.log(context);
    const userAge = inject('age');
    onBeforeMount(() => {
      console.log('onb4mount');
    });
    onMounted(() => {
      console.log('onmount');
    });
    onBeforeUpdate(() => {
      console.log('onb4upd');
    });
    onUpdated(() => {
      console.log('onupd');
    });
    onBeforeUnmount(() => {
      console.log('onb4unmt');
    });
    onUnmounted(() => {
      console.log('onunmt');
    });
    return { userName, userAge };
  },
};
</script>
