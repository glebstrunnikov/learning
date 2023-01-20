<template>
  <base-card>
    <h1>Requests received</h1>
    <request-card
      v-for="(letter, index) in letters"
      :key="index"
      :name="letter.name"
      :email="letter.email"
      :text="letter.message"
    ></request-card
  ></base-card>
</template>

<script>
import RequestCard from "../RequestCard.vue";
export default {
  components: { RequestCard },
  computed: {
    letters() {
      return this.$store.getters.returnLetters;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
