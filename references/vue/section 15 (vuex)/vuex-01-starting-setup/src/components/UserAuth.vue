<template>
  <button @click="logIn" v-if="!loggedIn">Login</button>
  <button @click="logOut" v-if="loggedIn">Logout</button>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    },
    // ...mapGetters('auth', 'loggedIn')
  },
  methods: {
    logIn() {
      this.$store.dispatch({ type: 'auth/logInOut', status: true });
    },
    logOut() {
      this.$store.dispatch({ type: 'auth/logInOut', status: false });
    },
  },
};
</script>
