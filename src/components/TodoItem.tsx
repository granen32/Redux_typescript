import React from "react";
import { TodosProps } from "../../@types/global";
import { useAppDispatch } from "../redux/hooks";
import { toggleComplte, delteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }: TodosProps) => {
  const dispatch = useAppDispatch();
  const handleCheckboxClick = () => {
    dispatch(toggleComplte({ completed: !completed, id, title }));
  };
  const handleDeleteClick = () => {
    dispatch(delteTodo({ id, completed, title }));
  };
  return (
    <li>
      <div>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCheckboxClick}
          />
          {title}
        </span>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
