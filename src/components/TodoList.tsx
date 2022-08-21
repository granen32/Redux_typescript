import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { clearList } from "../redux/todoSlice";

// styles
const ListBox = styled.div`
  padding: 2px 5px;
  border-radius: 15px;
  background: #fff;
  span {
    color: #000;
  }
`;

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todoSlice);
  const handleClear = () => {
    dispatch(clearList());
  };
  return (
    <>
      <ListBox>
        <ul>
          {todos.map((todo) => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
        <button onClick={handleClear} className="w-100 btn btn-danger mt-3">
          CLEAR LIST
        </button>
      </ListBox>
    </>
  );
};

export default TodoList;
