<template>
  <div class="container">
    <router-view v-slot="slotProps">
      <transition name="main" mode="out-in">
        <component :is="slotProps.Component"></component> </transition
    ></router-view>
  </div>

  <div class="container">
    <div :class="{ animated: animateOn === true }" class="block"></div>
    <button @click="animate">Animate</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnterMethod"
      @enter="enterMethod"
      @before-leave="beforeLeaveMethod"
      @after-enter="afterEnterMethod"
      @leave="leaveMethod"
      @enter-cancelled="enterCancelledMethod"
      @leave-cancelled="leaveCancelledMethod"
    >
      <p v-if="textVivsible">Dummy text</p> </transition
    ><button @click="toggleText">Toggle text</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersShown">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>

  <base-modal :open="dialogIsVisible" @close="hideDialog">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animateOn: false,
      textVivsible: false,
      usersShown: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animate() {
      this.animateOn = true;
    },
    toggleText() {
      this.textVivsible = !this.textVivsible;
    },
    showUsers() {
      this.usersShown = true;
    },
    hideUsers() {
      this.usersShown = false;
    },
    beforeEnterMethod(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    enterMethod(el, done) {
      console.log('enter');
      let opacityCount = 0;
      this.enterInterval = setInterval(() => {
        if (el.style.opacity <= 1) {
          el.style.opacity = opacityCount * 0.05;
          opacityCount++;
          console.log(el.style.opacity);
        } else {
          clearInterval(this.enterInterval);
          done();
        }
      }, 40);
    },
    afterEnterMethod() {
      console.log('after enter');
    },
    beforeLeaveMethod(el) {
      console.log('before leave');
      el.style.opacity = 1;
    },
    leaveMethod(el, done) {
      let opacityCount = 1;
      this.leaveInterval = setInterval(() => {
        if (el.style.opacity >= 0) {
          el.style.opacity = opacityCount;
          opacityCount = opacityCount - 0.1;
        } else {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 41);
    },
    enterCancelledMethod() {
      clearInterval(this.enterInterval);
    },
    leaveCancelledMethod() {
      clearInterval(this.leaveInterval);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.5s ease-out; */
}
.animated {
  /* transform: translateX(-8rem); */
  animation: slide-fade 0.5s ease-out forwards;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
p {
  color: blue;
}

/* .v-enter-active {
  animation: slide-fade 0.3s ease-out;
} */
/* С animation можно еще использовать reverse, он делает то же самое в обратной перемотке */

/* .p-enter-from {
  opacity: 0;
  transform: translateY(-1rem);
}

.p-enter-active {
  transition: all 2s ease-in;
}

.p-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.p-leave-from {
  opacity: 0.5;
  transform: translateY(0);
}

.p-leave-active {
  transition: all 0.5s ease-out;
} */

.custom-animation-tag {
  opacity: 0;
  transform: translateY(1rem);
}

.main-enter-active {
  animation: main-switch 0.6s ease;
}

.main-leave-active {
  animation: main-switch 0.6s ease reverse;
}

@keyframes main-switch {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  60% {
    transform: translateX(-5rem) scale(1.1);
  }

  100% {
    transform: translateX(-10rem) translateY(2rem) scale(1);
  }
}

.fade-button-enter-from {
  opacity: 0;
}
.fade-button-enter-active {
  transition: opacity 0.2s ease-in;
}
.fade-button-enter-to {
  opacity: 1;
}
.fade-button-leave-from {
  opacity: 1;
}
.fade-button-leave-active {
  transition: opacity 0.2s ease-out;
}
.fade-button-leave-to {
  opacity: 0;
}
</style>
