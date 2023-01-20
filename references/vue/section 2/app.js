Vue.createApp({
  data() {
    return {
      aSelected: false,
      bSelected: false,
      cSelected: false,
    };
  },
  computed: {
    aClasses() {
      if (this.aSelected === true) {
        return "demo active";
      } else return "demo";
    },
    bClasses() {
      return { active: this.bSelected === true };
    },
  },
  methods: {
    selectBox(box) {
      box === "A"
        ? (this.aSelected = !this.aSelected)
        : box === "B"
        ? (this.bSelected = !this.bSelected)
        : box === "C"
        ? (this.cSelected = !this.cSelected)
        : null;
    },
  },
}).mount("#styling");
