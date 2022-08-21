// custom hooks
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// 간단한 '디스패치 사용'과 '선택기 사용' 대신 앱 전체에서 사용
// 원형의 useDispatch, useSelector 대신 아래를 사용하면 된다
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
