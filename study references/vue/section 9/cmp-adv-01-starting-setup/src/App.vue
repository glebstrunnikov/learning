<template>
  <div>
    <TheHeader />
    <button @click="switchComponent('active-goals')">Active Goals</button>
    <button @click="switchComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="shownComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      shownComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    switchComponent(cmp) {
      cmp === "manage-goals"
        ? (this.shownComponent = "manage-goals")
        : (this.shownComponent = "active-goals");
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
