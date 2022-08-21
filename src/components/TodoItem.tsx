import React from "react";
import { TodostProps } from "../../@types/global";
import { useAppDispatch } from "../redux/hooks";
import { toggleComplte, delteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }: TodostProps) => {
  const dispatch = useAppDispatch();
  const handleCheckboxClick = () => {
    dispatch(toggleComplte({ id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(delteTodo({ id }));
  };
  return (
    <li>
      <div>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onClick={handleCheckboxClick}
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
