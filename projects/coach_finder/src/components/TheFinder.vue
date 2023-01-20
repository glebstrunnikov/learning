<template>
  <base-card>
    <h2>Find your coach</h2>
    <label>
      <input
        @click="checkInterests"
        class="checkbox mar-left-5"
        checked
        ref="frontend"
        type="checkbox"
      /><span class="mar-left-3">Frontend</span>
    </label>
    <label>
      <input
        @click="checkInterests"
        class="checkbox mar-left-5"
        checked
        ref="backend"
        type="checkbox"
      /><span class="mar-left-3">Backend</span>
    </label>
    <label>
      <input
        @click="checkInterests"
        class="checkbox mar-left-5"
        checked
        ref="career"
        type="checkbox"
      /><span class="mar-left-3">Career</span>
    </label>
  </base-card>
</template>

<script>
export default {
  computed: {},
  methods: {
    checkInterests() {
      const newInterests = [];

      if (this.$refs.frontend.checked) {
        newInterests.push("frontend");
      }
      if (this.$refs.backend.checked) {
        newInterests.push("backend");
      }
      if (this.$refs.career.checked) {
        newInterests.push("career");
      }
      this.$store.dispatch("updateInterests", newInterests);
    },
  },
};
</script>
