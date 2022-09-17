import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0a69ed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Form = styled.form`
  width: 380px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 16px;
  padding: 20px;
  gap: 10px;
`;

export const Inputs = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 25px;
  input {
    height: 20px;
  }
  p {
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 40px;
  color: white;
  background-color: #0a69ed;
  border-radius: 4px;
  font-size: 20px;
  border: none;
  border: none;
  cursor: pointer;
  outline: none;
`;
