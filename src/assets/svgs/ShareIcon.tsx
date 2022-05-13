import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function ShareIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 1.1;
  const height = size ? calculateProperty(size, heightCoefficient) : 29.215;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "26.399"}
      height={height}
      viewBox="0 0 26.399 29.215"
    >
      <path
        id="ic_share_24px"
        d="M25,22.65a4.271,4.271,0,0,0-2.875,1.129L11.668,17.693a4.8,4.8,0,0,0,.132-1.027,4.8,4.8,0,0,0-.132-1.027L22.007,9.612A4.39,4.39,0,1,0,20.6,6.4a4.8,4.8,0,0,0,.132,1.027L10.392,13.454a4.4,4.4,0,1,0,0,6.424l10.442,6.1a4.138,4.138,0,0,0-.117.953A4.282,4.282,0,1,0,25,22.65Z"
        transform="translate(-3 -2)"
        fill={colors.primary[300] || color}
      />
    </svg>
  );
}
