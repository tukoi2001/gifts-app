import HomeContainer from 'containers/HomeContainer';

export default defineComponent({
  name: 'HomePage',
  setup() {
    return (): JSX.Element => <HomeContainer />;
  },
});
