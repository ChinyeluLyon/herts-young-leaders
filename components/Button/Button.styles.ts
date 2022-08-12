import styled, { css } from "styled-components";

const stretch = css`
  @keyframes stretch {
    0% {
      height: 56px;
    }
    100% {
      height: 300px;
    }
  }
`;

const hidden = css`
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear, height 0.9s;
`;

const selected = css`
  ${stretch};
  animation: stretch 1.5s ease-in-out;
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
  align-items: center;
  padding-left: 20px;
  transition: 0.3s;

  ${(p) => p.selected && selected}
  ${(p) => p.hidden && hidden}

  &:hover {
    cursor: pointer;
    background-color: #c2e2ff;
    transition: 0.3s;
  }
`;
