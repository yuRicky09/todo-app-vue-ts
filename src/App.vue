<template>
  <div
    class="relative h-screen bg-light-gray before:absolute before:top-0 before:left-0 before:h-[40vh] before:w-full before:bg-[url('@/assets/images/bg-desktop-light.jpg')] before:bg-cover before:bg-no-repeat"
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

const todoStore = useTodoStore();

function init() {
  const todoList = getItem("todoList");
  todoList
    ? todoStore.$patch({ todoList })
    : todoStore.$patch({ todoList: [] });
}

init();
</script>
