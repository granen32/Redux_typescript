import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

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
  const todos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ];
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
