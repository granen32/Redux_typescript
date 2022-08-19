import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// createSlice => 임포트 리듀서를 간단하게 타입별로 나눠서 잘라 쓸 수 있게 해줌
// types
import { TodostProps, CustomAction } from "../../@types/global";
const initialState: TodostProps[] = [
  // 초깃값 설정 후 배열로 받아오니까 배열 설정
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];

const TODOS = "TODOS";

export const todoSlice: CaseReducer<State, PayloadAction<number>> = createSlice(
  {
    name: TODOS,
    initialState,
    reducers: {
      // 투두 추가
      addTodo: (state, action) => {
        const todo = {
          id: action.payload.todo.id,
          title: action.payload.todo.title,
          completed: false,
        };
        state.push(todo);
      },
      // 투두스 완성
      toggleComplte: (state, action) => {
        const index = state.findIndex(
          (todo) => todo.id === action.payload.todo.id
        );
        state[index].completed = action.payload.todo.completed;
      },
      delteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.todo.id);
      },
    },
  }
);
export const { addTodo, toggleComplte, delteTodo } = todoSlice.reducer;
export default todoSlice.reducer;
