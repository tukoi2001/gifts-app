import LoginContainer from 'containers/LoginContainer';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    return (): JSX.Element => <LoginContainer />;
  },
});
