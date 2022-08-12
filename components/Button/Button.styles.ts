import styled, { css } from "styled-components";

const stretchAnim = css`
  @keyframes stretch {
    0% {
      height: 56px;
    }
    100% {
      height: 600px;
    }
  }

  animation: stretch 1.5s ease-in-out;
  animation-fill-mode: forwards;

  &:hover {
    background-color: white;
    transition: 0.3s;
  }
`;

const shrinkAnim = css`
  @keyframes shrink {
    0% {
      height: 600px;
    }
    100% {
      height: 56px;
    }
  }

  animation: shrink 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

const hideAnim = css`
  @keyframes hide {
    0% {
      padding-top: 20px;
      height: 56px;
      visibility: hidden;
    }
    100% {
      padding-top: 0px;
      height: 0px;
      visibility: hidden;
    }
  }

  animation: hide 1.5s ease-in-out;
  animation-fill-mode: forwards;
`;

export const Button = styled.div<{
  selected?: boolean;
  hidden?: boolean;
}>`
  width: 100%;
  border: none;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 0px 8px #4d4d4d40;
  border-radius: 14px;
  display: flex;
  gap: 10px;
  padding-top: 20px;
  padding-left: 20px;
  transition: 0.3s;

  ${(p) => (p.selected && !p.hidden ? stretchAnim : shrinkAnim)};
  ${(p) => p.hidden && hideAnim};

  &:hover {
    cursor: pointer;
    background-color: #c2e2ff;
    transition: 0.3s;
  }
`;
