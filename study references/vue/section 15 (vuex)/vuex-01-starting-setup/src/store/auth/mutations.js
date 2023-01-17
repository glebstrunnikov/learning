export default {
  logInOut(state, payload) {
    state.loggedIn = payload.status;
  },
};
