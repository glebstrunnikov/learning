<template>
  <the-header></the-header>

  <router-view v-slot="slotProps">
    <transition name="main" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: { TheHeader },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-enter-active {
  animation: main-switch 0.5s ease;
}

.main-leave-active {
  animation: main-switch 0.5s ease reverse;
}

@keyframes main-switch {
  from {
    transform: scale(0.8);
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: scale(1);
    transform: translate(0);
    opacity: 1;
  }
}
</style>
