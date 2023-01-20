<template>
  <form @submit.prevent="$emit('set-user', this.$refs.currentName, currentAge)">
    <label for="name">Name</label>
    <!-- <input v-model="currentName" type="text" name="name" /> -->
    <input ref="currentName" type="text" name="name" />
    <br />
    <label for="age">Age</label>
    <input v-model="currentAge" type="number" name="age" />
    <br />
    <button>Set</button>
  </form>
</template>

<script>
export default {
  emits: ["set-user"],
  data() {
    return {
      currentAge: "",
    };
  },
};
</script>
