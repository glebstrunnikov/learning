<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2>default content</h2> -->
      </slot>
    </header>
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots.header);
  },
};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  /* font-size: 150%; */
  /* height: 5rem; */
  /* display: flex;
  margin-bottom: 1rem; */
}

h3 {
  margin: 3px;
  display: inline;
}
</style>
