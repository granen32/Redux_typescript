// todosProps의 타입 설정
interface TodosProps {
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

export type { TodosProps, ToggleTodos, IdTodos };
