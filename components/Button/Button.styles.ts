import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: white;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 8px #4d4d4d40;
  border-radius: 14px;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(0.97);
    transition: transform 0.3s;
  }
`;
