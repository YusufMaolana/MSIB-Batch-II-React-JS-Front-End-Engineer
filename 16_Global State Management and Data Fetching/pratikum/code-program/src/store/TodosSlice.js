import { createSlice } from '@reduxjs/toolkit';

const initialValue = [
  {
    id: 1,
    title: 'Mengerjakan Exercise',
    completed: true,
  },
  {
    id: 2,
    title: 'Mengerjakan Assignment',
    completed: false,
  },
  {
    id: 3,
    title: 'Mengerjakan Soal',
    completed: true,
  },
];

export const todosSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: initialValue,
  },
  reducers: {
    todoTambah: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    todoHapus: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    todoCoret: (state, action) => {
      state.todos[action.payload].completed =
        !state.todos[action.payload].completed;
      state.todos = [...state.todos];
    },
  },
});

export const { todoTambah, todoHapus, todoCoret } = todosSlice.actions;
export default todosSlice.reducer;
