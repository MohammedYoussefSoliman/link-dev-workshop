import i18n from "i18next";
import { css } from "@emotion/react";
import { Property } from "csstype";
import devices from "theme/devices";
import { HoverType, FontSizeType } from "./types";

const lang = i18n.language;

export const configureTruncation = (truncationWidth: Property.Width) => css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: ${truncationWidth};
`;

export const configureAdornment = (
  content: string,
  direction: "before" | "after",
) => {
  if (direction === "before") {
    return css`
      &::before {
        content: "${content}";
        position: relative;
        right: ${lang === "ar" ? "-0.5ch" : "0.5ch"};
      }
    `;
  }
  return css`
    &::after {
      content: "${content}";
      position: relative;
      left: ${lang === "ar" ? "-0.5ch" : "0.5ch"};
    }
  `;
};

export const manageFontSize = (
  fontSize: FontSizeType,
  length: number,
): FontSizeType => {
  let fontSizeRatio = 1;
  if (length > 30 && length < 45) fontSizeRatio = 0.85;
  if (length >= 45) fontSizeRatio = 0.7;

  if (fontSize instanceof Object) {
    const fontSizeKeys = Object.keys(fontSize);
    const fontSizeValues = Object.values(fontSize);
    let managedFontSize = {};
    // eslint-disable-next-line array-callback-return
    fontSizeKeys.map((key, index) => {
      managedFontSize = {
        ...managedFontSize,
        [key]: `calc(${fontSizeValues[index]} * ${fontSizeRatio})`,
      };
    });
    return managedFontSize as FontSizeType;
  }
  return `calc(${fontSize} * ${fontSizeRatio})`;
};

export const configureFontSize = (fontSize: FontSizeType) => {
  if (fontSize instanceof Object) {
    return css`
      font-size: ${fontSize.xSmall};
      ${devices.small} {
        font-size: ${fontSize.small || fontSize.xSmall};
      }
      ${devices.medium} {
        font-size: ${fontSize.medium || fontSize.small || fontSize.xSmall};
      }
      ${devices.large} {
        font-size: ${fontSize.large ||
        fontSize.medium ||
        fontSize.small ||
        fontSize.xSmall};
      }
      ${devices.xxLarge} {
        font-size: ${fontSize.xxLarge ||
        fontSize.large ||
        fontSize.medium ||
        fontSize.small ||
        fontSize.xSmall};
      }
      ${devices.hd} {
        font-size: ${fontSize.hd ||
        fontSize.xxLarge ||
        fontSize.large ||
        fontSize.medium ||
        fontSize.small ||
        fontSize.xSmall};
      }
    `;
  }
  return css`
    font-size: ${fontSize};
  `;
};

export const configureHover = (hoverStyles: HoverType) => css`
  &:hover {
    text-decoration: ${hoverStyles.decoration};
    color: ${hoverStyles.color};
    font-weight: ${hoverStyles.fontWeight};
  }
`;
