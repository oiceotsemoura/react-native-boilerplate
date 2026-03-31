import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

// Initialize MMKV storage
// @ts-ignore - MMKV constructor works at runtime
export const storage = new MMKV();

export const zustandStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    // @ts-ignore - delete method exists at runtime
    return storage.delete(name);
  },
};
