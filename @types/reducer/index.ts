// 리듀서 타입 지정
import { ActionType } from "./type";

interface AddTodo {
  type: ActionType.ADDTODO;
}
interface ToggleComplte {
  type: ActionType.TOGGLECOMPLTE;
}
interface DelteTodo {
  type: ActionType.DELTETODO;
}

export type Actions = AddTodo | ToggleComplte | DelteTodo;
