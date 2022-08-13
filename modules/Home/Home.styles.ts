import { AccordionSummary } from "@mui/material";
import styled, { css } from "styled-components";

export const HomeWrapper = styled.div`
  margin: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const GroupHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  align-items: center;
`;

const openStyle = css`
  border-bottom: solid 2px #94cbe4;
  background-color: #def5ff;
  color: black;
`;

export const AccordionHeader = styled(AccordionSummary)<{
  $isOpen: boolean;
}>`
  color: #747474;
  ${(p) => p.$isOpen && openStyle}
`;
