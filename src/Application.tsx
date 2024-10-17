import { useAuthStore } from 'stores/auth';

export default defineComponent({
  setup() {
    const authStore = useAuthStore();

    onBeforeMount(() => {
      authStore.getUserInfo();
    });

    return (): JSX.Element => <router-view />;
  },
});
