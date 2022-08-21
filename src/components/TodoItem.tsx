import React from "react";
import { TodosProps } from "../../@types/global";
import { useDispatch } from "react-redux";
import { toggleComplte, delteTodo } from "../redux/todoSlice";
const TodoItem = ({ id, title, completed }: TodosProps) => {
  const dispatch = useDispatch();
  const handleCheckboxClick = () => {
    dispatch(toggleComplte({ completed: !completed, id }));
  };
  const handleDeleteClick = () => {
    dispatch(delteTodo({ id, title, completed }));
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
