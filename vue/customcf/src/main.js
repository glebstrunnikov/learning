import { createApp } from "vue";
import App from "./App.vue";
import "goodt-framework-css/src/_all.less";
import { createStore } from "vuex";
import router from "./router.js";

import BaseCard from "./components/BaseCard.vue";
import BaseButton from "./components/BaseButton.vue";

import coaches from "./data";

const app = createApp(App);
const store = createStore({
  state() {
    return { coaches: coaches, interests: ["frontend", "backend", "career"] };
  },
  getters: {
    returnCoaches(state) {
      return state.coaches;
    },
    returnInterests(state) {
      return state.interests;
    },
    returnLetters(_, getters) {
      const letters = [];
      getters.returnCoaches.forEach((el) => {
        if (el.letters) {
          el.letters.forEach((letter) => letters.push(letter));
        }
      });
      return letters;
    },
  },
  mutations: {
    updateInterests(state, payload) {
      state.interests = [];
      if (payload.includes("frontend")) {
        state.interests.push("frontend");
      }
      if (payload.includes("backend")) {
        state.interests.push("backend");
      }
      if (payload.includes("career")) {
        state.interests.push("career");
      }
    },
    addLetter(state, payload) {
      const coachId = state.coaches.findIndex((el) => el.name === payload.name);
      state.coaches[coachId].letters.push(payload);
    },
  },
  actions: {
    updateInterests(context, payload) {
      context.commit("updateInterests", payload);
    },
    addLetter(context, payload) {
      context.commit("addLetter", payload);
    },
  },
});
app.use(router);
app.use(store);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.mount("#app");
