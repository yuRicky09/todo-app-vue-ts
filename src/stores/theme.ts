import { defineStore } from "pinia";

import type { ThemeState } from "@/type/theme/themeState";
import type { Theme } from "@/type/theme/theme";

export const useThemeStore = defineStore("themeStore", {
  state: (): ThemeState => {
    return {
      theme: "light",
    };
  },
  actions: {
    getPreferTheme() {
      if (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-schema: dark)").matches)
      ) {
        this.theme = "dark";
        this.setPreferTheme("dark", "light");
      } else {
        this.theme = "light";
        this.setPreferTheme("light", "dark");
      }
    },
    setPreferTheme(preferTheme: Theme, currentTheme: Theme) {
      this.theme = preferTheme;

      document.documentElement.classList.add(preferTheme);
      document.documentElement.classList.remove(currentTheme);

      localStorage.setItem("theme", preferTheme);
    },
  },
});
