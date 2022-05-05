<template>
  <div
    class="relative h-screen bg-light-gray font-Josefin transition-colors duration-200 before:absolute before:top-0 before:left-0 before:h-[40vh] before:w-full before:bg-[url('@/assets/images/bg-desktop-light.jpg')] before:bg-cover before:bg-no-repeat dark:bg-dark-dark-blue dark:text-dark-light-gray-blue dark:before:bg-[url('@/assets/images/bg-desktop-dark.jpg')]"
  >
    <div class="relative z-10 mx-auto max-w-lg py-24">
      <TheHeader />
      <TodoInput />
      <TodoList />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import { getItem } from "@/composables/useLocalStorage";
import { useTodoStore } from "@/stores/todo";
import { useThemeStore } from "@/stores/theme";

const todoStore = useTodoStore();
const themeStore = useThemeStore();

function init() {
  const todoList = getItem("todoList");
  todoList
    ? todoStore.$patch({ todoList })
    : todoStore.$patch({ todoList: [] });
}

init();
themeStore.getPreferTheme();
</script>
