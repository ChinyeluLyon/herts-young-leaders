import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 8px #4d4d4d40;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 20px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #c2e2ff;
    transition: 0.3s;
  }
`;
