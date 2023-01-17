<template>
  <div class="container">
    <div class="row">
      <div class="column"><user-data @set-user="setUser"></user-data></div>
      <div class="column">
        <active-user :name="this.user.name" :age="this.user.age"></active-user>
      </div>
    </div>
  </div>
</template>

<script>
import ActiveUser from "./ActiveUser.vue";
import UserData from "./UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      user: {
        name: "Gleb",
        age: 31,
      },
    };
  },
  methods: {
    setUser(currentName, currentAge) {
      this.user.name = currentName.value;
      this.user.age = currentAge;
      console.log(typeof currentAge);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

.column {
  float: left;
  width: 50%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
h1 {
  display: inline;
  margin: 20px;
  background-color: blue;
}

h2 {
  display: inline;
  margin: 20px;
}
</style>
