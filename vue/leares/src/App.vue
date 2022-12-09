<template>
  <TheHeader />
  <control-panel @show-list="showList" @show-add="showAdd"></control-panel>
  <keep-alive
    ><component
      :is="showComponent"
      :res-base="resBase"
      @res-delete="resDelete"
      @add-resource="resAdd"
    ></component
  ></keep-alive>
  <!-- <resource-list :res-base="resBase" @res-delete="resDelete"></resource-list> -->
</template>

<script>
import ResourceAdd from "./components/ResourceAdd.vue";
import ResourceList from "./components/ResourceList.vue";
import ControlPanel from "./components/ControlPanel.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    ResourceAdd,
    ResourceList,
    ControlPanel,
    TheHeader,
  },
  data() {
    return {
      showComponent: "resource-list",
      resBase: [
        {
          id: 1,
          name: "Google",
          text: "Why don't you just do it?",
          link: "https://google.com",
        },
        {
          id: 2,
          name: "Pornhub",
          text: "Or try this if you're tired",
          link: "https://pornhub.com",
        },
      ],
    };
  },
  methods: {
    resDelete(resID) {
      this.resBase = this.resBase.filter((res) => res.id != resID);
    },
    showList() {
      this.showComponent = "resource-list";
    },
    showAdd() {
      this.showComponent = "resource-add";
    },
    resAdd(newRes) {
      this.resBase.push({
        id: newRes.id,
        name: newRes.name,
        text: newRes.text,
        link: newRes.link,
      });
    },
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
