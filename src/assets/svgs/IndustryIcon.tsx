import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

export default function IndustryIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "36"}
      height={size || "36"}
      viewBox="0 0 36.002 36.003"
    >
      <path
        id="industry"
        d="M9,0a1.236,1.236,0,0,1,.9.382,1.236,1.236,0,0,1,.382.9v17.9l10.768-8.618a1.293,1.293,0,0,1,2.09,1.005v7.614l10.768-8.618A1.293,1.293,0,0,1,36,11.574V34.717A1.3,1.3,0,0,1,34.716,36H1.286a1.236,1.236,0,0,1-.9-.382,1.236,1.236,0,0,1-.382-.9V1.286a1.236,1.236,0,0,1,.382-.9A1.236,1.236,0,0,1,1.286,0Z"
        fill={colors.white || color}
      />
    </svg>
  );
}
