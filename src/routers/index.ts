import { RootRouter } from 'enums/app';
import HomePage from 'pages/HomePage';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RootRouter.HOME_PAGE,
    component: HomePage,
    meta: {
      title: RootRouter.HOME_PAGE,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: RootRouter.HOME_PAGE,
    component: HomePage,
    meta: {
      title: RootRouter.HOME_PAGE,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    document.title = `Gifts App - ${to.meta.title}`;
    next();
  },
);

export default router;
