import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "light" | "dark" | "system";

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: "system",
      setMode: (mode) => set({ mode }),
      toggleTheme: () => {
        const { mode } = get();
        if (mode === "system") {
          set({ mode: "dark" });
        } else {
          set({ mode: mode === "light" ? "dark" : "light" });
        }
      },
    }),
    {
      name: "theme-storage",
      // storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
