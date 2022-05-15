import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function ChevronIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.545454;
  const height = size ? calculateProperty(size, heightCoefficient) : 6;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "11"}
      height={height}
      viewBox="0 0 11 6"
    >
      <path
        d="M25.5,46a.5.5,0,0,1-.353-.146l-5-5a.5.5,0,0,1,.707-.707L25.5,44.793l4.646-4.646a.5.5,0,1,1,.707.707l-5,5A.5.5,0,0,1,25.5,46Z"
        transform="translate(-20 -40)"
        fill={color || colors.white}
      />
    </svg>
  );
}
