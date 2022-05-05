<template>
  <main class="my-12 rounded-md bg-white shadow-md dark:bg-dark-very-dark-blue">
    <ul
      v-if="todoStore.filteredTodoList.length > 0"
      @dragover.prevent=""
      @drop.prevent="handlerDrop"
    >
      <TodoItem
        v-for="todoItem in todoStore.filteredTodoList"
        :key="todoItem.id"
        :todo-item="todoItem"
        :data-id="todoItem.id"
        class="border-b-[1px] border-light-gray-blue-2 dark:border-dark-very-gray-blue-2"
      />
    </ul>
    <div v-else class="p-10 text-center">
      <p>Empty</p>
    </div>
    <TodoFooter />
  </main>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import TodoFooter from "@/components/TodoFooter.vue";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();

function handlerDrop($event: DragEvent) {
  // 抓出要被移動的todoItem在todoList中的index位置
  // 抓出要被放置的地方的todoItem在todoList中的index位置
  // 兩者互換
  if (!$event.dataTransfer) return;

  const beDraggedItemId = $event.dataTransfer.getData("id");
  const beDraggedItemIndex = todoStore.todoList.findIndex(
    (todo) => todo.id === beDraggedItemId
  );

  const inDropZoneItemId = (
    ($event.target as HTMLElement).closest("li") as HTMLLIElement
  ).dataset.id;

  if (beDraggedItemId === inDropZoneItemId) return;

  const inDropZoneItemIndex = todoStore.todoList.findIndex(
    (todo) => todo.id === inDropZoneItemId
  );

  todoStore.moveTodo(beDraggedItemIndex, inDropZoneItemIndex);
}
</script>
