const app = Vue.createApp({
  data() {
    return {
      taskText: "",
      taskList: [],
      listShown: true,
      btnCaption: "hide",
    };
  },
  methods: {
    addTask() {
      this.taskList.push(this.taskText);
    },
    toggleList() {
      this.listShown === true
        ? (this.btnCaption = "show")
        : (this.btnCaption = "hide");
      this.listShown = !this.listShown;
    },
  },
});

app.mount("#assignment");
