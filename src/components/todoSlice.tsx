import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// createSlice => 임포트 리듀서를 간단하게 타입별로 나눠서 잘라 쓸 수 있게 해줌
// types
import { TodosProps } from "../../@types/global";
import { RootState } from "../redux/store";

const initialState = [
  // 초깃값 설정 후 배열로 받아오니까 배열 설정
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];
const TODOS = "TODOS";

export const todoSlice = createSlice({
  name: TODOS,
  initialState,
  reducers: {
    // 투두 추가
    addTodo: (state, action: PayloadAction<TodosProps>) => {
      const todo = {
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    // 투두스 완성
    toggleComplte: (state, action: PayloadAction<TodosProps>) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    delteTodo: (state, action: PayloadAction<TodosProps>) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});
export const { addTodo, toggleComplte, delteTodo } = todoSlice.actions;
export const useAppSelector = (state: RootState) => state.todoSlice;
export default todoSlice.reducer;
