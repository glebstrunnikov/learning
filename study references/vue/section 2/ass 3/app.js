const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    shownResult() {
      const self = this;
      setTimeout(() => {
        self.result = 0;
      }, 5000);
    },
  },
  computed: {
    shownResult() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return "37";
      } else {
        return "Too much";
      }
    },
  },
  methods: {
    add1() {
      this.result++;
    },
    add5() {
      this.result = this.result + 5;
    },
  },
});
app.mount("#assignment");
