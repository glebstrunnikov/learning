<template>
  <ul>
    <li>
      <button
        @click="setRating(5)"
        :class="{ active: rating === 5 }"
        type="button"
      >
        5
      </button>
    </li>
    <li>
      <button
        @click="setRating(4)"
        :class="{ active: rating === 4 }"
        type="button"
      >
        4
      </button>
    </li>
    <li>
      <button
        @click="setRating(3)"
        :class="{ active: rating === 3 }"
        type="button"
      >
        3
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  //   emits: ['send-rating'],
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    setRating(rate) {
      //   this.rating = rate;
      //   this.$emit('send-rating', rate);
      this.$emit('update:modelValue', rate);
    },
  },
  // data() {
  //   return {
  //     rating: this.modelValue, // не очень понимаю зачем это делать, можно же оставить null
  //   };
  // },
  computed: {
    rating() {
      return this.modelValue;
    },
  },
};
</script>

<style scoped>
.active {
  border-color: black;
  border-style: solid;
}
ul {
  list-style: none;
}
li {
  padding: 0;
  margin: 0.5rem 0;
}
</style>
