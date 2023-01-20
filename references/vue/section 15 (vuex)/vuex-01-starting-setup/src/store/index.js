import { createStore } from 'vuex';
import authModule from './auth/index.js';
import rootMutations from './mutations.js';

const store = createStore({
  modules: { auth: authModule },
  state() {
    return {
      counter: 1,
    };
  },
  mutations: rootMutations,
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 2000);
      console.log(context);
    },
  },
  getters: {
    // finalCounter(state, getters) { }
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      if (getters.finalCounter < 0) {
        return 0;
      } else if (getters.finalCounter > 30) {
        return 30;
      } else return getters.finalCounter;
    },
  },
});

export default store;
