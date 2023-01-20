import { createStore } from 'vuex';

const authModule = {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
    };
  },
  mutations: {
    logInOut(state, payload) {
      state.loggedIn = payload.status;
    },
  },
  actions: {
    logInOut(context, payload) {
      context.commit('logInOut', payload);
      console.log(context);
    },
  },
  getters: {
    loggedIn(
      state
      //, getters, rootState, rootGetters
    ) {
      return state.loggedIn;
    },
  },
};

const store = createStore({
  modules: { auth: authModule },
  state() {
    return {
      counter: 1,
    };
  },
  mutations: {
    increment(state, payload) {
      //   state.counter++;
      state.counter = state.counter + payload.value;
    },
  },
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
