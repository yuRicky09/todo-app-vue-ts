<template>
  <div
    class="flex items-center gap-6 rounded-md bg-white py-3 px-4 shadow-sm dark:bg-dark-very-dark-blue"
  >
    <TodoCheckbox v-model="isChecked" />
    <input
      v-model="enteredValue"
      type="text"
      placeholder="Create a new todo..."
      class="w-full bg-inherit py-2 text-xl placeholder:text-light-dark-gray-blue focus:outline-none dark:placeholder:text-dark-light-gray-blue"
      @keyup.enter="addTodoItem"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { useTodoStore } from "@/stores/todo";
import TodoCheckbox from "@/components/TodoCheckbox.vue";

const enteredValue = ref<string | null>(null);
const isChecked = ref(false);

const todoStore = useTodoStore();

function addTodoItem() {
  if (!enteredValue.value) return;

  todoStore.addTodoItem(enteredValue.value, isChecked.value);

  enteredValue.value = "";
  isChecked.value = false;
}
</script>
