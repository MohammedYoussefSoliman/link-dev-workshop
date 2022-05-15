import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function AlphaIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.89;
  const height = size ? calculateProperty(size, heightCoefficient) : 21;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "23.599"}
      height={height}
      viewBox="0 0 21 23.599"
    >
      <path
        d="M21,23.6H17.938l-2.5-6.615H5.431L3.077,23.6H0L9.051,0h2.864Zm-6.468-9.1-3.7-10.056a9.505,9.505,0,0,1-.363-1.58H10.4a8.816,8.816,0,0,1-.379,1.58L6.353,14.5Z"
        fill={color || colors.white}
      />
    </svg>
  );
}
