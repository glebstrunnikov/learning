<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="setTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['setTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>
