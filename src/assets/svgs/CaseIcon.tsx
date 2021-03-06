import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

export default function CaseIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "36"}
      height={size || "36"}
      viewBox="0 0 36 36"
    >
      <path
        d="M31.5,36H4.5a4.338,4.338,0,0,1-3.182-1.318A4.331,4.331,0,0,1,0,31.5v-18a4.338,4.338,0,0,1,1.318-3.182A4.331,4.331,0,0,1,4.5,9H9V5.625a5.18,5.18,0,0,1,1.793-4.008A5.642,5.642,0,0,1,14.625,0h6.75a5.642,5.642,0,0,1,3.832,1.617A5.18,5.18,0,0,1,27,5.625V9h4.5A4.5,4.5,0,0,1,36,13.5v18A4.5,4.5,0,0,1,31.5,36ZM10.125,15.75a3.381,3.381,0,0,0-2.391,5.766,3.253,3.253,0,0,0,2.391.984,3.381,3.381,0,0,0,2.391-5.766,3.257,3.257,0,0,0-2.391-.984Zm12.375-9A2.22,2.22,0,0,0,20.25,4.5h-4.5a2.192,2.192,0,0,0-1.582.65,2.145,2.145,0,0,0-.668,1.6V9h9ZM29.25,22.5l-9,2.25L22.5,31.5l9-2.25Z"
        fill={color || colors.white}
      />
    </svg>
  );
}
