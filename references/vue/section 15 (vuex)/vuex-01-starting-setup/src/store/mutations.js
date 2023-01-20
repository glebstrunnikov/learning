export default {
  increment(state, payload) {
    //   state.counter++;
    state.counter = state.counter + payload.value;
  },
};
