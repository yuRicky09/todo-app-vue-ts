<template>
  <li
    class="group relative flex items-center gap-6 py-3 px-4"
    draggable="true"
    @dragstart="handleDragStart"
  >
    <TodoCheckbox v-model="isChecked" />
    <p
      class="overflow-x-auto text-lg"
      :class="{ 'text-gray-400 line-through': isChecked }"
    >
      {{ todoItem.content }}
    </p>
    <CrossIcon
      class="absolute top-1/2 right-4 hidden -translate-y-1/2 cursor-pointer group-hover:block"
      @click="deleteTodo"
    />
  </li>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import CrossIcon from "@/assets/images/icon-cross.svg";
import TodoCheckbox from "@/components/TodoCheckbox.vue";
import { useTodoStore } from "@/stores/todo";

import type { TodoItem } from "@/type/todo/todoItem";

const props = defineProps<{
  todoItem: TodoItem;
}>();

const isChecked = ref(props.todoItem.completed);
const todoStore = useTodoStore();

function deleteTodo() {
  const needDelete = confirm("Are you sure?");

  if (needDelete) {
    todoStore.deleteTodo(props.todoItem.id);
  }
}

function handleDragStart($event: DragEvent) {
  const id = props.todoItem.id;

  if ($event.dataTransfer) {
    $event.dataTransfer.setData("id", id);
  }
}

watch(isChecked, (newValue) => {
  todoStore.updateTodo(newValue, props.todoItem.id);
});
</script>
