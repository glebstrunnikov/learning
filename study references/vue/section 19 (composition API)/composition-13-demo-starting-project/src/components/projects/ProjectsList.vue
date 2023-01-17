<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script setup>
import ProjectItem from './ProjectItem.vue';
import { ref, computed, watch, defineProps, toRefs } from 'vue';
const props = defineProps(['user']);
const enteredSearchTerm = ref('');
const activeSearchTerm = ref('');

const availableProjects = computed(() => {
  if (activeSearchTerm.value) {
    return props.user.projects.filter((el) =>
      el.title.includes(activeSearchTerm.value)
    );
  }
  return props.user.projects;
});
const hasProjects = computed(() => {
  return props.user.projects && availableProjects.value.length > 0;
});

function updateSearch(val) {
  enteredSearchTerm.value = val;
}

watch(enteredSearchTerm, (newVal) => {
  setTimeout(() => {
    if (newVal === enteredSearchTerm.value) {
      activeSearchTerm.value = newVal;
    }
  }, 300);
});

const propsWithRefs = toRefs(props); // вот тут нихуя не понял зачем это делать
const user = propsWithRefs.user;

// const { user } = toRefs(props); // вот тут нихуя не понял зачем это делать
// watch(props.user, () => {
//   console.log(props);
//   enteredSearchTerm.value = '';
// });
watch(user, () => (enteredSearchTerm.value = '')); // вернее даже не понял зачем этот вотчер нужен в принципе
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
