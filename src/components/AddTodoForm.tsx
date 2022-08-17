import React, { useState } from "react";
import styled from "styled-components";

const FormWrap = styled.form`
  display: block;
  label {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }
`;

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };
  return (
    <>
      <FormWrap onSubmit={onSubmit}>
        <label className="sr-only">Name</label>
        <input
          type="text"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
          // 벨류값 확인
        ></input>
        <button type="submit">Submit</button>
      </FormWrap>
    </>
  );
};

export default AddTodoForm;
