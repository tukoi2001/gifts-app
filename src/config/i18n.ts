import { DEFAULT_LANGUAGE } from 'config/constants';
import langEn from 'i18n/en.json';
import langVi from 'i18n/vi.json';

const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  globalInjection: true,
  messages: { en: langEn, vi: langVi },
});

export default i18n;
