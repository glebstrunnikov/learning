<template>
  <div class="container">
    <b @click.prevent="redirect">{{ email }}</b>
    <p>{{ text }}</p>
    <i>Sent to {{ name }}</i>
  </div>
</template>

<script>
export default {
  props: ["email", "text", "name"],
  methods: {
    redirect() {
      window.location = `mailto:${this.email}`;
    },
  },
};
</script>

<style scoped>
.container {
  margin: 2rem 10rem 2rem 10rem;
  width: auto;
  border-style: dotted;
  border-width: 1px;
  border-color: gray;
  padding: 1rem;
}
b {
  font-weight: 700;
  color: blueviolet;
  cursor: pointer;
}
b:hover {
  color: royalblue;
}
p {
  margin: 0;
}
</style>
