import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function AgricultureIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 1.1846;
  const height = size ? calculateProperty(size, heightCoefficient) : 40.053;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "33.811"}
      height={height}
      viewBox="0 0 33.811 40.053"
    >
      <g id="tree-solid" transform="translate(-4.489 -1.988)">
        <path
          d="M21.394,2a16.278,16.278,0,0,0-1.251,32.531V28.028l-6.506-6.506a1.239,1.239,0,0,1,1.752-1.752l4.755,4.755V16.767l-3.378-3.378a1.239,1.239,0,0,1,1.752-1.752l4.129,4.129V19.52l4.129-4.129a1.239,1.239,0,1,1,1.752,1.752l-5.881,5.881V34.534A16.278,16.278,0,0,0,21.394,2Z"
          transform="translate(0 0)"
          fill={color || colors.white}
        />
        <path
          d="M18.251,28H17v6.256a1.251,1.251,0,0,0,2.5,0V28Z"
          transform="translate(3.143 6.534)"
          fill={color || colors.white}
        />
      </g>
    </svg>
  );
}
