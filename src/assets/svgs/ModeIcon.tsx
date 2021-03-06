import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

export default function ModeIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24.802"}
      height={size || "24.8"}
      viewBox="0 0 24.802 24.8"
    >
      <path
        id="contrast"
        d="M26.492,10.965a12.046,12.046,0,0,0-.939-2.223,12.55,12.55,0,0,0-2.134-2.861,12.4,12.4,0,1,0,0,17.537,12.55,12.55,0,0,0,2.134-2.861,12.046,12.046,0,0,0,.939-2.223,12.4,12.4,0,0,0,0-7.369ZM4.022,14.65A10.629,10.629,0,0,1,14.65,4.021V25.279A10.629,10.629,0,0,1,4.022,14.65Z"
        transform="translate(-2.251 -2.25)"
        fill={color || colors.white}
      />
    </svg>
  );
}
