<template>
  <header class="mb-10">
    <div class="flex items-baseline justify-between">
      <h1 class="text-5xl font-bold text-light-gray">TODO</h1>
      <MoonIcon
        v-if="themeStore.theme === 'light'"
        class="cursor-pointer"
        @click="setPreferTheme('dark', 'light')"
      />
      <SunIcon
        v-else
        class="cursor-pointer"
        @click="setPreferTheme('light', 'dark')"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/stores/theme";
import MoonIcon from "@/assets/images/icon-moon.svg";
import SunIcon from "@/assets/images/icon-sun.svg";

const themeStore = useThemeStore();
const { setPreferTheme } = themeStore;
</script>
