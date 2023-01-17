import authGetters from './getters.js';
import authMutations from './mutations.js';
import authActions from './actions.js';

const authModule = {
  namespaced: true,
  state() {
    return {
      loggedIn: false,
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters,

  //   getters: {
  //     loggedIn(
  //       state
  //       //, getters, rootState, rootGetters
  //     ) {
  //       return state.loggedIn;
  //     },
  //   },
};

export default authModule;
