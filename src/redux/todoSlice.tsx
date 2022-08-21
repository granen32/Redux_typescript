import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// createSlice => 임포트 리듀서를 간단하게 타입별로 나눠서 잘라 쓸 수 있게 해줌
// types
import { TodosProps } from "../../@types/global";
import { RootState } from "./store";

const TODOS = "TODOS";

export const todoSlice = createSlice({
  name: TODOS,
  initialState: [
    { id: 1, title: "add item to list", completed: false },
    { id: 2, title: "you can delete item from list", completed: false },
    { id: 3, title: "click on item to completed", completed: false },
    { id: 4, title: "click on item again to uncompleted", completed: true },
    {
      id: 5,
      title: "item got completeded will be push to end of the list",
      completed: true,
    },
    {
      id: 6,
      title:
        "item  uncompleteded will be push back in head of the list (try double click on this one)",
      completed: false,
    },
  ],
  reducers: {
    // 투두 추가
    addTodo: (state, action: PayloadAction<TodosProps>) => {
      const newItem = {
        id: new Date().getTime(),
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.push(newItem);
    },
    delteTodo: (state, action: PayloadAction<TodosProps>) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    // 투두스 완성
    toggleComplte: (state, action: PayloadAction<TodosProps>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    // 전부 ㅂㅇ하기
    clearList: (state) => {
      return [];
    },
  },
});
export const { addTodo, toggleComplte, delteTodo, clearList } =
  todoSlice.actions;
export const useAppSelector = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
