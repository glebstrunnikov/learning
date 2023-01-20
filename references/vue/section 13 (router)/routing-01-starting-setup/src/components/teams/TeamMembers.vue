<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">go to t 2</router-link>
  </section>
  {{ teamId }}
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  props: ['teamId'], // можно построить логику обновления данных в компоненте, используя вместо $route. teamID в таком случае передается сюда как prop, потому что мы включили соответствующую опцию в main.js
  inject: ['teams', 'users'],
  methods: {
    // loadData(route)
    loadData(teamId) {
      // this.$route.path
      // const teamId = route.params.teamId;
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      this.teamName = selectedTeam.name;
      const selectedTeamMembers = [];
      this.users.forEach((user) => {
        selectedTeam.members.forEach((member) => {
          if (member === user.id) {
            selectedTeamMembers.push(user);
          }
        });
      });
      this.members = selectedTeamMembers;
    },
  },
  created() {
    // this.loadData(this.$route);
    this.loadData(this.teamId);
    console.log(this.$route.query);
  },
  watch: {
    teamId(newId) {
      this.loadData(newId);
    },
    // $route(newRoute) {
    //   this.loadData(newRoute);
    // },
  },
  beforeRouteUpdate(to, from, next) {
    console.log('component update lvl nav guard');
    console.log(to, from);
    next();
    this.loadData(to.params.teamId);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
