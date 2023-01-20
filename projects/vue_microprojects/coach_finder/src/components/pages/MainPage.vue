<template>
  <div>
    <the-finder></the-finder>
    <base-card>
      <coach-card
        v-for="(coach, index) in coaches"
        :key="coach.name"
        :id="index"
      ></coach-card>
    </base-card>
  </div>
</template>

<script>
import TheFinder from "../TheFinder.vue";
import CoachCard from "../CoachCard.vue";
export default {
  components: { TheFinder, CoachCard },
  computed: {
    coaches() {
      return this.$store.getters.returnCoaches;
    },
  },
};
</script>
