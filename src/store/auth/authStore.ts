import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from '@shared/utils/storage';
import { User } from '@shared/interfaces/User/User';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  onboardingCompleted: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setOnboardingCompleted: (completed: boolean) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null,
      token: null,
      isAuthenticated: false,
      onboardingCompleted: false,

      setUser: user => set({ user }),

      setToken: token => set({ token }),

      setOnboardingCompleted: completed =>
        set({ onboardingCompleted: completed }),

      login: (user, token) => {
        set({ user, token, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
