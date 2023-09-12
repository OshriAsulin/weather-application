import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

 
  
export const useThemeStore = create(persist((set) => ({
  mode: "light",
  toggleColorMode: () => {
    set((state) => ({
      mode: state.mode === "light" ? "dark" : "light",
    }));
  },
}), {
  name: "theme-mode",
  storage: createJSONStorage(() => localStorage),
}));


