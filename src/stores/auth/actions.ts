import type { AuthStoreOptions } from './types';

const actions: AuthStoreOptions['actions'] = {
  reset() {
    this.$reset();
  },
};

export default actions;
