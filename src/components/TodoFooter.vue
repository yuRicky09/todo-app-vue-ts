<template>
  <div class="flex items-center justify-between py-3 px-4">
    <span>{{ activeTodoList.length }} items left</span>
    <div class="space-x-3">
      <TodoFilterBtn text="All" />
      <TodoFilterBtn text="Active" />
      <TodoFilterBtn text="Completed" />
    </div>
    <button class="hover:text-zinc-500" @click="clearCompletedTodo">
      Clear Completed
    </button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useTodoStore } from "@/stores/todo";
import TodoFilterBtn from "@/components/TodoFilterBtn.vue";

const todoStore = useTodoStore();
const { activeTodoList, completedTodoList } = storeToRefs(todoStore);

function clearCompletedTodo() {
  if (completedTodoList.value.length === 0)
    return alert("Do not have completedTodo");

  const needClear = confirm("Are you sure?");
  if (needClear) {
    todoStore.clearCompletedTodo();
  }
}
</script>
