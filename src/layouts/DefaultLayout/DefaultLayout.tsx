import SelectLanguage from 'components/SelectLanguage';

export default defineComponent({
  name: 'DefaultLayout',
  setup(_props, { slots }) {
    return (): JSX.Element => (
      <div class="default-layout">
        <div class="default-layout__header">
          <div class="default-layout__title">My Gifts</div>
          <SelectLanguage />
        </div>
        <div class="default-layout__content">
          {slots.default && slots.default()}
        </div>
      </div>
    );
  },
});
