declare namespace App {
  import('enums/app');

  import type { NotificationType } from 'enums/app';

  // eslint-disable-next-line
  type Any = any;

  type Callback = {
    onSuccess?: (...args) => void;
    onError?: (...args) => void;
    onFinally?: (...args) => void;
  };

  type LanguageOption = {
    flag: string;
    value: string;
    label: string;
  };

  type ToastOptions = {
    title?: string;
    message: string;
    type?: NotificationType;
    duration?: number;
    showClose?: boolean;
    offset?: number;
  };

  type MiddlewareContext = {
    to: RouteLocationNormalizedLoaded;
    next: NavigationGuardNext;
    currentUser: Auth.User;
    isLoggedIn: boolean;
  };

  type RouteMiddleware = (...args: unknown[]) => boolean;
}
