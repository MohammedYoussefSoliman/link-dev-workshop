import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function EnergyIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 1.4545675;
  const height = size ? calculateProperty(size, heightCoefficient) : 36;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24.751"}
      height={height}
      viewBox="0 0 24.751 36.002"
    >
      <g transform="translate(-5.624 0.001)">
        <path
          id="Path_61391"
          data-name="Path 61391"
          d="M25.315.153a1.125,1.125,0,0,1,.511,1.305L21.773,14.625H29.25a1.125,1.125,0,0,1,.819,1.9l-18,19.125a1.125,1.125,0,0,1-1.894-1.1l4.052-13.169H6.75a1.125,1.125,0,0,1-.819-1.9l18-19.125a1.125,1.125,0,0,1,1.384-.2Z"
          fill={colors.white || color}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}
