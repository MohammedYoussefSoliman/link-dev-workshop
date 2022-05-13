import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledIconButtonPropsType } from "../types";

const StyledButton = styled("button")<StyledIconButtonPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  min-width: 120px;
  padding: 8px 32px;
  background: transparent;
  height: 40px;
  cursor: pointer;
  ${({ size }) =>
    size === "lg" &&
    css`
      height: 60px;
    `};
  ${({ size }) =>
    size === "sm" &&
    css`
      height: 30px;
    `};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 20px;
    `};
  ${({ color }) => css`
    border: 1px solid ${color};
  `}
  &:hover {
    background: rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    border: 1px solid #f1f1f1;
  }
`;

export default StyledButton;
