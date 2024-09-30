export const setSessionStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    window.sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error serializing data for sessionStorage', error);
  }
};

export const getSessionStorage = <T>(key: string): T | null => {
  const value = window.sessionStorage.getItem(key);
  try {
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error('Error parsing data from sessionStorage', error);
  }
  return null;
};

export const removeSessionStorage = (key: string): void => {
  window.sessionStorage.removeItem(key);
};

export const clearAllSessionStorage = (): void => {
  window.sessionStorage.clear();
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    const serializedValue = JSON.stringify(value);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error('Error serializing data for localStorage', error);
  }
};

export const getLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key);
  try {
    if (value) {
      return JSON.parse(value) as T;
    }
  } catch (error) {
    console.error('Error parsing JSON from localStorage', error);
  }
  return null;
};

export const removeLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const clearLocalStorage = (): void => {
  window.localStorage.clear();
};
