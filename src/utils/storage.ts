// utils/storage.ts
const useChromeStorage = import.meta.env.VITE_ENVIRONMENT === "production";

export const storage = {
  async get<T>(key: string): Promise<T | null> {
    try {
      if (useChromeStorage) {
        return new Promise((resolve) => {
          chrome.storage.local.get([key], (result) => {
            resolve(result[key] || null);
          });
        });
      } else {
        const storedData = localStorage.getItem(key);
        return storedData ? JSON.parse(storedData) : null;
      }
    } catch (error) {
      console.error(`Error reading from storage with key "${key}":`, error);
      return null;
    }
  },

  async set<T>(key: string, data: T): Promise<void> {
    try {
      if (useChromeStorage) {
        return new Promise((resolve) => {
          chrome.storage.local.set({ [key]: data }, resolve);
        });
      } else {
        localStorage.setItem(key, JSON.stringify(data));
      }
    } catch (error) {
      console.error(`Error writing to storage with key "${key}":`, error);
    }
  },
};
