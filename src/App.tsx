import React from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import AddTodoForm from "./components/AddTodoForm";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #011638;
  height: 100vh;
  color: #fff;
`;

function App() {
  return (
    <>
      <Container>
        <GlobalStyle />
        <AddTodoForm />
      </Container>
    </>
  );
}

export default App;
