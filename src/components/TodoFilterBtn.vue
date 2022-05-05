<template>
  <button
    class="hover:text-zinc-500 dark:hover:text-dark-light-gray-blue-hover"
    :class="{ 'text-bright-blue': todoStore.filterType === text }"
    @click="todoStore.filterType = text"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todo";

defineProps<{ text: "All" | "Active" | "Completed" }>();

const todoStore = useTodoStore();
</script>
