import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import UsersList from './components/UsersList.vue';
import NotFound from './components/NotFound.vue';
import CourseGoals from './pages/CourseGoals.vue';
import AllUsers from './pages/AllUsers.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'default', path: '/', component: UsersList },
    { name: 'goals', path: '/goals', component: CourseGoals },
    { name: 'users', path: '/users', component: AllUsers },
    { name: 'not-found', path: '/404', component: NotFound },
    { name: 'wtf', path: '/:catchAll(.*)', redirect: '/404' },
  ],
});

app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(() => app.mount('#app'));
