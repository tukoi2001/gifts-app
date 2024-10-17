import { DefineStoreOptions } from 'pinia';
import type { User } from 'firebase/auth';

export type State = {
  currentUser: User | null;
};

export type Getters = {
  userFullName(): string;
};

export type Actions = {
  getUserInfo(): void;
  saveUserInfo(user: User): void;
  revokeUser(): void;
  reset(): void;
};

export type AuthStoreOptions = DefineStoreOptions<
  string,
  State,
  Getters,
  Actions
>;
