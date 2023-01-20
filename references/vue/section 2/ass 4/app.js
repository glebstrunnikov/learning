const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      isVisible: true,
      userColor: "",
      textColor: "#8ddba4",
    };
  },
  computed: {
    userStyle() {
      return `${this.isVisible === true ? "visible" : "hidden"} ${
        this.userClass
      }`;
    },
  },
  methods: {
    checkUserStyle(event) {
      if (event.target.value === "user1") {
        this.userClass = "user1";
      } else if (event.target.value === "user2") {
        this.userClass = "user2";
      } else if (event.target.value === "hide") {
        this.isVisible = false;
      } else if (event.target.value === "show") {
        this.isVisible = true;
      }
    },
    checkColor() {
      this.textColor = this.userColor;
    },
  },
});

app.mount("#assignment");
