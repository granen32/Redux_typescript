import React, { useEffect } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { RootState } from "../redux/store";

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
      </ListBox>
    </>
  );
};

export default TodoList;
