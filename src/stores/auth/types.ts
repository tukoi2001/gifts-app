import { DefineStoreOptions } from 'pinia';

export type State = {
  //
};

export type Getters = {
  //
};

export type Actions = {
  reset(): void;
};

export type AuthStoreOptions = DefineStoreOptions<
  string,
  State,
  Getters,
  Actions
>;
