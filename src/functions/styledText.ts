import { css } from "@emotion/react";

const styledText = (
  weight: 300 | 400 | 500 | 600,
  size: number | string,
  fontFamily: string,
) =>
  css`
    font-family: ${fontFamily};
    font-weight: ${weight};
    font-size: ${size}px;
  `;

export default styledText;
