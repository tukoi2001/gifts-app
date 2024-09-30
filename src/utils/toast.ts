import { NotificationType } from 'enums/app';

const toast = (options: App.ToastOptions) => {
  ElNotification({
    title: options.title || '',
    message: options.message,
    type: options.type || 'info',
    duration: options.duration || 5000,
    showClose: options.showClose !== undefined ? options.showClose : true,
    customClass: `el-notification__${options.type}`,
  });
};

export const showSuccess = (message: string, title?: string): void => {
  toast({ message, title, type: NotificationType.SUCCESS });
};

export const showError = (message: string, title?: string): void => {
  toast({ message, title, type: NotificationType.ERROR });
};

export const showWarning = (message: string, title?: string): void => {
  toast({ message, title, type: NotificationType.WARNING });
};

export const showInfo = (message: string, title?: string): void => {
  toast({ message, title, type: NotificationType.INFO });
};
