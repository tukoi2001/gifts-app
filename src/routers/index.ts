import { RootRouter } from 'enums/app';
import LoginPage from 'pages/LoginPage';

const HomePage = () => import('pages/HomePage');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RootRouter.LOGIN_PAGE,
    component: LoginPage,
    meta: {
      title: RootRouter.LOGIN_PAGE,
    },
  },
  {
    path: '/home',
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
