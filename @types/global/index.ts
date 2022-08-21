// todosProps의 타입 설정
interface TodostProps {
  id: number;
  title: string;
  completed: boolean;
}

type ToggleTodos = {
  id: number;
  completed: boolean;
};

type IdTodos = {
  id: number;
};

export type { TodostProps, ToggleTodos, IdTodos };
