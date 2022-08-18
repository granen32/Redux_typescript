import React from "react";
import { TodostProps } from "../../@types/global";

const TodoItem = ({ id, title, completed }: TodostProps) => {
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
