const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalText: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalText);
    },
    removeGoal(i) {
      this.goals.splice(i, 1);
    },
  },
});

app.mount("#user-goals");
