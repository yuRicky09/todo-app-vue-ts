import type { TodoItem } from "@/type/todo/todoItem";

type FilterType = "All" | "Active" | "Completed";

export interface TodoState {
  todoList: TodoItem[];
  filterType: FilterType;
}
