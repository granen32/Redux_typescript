import { configureStore } from "@reduxjs/toolkit";
// state 타입을 얻기 위해 루트 리듀서를 미리 정의하고 리턴 타입을 추출해주면 됨!
// state 일므은 일반적으로 과도하게 사용되므로 혼동을 방지하기 위해 RootState 와 같이 다른 이름을 지정하는 것이 좋다.
import todoSlice from "./todoSlice";
const store = configureStore({
  reducer: { todos: todoSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
