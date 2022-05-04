<template>
  <main class="my-12 rounded-md bg-white shadow-md">
    <ul v-if="todoStore.todoList.length > 0">
      <TodoItem
        v-for="todoItem in todoStore.filteredTodoList"
        :key="todoItem.id"
        :todo-item="todoItem"
        class="border-b-[1px] border-light-gray-blue-2"
      />
    </ul>
    <TodoFooter />
  </main>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
</script>
