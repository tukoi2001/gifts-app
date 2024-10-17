import i18n from 'config/i18n';
import router from 'routers/index';
import Application from './Application';
import FontIcon from 'components/FontIcon';
import LoadingComponent from 'components/Loading';
import DefaultLayout from 'layouts/DefaultLayout';

import 'element-plus/dist/index.css';
import 'styles/main.scss';

const pinia = createPinia();

createApp(Application)
  .use(pinia)
  .use(ElementPlus)
  .use(i18n)
  .use(router)
  .component('DefaultLayout', DefaultLayout)
  .component('FontIcon', FontIcon)
  .component('LoadingComponent', LoadingComponent)
  .mount('#app');
