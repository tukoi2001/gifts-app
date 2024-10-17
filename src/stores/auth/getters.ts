import type { AuthStoreOptions } from './types';

const getters: AuthStoreOptions['getters'] = {
  userFullName(): string {
    return this.currentUser!.displayName!;
  },
};

export default getters;
