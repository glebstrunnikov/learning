const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(newValue, oldValue) {
      if (newValue >= 50) {
        const self = this;
        setTimeout(() => {
          self.counter = 0;
          alert("oops");
        }, 2000);
      }
    },
  },
  computed: {
    fullName() {
      if (this.name !== "") {
        return this.name + " " + this.lastName;
      }
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },
  },
});

app.mount("#events");
