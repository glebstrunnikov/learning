const app = Vue.createApp({
  data() {
    return {
      line1: "Finish the course",
      line2: "<h2>Suck a bag of dicks</h2>",
      link: "https://google.com",
    };
  },
  methods: {
    rollDice() {
      const dice = Math.floor(Math.random() * 2);
      if (dice === 1) {
        return this.line1;
      } else {
        return this.line2;
      }
    },
  },
});

app.mount("#user-goal");
