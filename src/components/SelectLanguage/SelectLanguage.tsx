import RESOURCES from 'config/resources';
import { DEFAULT_LANGUAGE, VIETNAM_LANGUAGE } from 'config/constants';
import { getLocalStorage, setLocalStorage } from 'utils/storage';
import { LocalStorageKey } from 'enums/app';
import Popover from 'components/Popover';

export default defineComponent({
  name: 'SelectLanguage',
  setup() {
    const { locale, t } = useI18n();

    const currentLanguage = ref<string>(DEFAULT_LANGUAGE);
    const currentLocate = getLocalStorage(LocalStorageKey.LANGUAGE);
    const isVisible = ref<boolean>(false);

    const languageMap = computed<Record<string, App.LanguageOption>>(() => ({
      vi: {
        flag: RESOURCES.VIETNAM_FLAG,
        value: VIETNAM_LANGUAGE,
        label: t('vietnamese'),
      },
      en: {
        flag: RESOURCES.ENGLAND_FLAG,
        value: DEFAULT_LANGUAGE,
        label: t('english'),
      },
    }));

    const language = computed<App.LanguageOption>(
      () => languageMap.value[currentLanguage.value],
    );

    onMounted(() => {
      if (currentLocate) {
        currentLanguage.value = currentLocate as string;
        locale.value = currentLocate as string;
      }
    });

    const changeLocale = (lang: string) => {
      currentLanguage.value = lang;
      locale.value = lang;
      setLocalStorage(LocalStorageKey.LANGUAGE, lang);
      isVisible.value = false;
    };

    const renderTrigger = (): JSX.Element => {
      return (
        <div class="select-language-trigger">
          <img
            class="select-language-trigger__flag"
            src={language.value.flag}
            alt="flag"
          />
        </div>
      );
    };

    return (): JSX.Element => (
      <div class="select-language">
        <Popover
          v-model:visible={isVisible.value}
          popperStyle={{ padding: 0 }}
          width={80}
          trigger="click"
          v-slots={{ reference: renderTrigger }}
        >
          <div class="select-language-content">
            {map(Object.values(languageMap.value), (option) => {
              return (
                <div
                  key={option.value}
                  class="select-language-content__item"
                  onClick={() => changeLocale(option.value)}
                >
                  <img
                    class="select-language-content__flag"
                    src={option.flag}
                    alt="flag"
                  />
                  <span class="select-language-content__country">
                    {option.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Popover>
      </div>
    );
  },
});
