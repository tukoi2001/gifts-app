export default defineComponent({
  name: 'Popover',
  inheritAttrs: false,
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
      validator: (value: string) => ['hover', 'click'].includes(value),
    },
    popperStyle: Object,
    width: Number,
  },
  setup(props, { attrs, slots }) {
    const { content, width, title, popperStyle, trigger } = toRefs(props);

    return (): JSX.Element => (
      <el-popover
        content={content.value}
        title={title.value}
        effect="light"
        popperClass="popover-component"
        popperStyle={popperStyle.value}
        width={width.value}
        trigger={trigger.value}
        {...attrs}
        v-slots={{
          default: () => !content.value && slots.default && slots.default(),
          reference: () => !title.value && slots.reference && slots.reference(),
        }}
      />
    );
  },
});
