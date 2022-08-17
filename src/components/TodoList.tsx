import React, { useState } from "react";
import styled from "styled-components";
import { TodostProps } from "../../@types/global";

// styles
const ListBox = styled.div`
  padding: 2px 5px;
  border-radius: 15px;
  background: #fff;
`;

const TodoList = () => {
  const [todos, setTods] = useState<TodostProps[]>([
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ]);
  return (
    <>
      <ListBox></ListBox>
    </>
  );
};

export default TodoList;
