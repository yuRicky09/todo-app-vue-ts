import { defineStore } from "pinia";
import { nanoid } from "nanoid";

import { setItem } from "@/composables/useLocalStorage";

import type { TodoState } from "@/type/todo/todoState";
import type { TodoItem } from "@/type/todo/todoItem";

export const useTodoStore = defineStore("todoStore", {
  state: (): TodoState => {
    return {
      todoList: [],
      filterType: "All",
    };
  },
  getters: {
    allTodoList(state) {
      return state.todoList;
    },
    activeTodoList(state) {
      return state.todoList.filter((todoItem) => !todoItem.completed);
    },
    completedTodoList(state) {
      return state.todoList.filter((todoItem) => todoItem.completed);
    },
    filteredTodoList(state) {
      let todoList: TodoItem[];

      switch (state.filterType) {
        case "All":
          todoList = this.allTodoList;
          break;
        case "Active":
          todoList = this.activeTodoList;
          break;
        case "Completed":
          todoList = this.completedTodoList;
      }

      return todoList;
    },
  },
  actions: {
    addTodoItem(content: string, completed: boolean): void {
      const todoItem: TodoItem = {
        id: nanoid(),
        content,
        completed,
      };

      this.todoList.unshift(todoItem);

      setItem<TodoItem[]>("todoList", this.todoList);
    },
    clearCompletedTodo(): void {
      this.todoList = this.todoList.filter((todo) => !todo.completed);

      setItem<TodoItem[]>("todoList", this.todoList);
    },
    updateTodo(completed: boolean, id: string): void {
      const todo = this.todoList.find((todo) => todo.id === id);
      if (!todo) return;

      todo.completed = completed;
      setItem<TodoItem[]>("todoList", this.todoList);
    },
    deleteTodo(id: string): void {
      const todoIndex = this.todoList.findIndex((todo) => todo.id === id);

      if (todoIndex !== -1) {
        this.todoList.splice(todoIndex, 1);
        setItem<TodoItem[]>("todoList", this.todoList);
      }
    },
    moveTodo(beDraggedItemIndex: number, inDropZoneItemIndex: number) {
      [this.todoList[inDropZoneItemIndex], this.todoList[beDraggedItemIndex]] =
        [this.todoList[beDraggedItemIndex], this.todoList[inDropZoneItemIndex]];

      setItem<TodoItem[]>("todoList", this.todoList);
    },
  },
});
