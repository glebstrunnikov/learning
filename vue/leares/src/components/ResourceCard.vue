<template>
  <base-card>
    <div>
      <h2>{{ name }}</h2>
      <base-button
        btnType="thirdly"
        btnText="Delete"
        @click="activateDelBtn"
      ></base-button>
    </div>
    <p>{{ text }}</p>
    <a :href="link">Visit...</a>
  </base-card>
</template>

<script>
export default {
  emits: ["res-delete"],
  props: {
    id: Number,
    name: String,
    text: String,
    link: String,
  },
  methods: {
    activateDelBtn() {
      this.$emit("res-delete", this.id);
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
}
h2 {
  margin-block: auto;
}
</style>
