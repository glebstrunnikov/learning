<template>
  <resource-card
    @res-delete="resDelete"
    v-for="res in resBase"
    :key="res.id"
    :name="res.name"
    :text="res.text"
    :link="res.link"
    :id="res.id"
  ></resource-card>
  <!-- <p :v-for="res in resBase" :key="res.id">{{ res.name }}</p> -->
  <!-- <base-card v-for="res in resBase" :key="res.id"> <h1></h1></base-card> -->
  <!-- <base-card>
    <div>
      <h2>Name</h2>
      <base-button btnType="thirdly">Delete</base-button>
    </div>
    <p>Text text text text text</p>
    <a href="#">link text</a>
  </base-card> -->
</template>

<script>
import ResourceCard from "./ResourceCard.vue";
export default {
  data() {
    return {
      resToDel: "",
    };
  },
  components: {
    ResourceCard,
  },
  emits: ["res-delete"],
  props: {
    resBase: Object,
  },
  methods: {
    resDelete(id) {
      this.$emit("resDelete", id);
    },
  },
};
</script>
