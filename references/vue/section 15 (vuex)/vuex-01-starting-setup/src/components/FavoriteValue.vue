<template>
  <h3>{{ counter }}</h3>
  <p>moar</p>
</template>

<script>
export default {
  computed: {
    counter() {
      //   return this.$store.state.counter * 2;
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>
