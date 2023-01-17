import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // {path: '/', component: TeamsList},
    // { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      components: { default: TeamsList, footer: TeamsFooter },
      alias: '/',
      children: [
        {
          name: 'team-members',
          path: '/teams/:teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    // alias - то же, что и редирект, только наоборот и без редиректа, просто грузится тот же компонент
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('route lvl nav guard');
        console.log(to, from);
        next();
      },
    },

    // интерпретируется как любой адрес с любыми буковками после двоеточия, например /teams/ыфасфысфысфсфы
    { path: '/:catchAll(.*)', redirect: '/teams' },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, _from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    } else if (to.path === '/teams/t2') return { left: 0, top: 200 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    console.log('needs auth!');
  }
  console.log('global lvl nav guard');
  console.log(to);
  console.log(from);
  next();
  // next(false);

  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({ name: 'team-members', params: { teamId: 't1' } });
  // }

  // if (to.path !== '/teams/t1') {
  //   console.log('privet');
  //   next({ path: '/teams/t1' });
  // } else next();
});

router.afterEach((to, from) => {
  console.log('global artereach nav guard');
  console.log(to, from);
  // контролировать переход на этом этапе уже поздно, но можно использовать этот метод, чтобы отсылать на свой собственный сервер аналитику по переходам
});

export default router;
