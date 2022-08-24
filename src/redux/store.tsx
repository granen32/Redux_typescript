import { configureStore, combineReducers } from "@reduxjs/toolkit";
// 퍼시스트
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import todoSlice from "./todoSlice";
import thunk from "redux-thunk";
const reducers = combineReducers({
  todos: todoSlice,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

// state 타입을 얻기 위해 루트 리듀서를 미리 정의하고 리턴 타입을 추출해주면 됨!
// state 일므은 일반적으로 과도하게 사용되므로 혼동을 방지하기 위해 RootState 와 같이 다른 이름을 지정하는 것이 좋다.

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
