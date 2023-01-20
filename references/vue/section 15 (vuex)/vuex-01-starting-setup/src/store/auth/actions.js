export default {
  logInOut(context, payload) {
    context.commit('logInOut', payload);
    console.log(context);
  },
};
