import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function MenuIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.875;
  const height = size ? calculateProperty(size, heightCoefficient) : 33;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "37.714"}
      height={height}
      viewBox="0 0 37.714 33"
    >
      <g transform="translate(-1374 1402)">
        <path
          d="M6,9.857A2.357,2.357,0,0,1,8.357,7.5h33a2.357,2.357,0,1,1,0,4.714h-33A2.357,2.357,0,0,1,6,9.857Z"
          transform="translate(1368 -1409.5)"
          fill={colors.white || color}
        />
        <path
          d="M6,27.857A2.357,2.357,0,0,1,8.357,25.5h33a2.357,2.357,0,0,1,0,4.714h-33A2.357,2.357,0,0,1,6,27.857Z"
          transform="translate(1368 -1399.214)"
          fill={colors.white || color}
        />
        <path
          d="M17.357,16.5a2.357,2.357,0,1,0,0,4.714H36.214a2.357,2.357,0,0,0,0-4.714Z"
          transform="translate(1373.143 -1404.357)"
          fill={colors.white || color}
        />
      </g>
    </svg>
  );
}
