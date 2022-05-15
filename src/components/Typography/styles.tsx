import { css } from "@emotion/react";
import styled from "@emotion/styled";
import theme from "theme";
import {
  configureFontSize,
  configureTruncation,
  configureAdornment,
  configureHover,
  manageFontSize,
} from "./styledMixins";
import { StyledTextType } from "./types";

const Text = styled("span")<StyledTextType>`
  ${({
    fontFamily,
    weight,
    color,
    textDecoration,
    textAlign,
    lineHeight,
  }) => css`
    font-family: ${fontFamily};
    font-weight: ${weight || 400};
    text-decoration: ${textDecoration};
    text-align: ${textAlign};
    line-height: ${lineHeight};
    color: ${color || theme.colors.primary[300]};
  `}
  ${({ fontSize, length, isHeader }) =>
    fontSize &&
    configureFontSize(
      isHeader ? manageFontSize(fontSize, length || 1) : fontSize,
    )};
  ${({ capitalizeFirstLetter }) =>
    capitalizeFirstLetter &&
    css`
      &:first-letter {
        text-transform: capitalize;
      }
    `};
  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `};
  ${({ truncationWidth }) =>
    truncationWidth && configureTruncation(truncationWidth)};
  ${({ startAdornment }) =>
    startAdornment && configureAdornment(startAdornment, "before")};
  ${({ endAdornment }) =>
    endAdornment && configureAdornment(endAdornment, "after")};
  ${({ hover }) => hover && configureHover(hover)};
  margin: 0;
  ${({ direction }) =>
    direction &&
    css`
      direction: ${direction};
    `};
  margin: 0;
`;

export default Text;
