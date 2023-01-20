<template>
  <section class="container">
    <!-- <h2>{{ uName }}</h2>
    <h4>{{ age }}</h4> -->
    <user-data :firstName="firstName" :secondName="secondName"></user-data>
    <p>{{ testArray }}</p>
    <p>{{ testObject.array[1] }}</p>
    <button @click="setAge">change</button>
    <div>
      <input type="text" placeholder="1st name" v-model="firstName" />
      <!-- <input type="text" placeholder="2nd name" @input="set2name" /> -->
      <input type="text" placeholder="2dn name" ref="secondNameInput" />
      <button @click="setName">Set 2nd name</button>
    </div>
  </section>
</template>

<script>
// import { ref isRef, isReactive, } from 'vue';
import { ref, reactive, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: { UserData },
  setup() {
    // const uName = ref('Maxim');
    // const uAge = ref(31);
    // const uName = 'Maxim';

    // const user = ref({
    //   name: 'Maxim',
    //   age: 31,
    // });

    const testArray = ref([1, 2]);
    const testObject = reactive({
      string: 'foo bar',
      array: [1, 2, 3, 4],
      object: { key1: 1, key2: ['a', 'b', 'c'] },
    });

    const user = reactive({
      name: 'Maxim',
      age: 31,
    });

    function setAge() {
      userRefs.age.value++;
      // console.log(userRefs);
      testArray.value.push(3);
      testArray.value[1]++;
      // console.log(testObject.array);
      testObject.array = testObject.array.map((el) => {
        return el * 2;
      });
      // console.log(testObject.array);
    }

    // ref() в отличие от reactive() работает не только с объектами, но требует обращаться к значениям через дополнительное свойство .value.:
    // setTimeout(() => {
    //   user.value.name = 'Maxi';
    //   user.value.age = 33;
    // }, 2000);

    // setTimeout(() => {
    //   user.name = 'Maxi';
    //   user.age = 33;
    // }, 2000);
    const userRefs = toRefs(user);
    // return { userName: user.value.name, userAge: user.value.age };

    const uName = computed(() => {
      return firstName.value + ' ' + secondName.value;
    });

    const firstName = ref('');
    const secondName = ref('');

    const secondNameInput = ref(null);
    function setName() {
      secondName.value = secondNameInput.value.value;
      console.log(secondNameInput);
    }

    // function set2name(event) {
    //   secondName.value = event.target.value;
    // }

    watch([userRefs.age, uName], function (newValues, oldValues) {
      console.log(oldValues, newValues);
    });

    provide('age', userRefs.age);

    return {
      user: user,
      age: userRefs.age,
      setAge: setAge,
      testArray: testArray,
      testObject: testObject,
      firstName,
      secondName,
      secondNameInput,

      setName,
      uName,
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
