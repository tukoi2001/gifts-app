import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'config/firebase';
import { removeLocalStorage } from 'utils/storage';
import { LocalStorageKey } from 'enums/app';
import type { User } from 'firebase/auth';
import type { AuthStoreOptions } from './types';

const actions: AuthStoreOptions['actions'] = {
  getUserInfo(): void {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = user;
      } else {
        this.revokeUser();
      }
    });
  },
  saveUserInfo(user: User): void {
    this.currentUser = user;
  },
  revokeUser(): void {
    removeLocalStorage(LocalStorageKey.TOKEN);
    removeLocalStorage(LocalStorageKey.REFRESH_TOKEN);
    this.currentUser = null;
  },
  reset(): void {
    this.$reset();
  },
};

export default actions;
