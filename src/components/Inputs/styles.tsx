import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { styledText } from "app/functions";
// import devices from "theme/devices";
import { StyledInputWrapperProps, StyledInputProps } from "./types";

export const Wrapper = styled("div")<StyledInputWrapperProps>`
  position: relative;
  padding: 10px 8px;
  height: 40px;
  width: 100%;
  min-width: 100%;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 20px;
    `}
  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors.primary[200]};
  }
  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.primary[200]};
  }
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ error, theme }) =>
    error &&
    css`
      border: 1px solid ${theme.colors.error[300]};
      &:focus-within {
        outline: 2px solid ${theme.colors.error[300]};
      }
    `}
`;

export const Input = styled("input")<StyledInputProps>`
  flex: 1;
  background: transparent;
  outline: none;
  border: none;
  height: 100%;
  ${({ theme }) => styledText(400, 14, theme.font)}

  ${({ error, theme }) =>
    error &&
    css`
      &::placeholder {
        color: ${theme.colors.error[300]};
      }
    `}
`;
