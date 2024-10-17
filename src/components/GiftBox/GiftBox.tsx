export default defineComponent({
  name: 'GiftBox',
  setup() {
    return (): JSX.Element => (
      <div class="gift-box">
        <div class="gift-box-tape">
          <div class="gift-box-tape-left"></div>
          <div class="gift-box-tape-right"></div>
          <div class="gift-box-tape-center"></div>
        </div>
        <div class="gift-box-gifts">
          <div class="gift-box-gifts-shadow"></div>
        </div>
        <div class="gift-box-gift"></div>
        <div class="gift-box-star gift-box-star-1"></div>
        <div class="gift-box-star gift-box-star-2"></div>
        <div class="gift-box-star gift-box-star-3"></div>
        <div class="gift-box-star gift-box-star-4"></div>
        <div class="gift-box-star gift-box-star-5"></div>
      </div>
    );
  },
});
