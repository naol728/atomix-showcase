import { createAtom } from "atomix-core";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
export interface InitalStat {
  todos: Todo[];
}
export interface Actions {
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
let nextId = 1;
export const todoAtom = createAtom<InitalStat, Actions>(
  {
    todos: [] as Todo[],
  },
  (set) => ({
    addTodo: (text: string) =>
      set((s) => ({
        todos: [...s.todos, { id: nextId++, text, completed: false }],
      })),
    toggleTodo: (id: number) =>
      set((s) => ({
        todos: s.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),
    removeTodo: (id: number) =>
      set((s) => ({ todos: s.todos.filter((el) => el.id !== id) })),
  })
);
