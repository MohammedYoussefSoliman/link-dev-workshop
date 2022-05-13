import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

export default function TimesIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "30"}
      height={size || "30"}
      viewBox="0 0 30.002 30.002"
    >
      <g id="Close" transform="translate(-1824.856 -46.499)">
        <path
          d="M6,9.857A2.357,2.357,0,0,1,8.357,7.5h33a2.357,2.357,0,1,1,0,4.714h-33A2.357,2.357,0,0,1,6,9.857Z"
          transform="translate(1815.31 72.107) rotate(-45)"
          fill={colors.white || color}
        />
        <path
          d="M0,2.357A2.357,2.357,0,0,0,2.357,4.714h33a2.357,2.357,0,1,0,0-4.714h-33A2.357,2.357,0,0,0,0,2.357Z"
          transform="translate(1851.524 76.501) rotate(-135)"
          fill={colors.white || color}
        />
      </g>
    </svg>
  );
}
