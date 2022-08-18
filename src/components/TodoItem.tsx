import React from "react";
import { TodostProps } from "../../@types/global";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }: TodostProps) => {
  const handleCheckboxClick = () => {
    dispatch(toggleComple({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };
  return (
    <li>
      <div>
        <span>
          <input type="checkbox" className="mr-3" checked={completed}></input>
          {title}
        </span>
        <button type="button">Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
