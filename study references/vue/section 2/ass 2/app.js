Vue.createApp({
  data() {
    return {
      text1: "",
      text2: "",
    };
  },
  methods: {
    showAlert() {
      alert("privet");
    },
    setText(e) {
      this.text1 = e.target.value;
    },
    setTextEnter(e) {
      this.text2 = e.target.value;
    },
  },
}).mount("#assignment");
