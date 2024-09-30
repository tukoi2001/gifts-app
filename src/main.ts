import i18n from 'config/i18n';
import router from 'routers/index';
import Application from './Application';
import FontIcon from 'components/FontIcon';
import LoadingComponent from 'components/Loading';

import 'element-plus/dist/index.css';
import 'styles/main.scss';

const pinia = createPinia();

createApp(Application)
  .use(pinia)
  .use(ElementPlus)
  .use(i18n)
  .use(router)
  .component('FontIcon', FontIcon)
  .component('LoadingComponent', LoadingComponent)
  .mount('#app');
