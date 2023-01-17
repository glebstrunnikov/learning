<template>
  <button @click="addOne">Add</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    addOne() {
      //   this.$store.state.counter++;
      //   this.$store.commit('increment');
      //   this.$store.commit('increment', { value: 2 });
      //   this.$store.commit({
      //     type: 'increment',
      //     value: 2,
      //   });
      //   this.$store.dispatch({
      //     type: 'increment',
      //     value: 2,
      //   });
      this.localIncrementName({ value: 2 });
    },

    // ...mapActions(['increment']),
    ...mapActions({ localIncrementName: 'increment' }),
  },
};
</script>
