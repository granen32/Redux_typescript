import { createSlice } from "@reduxjs/toolkit";
// createSlice => 임포트 리듀서를 간단하게 타입별로 나눠서 잘라 쓸 수 있게 해줌
const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: false },
];

export const todoSlice = createSlice({
  name: "todos",
  // createSlice의 이름 설정
  initialState,
});

export default todoSlice.reducer;
