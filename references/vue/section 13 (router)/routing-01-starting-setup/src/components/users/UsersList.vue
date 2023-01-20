<template>
  <button @click="confirmBtn">confirm</button>
  <button @click="updateBtn">update</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      dataUpdated: false,
    };
  },
  methods: {
    confirmBtn() {
      console.log('comfirm');
      this.$router.push('/teams'); //перекидывает на роут
      // this.$router.back();
      // this.$router.forward();
    },
    updateBtn() {
      if (this.dataUpdated === false) {
        this.dataUpdated = true;
      }
      console.log('data updated');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('component load lvl nav guard');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.dataUpdated === true) {
      next();
    } else {
      if (confirm('sure?') === true) {
        next();
      }
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
