import { useState, useEffect, useCallback, useMemo } from "react";
import { Mock } from "../../../types/mock";
import { storage } from "../../../utils/storage";

const STORAGE_KEY = "mocks";
const useExtensionStorage = import.meta.env.VITE_ENVIRONMENT === "production";

export const useMockManager = (searchQuery: string) => {
  const [mocks, setMocks] = useState<Mock[]>([]);

  const loadMocks = useCallback(async () => {
    const storedMocks = await storage.get<Mock[]>(STORAGE_KEY);

    setMocks(storedMocks || []);
  }, []);

  const saveMocks = useCallback((updatedMocks: Mock[]) => {
    storage.set(STORAGE_KEY, updatedMocks);
    setMocks(updatedMocks);
  }, []);

  const addMock = useCallback(
    (newMock: Mock) => {
      setMocks((prevMocks) => {
        console.log("adding");

        const updatedMocks = [...prevMocks, newMock];
        saveMocks(updatedMocks);
        return updatedMocks;
      });
    },
    [saveMocks]
  );

  const updateMock = useCallback(
    (id: string, updatedData: Partial<Mock>) => {
      setMocks((prevMocks) => {
        const updatedMocks = prevMocks.map((mock) =>
          mock.id === id ? { ...mock, ...updatedData } : mock
        );
        saveMocks(updatedMocks);
        return updatedMocks;
      });
    },
    [saveMocks]
  );

  const deleteMock = useCallback(
    (id: string) => {
      setMocks((prevMocks) => {
        const updatedMocks = prevMocks.filter((mock) => mock.id !== id);
        saveMocks(updatedMocks);
        return updatedMocks;
      });
    },
    [saveMocks]
  );

  useEffect(() => {
    loadMocks();

    if (useExtensionStorage) {
      const handleStorageChange = (changes: {
        [key: string]: chrome.storage.StorageChange;
      }) => {
        if (changes[STORAGE_KEY]) {
          setMocks(changes[STORAGE_KEY].newValue || []);
        }
      };

      chrome.storage.onChanged.addListener(handleStorageChange);
      return () => {
        chrome.storage.onChanged.removeListener(handleStorageChange);
      };
    }
  }, [loadMocks]);

  const filteredMocks = useMemo(() => {
    if (!searchQuery) return mocks;

    const lowerSearch = searchQuery.toLowerCase();
    return mocks.filter((mock) =>
      mock.name?.toLowerCase().includes(lowerSearch)
    );
  }, [mocks, searchQuery]);

  return {
    filteredMocks,
    addMock,
    updateMock,
    deleteMock,
  };
};
