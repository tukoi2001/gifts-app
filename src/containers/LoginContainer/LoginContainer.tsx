import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from 'config/firebase';
import { useAuthStore } from 'stores/auth';
import { showSuccess, showError } from 'utils/toast';
import { setLocalStorage } from 'utils/storage';
import { RootRouter, LocalStorageKey } from 'enums/app';
import GiftBox from 'components/GiftBox';
import Google from 'components/Icons/Google';
import Gift from 'components/Icons/Gift';

export default defineComponent({
  name: 'LoginContainer',
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const authStore = useAuthStore();

    const onLoginByGoogle = (): void => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential!.accessToken;
          const user = result.user;
          authStore.saveUserInfo(user);
          setLocalStorage(LocalStorageKey.TOKEN, token);
          setLocalStorage(LocalStorageKey.REFRESH_TOKEN, user.refreshToken);
          showSuccess(t('login_success'));
          onGoHome();
        })
        .catch((_error: App.Any) => {
          showError(t('login_fail'));
        });
    };

    const onGoHome = (): void => {
      router.push({ name: RootRouter.HOME_PAGE });
    };

    return (): JSX.Element => (
      <default-layout>
        <div class="login-container">
          <div class="login-container__image">
            <GiftBox />
          </div>
          <div>
            <div class="login-container__subtitle">{t('login_title')}</div>
            <div class="login-container__google">
              <div class="login-container__google-subtitle">
                {t('login_description')}
              </div>
              <div
                class="login-container__google-title"
                onClick={onLoginByGoogle}
              >
                <Google />
                {t('login_with_google')}
              </div>
              <div class="login-container__other">
                <div class="login-container__other-description">{t('or')}</div>
                <div class="login-container__other-title" onClick={onGoHome}>
                  <Gift />
                  {t('skip')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </default-layout>
    );
  },
});
