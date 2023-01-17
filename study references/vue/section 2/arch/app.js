const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    counterPlus(num) {
      this.counter = this.counter + num;
    },
    setName(e, lastName) {
      this.name = e.target.value + " " + lastName;
    },
    submitForm(e) {
      e.preventDefault();
    },
    confirmName() {
      this.confirmedName = this.name;
      console.log(this.name);
      console.log(this.confirmedName);
    },
  },
});

app.mount("#events");
