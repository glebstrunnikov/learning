<template>
  <div>
    <!-- корневой div добавлен для работы анимации -->
    <transition-group tag="ul" name="user-list" @leave="leaveMethod">
      <li
        v-for="user in users"
        :key="user"
        :id="user"
        @click="removeUser(user)"
      >
        {{ user }}
      </li>
    </transition-group>

    <div>
      <input v-model="newUser" name="newUser" type="text" />
      <button @click="addUser">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['add-user', 'remove-user'],
  data() {
    return {
      users: ['Bim', 'Bom', 'Dumb', 'Ass', 'King'],
      newUser: '',
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.newUser);
    },
    removeUser(name) {
      this.users = this.users.filter((el) => el != name);
    },
    leaveMethod(el, done) {
      let counter = 10;
      el.style.position = 'absolute';
      const interval = setInterval(() => {
        if (counter > 0) {
          el.style.opacity = counter * 0.1;
          el.style.transform = `scale(${0.5 + counter * 0.05})`;
          counter--;
          console.log(el);
        } else {
          clearInterval(interval);
          done();
        }
      }, 100);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 0.75rem;
  text-align: center;
}
input {
  margin: 1rem;
}

.user-list-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.user-list-enter-active {
  transition: all 1s ease;
}
.user-list-enter-to {
  opacity: 1;
  transform: scale(1);
}

/* .user-list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.user-list-leave-active {
  transition: all 1s ease;
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: scale(0.5);
} */

.user-list-move {
  transition: transform 0.8s ease;
}
</style>
