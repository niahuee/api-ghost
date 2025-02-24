import { useState, useEffect, useCallback } from "react";
import { Mock } from "../../../types/mock";

const STORAGE_KEY = "mocks";
const useChromeStorage = import.meta.env.VITE_ENVIRONMENT === "production";

console.log(import.meta.env.VITE_ENVIRONMENT);

export const useMockManager = () => {
  const [mocks, setMocks] = useState<Mock[]>([]);

  const loadMocks = useCallback(() => {
    if (useChromeStorage) {
      chrome.storage.local.get([STORAGE_KEY], (result) => {
        setMocks(result[STORAGE_KEY] || []);
      });
    } else {
      const localMocks = localStorage.getItem(STORAGE_KEY);
      setMocks(localMocks ? JSON.parse(localMocks) : []);
    }
  }, []);

  const saveMocks = useCallback((updatedMocks: Mock[]) => {
    if (useChromeStorage) {
      chrome.storage.local.set({ [STORAGE_KEY]: updatedMocks }, () => {
        setMocks(updatedMocks);
      });
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedMocks));
      setMocks(updatedMocks);
    }
  }, []);

  const addMock = useCallback(
    (newMock: Mock) => {
      const updatedMocks = [...mocks, newMock];
      saveMocks(updatedMocks);
    },
    [mocks, saveMocks]
  );

  const updateMock = useCallback(
    (id: string, updatedData: Partial<Mock>) => {
      const updatedMocks = mocks.map((mock) =>
        mock.id === id ? { ...mock, ...updatedData } : mock
      );
      saveMocks(updatedMocks);
    },
    [mocks, saveMocks]
  );

  const deleteMock = useCallback(
    (id: string) => {
      const updatedMocks = mocks.filter((mock) => mock.id !== id);
      saveMocks(updatedMocks);
    },
    [mocks, saveMocks]
  );

  const getMockById = useCallback(
    (id: string): Mock | undefined => {
      return mocks.find((mock) => mock.id === id);
    },
    [mocks]
  );

  useEffect(() => {
    loadMocks();

    if (useChromeStorage) {
      const handleStorageChange = (
        changes: { [key: string]: chrome.storage.StorageChange },
        areaName: string
      ) => {
        if (areaName === "local" && changes[STORAGE_KEY]) {
          setMocks(changes[STORAGE_KEY].newValue || []);
        }
      };

      chrome.storage.onChanged.addListener(handleStorageChange);
      return () => {
        chrome.storage.onChanged.removeListener(handleStorageChange);
      };
    }
  }, [loadMocks]);

  return {
    mocks,
    addMock,
    updateMock,
    deleteMock,
    getMockById,
  };
};
