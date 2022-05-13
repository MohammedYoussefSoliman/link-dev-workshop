import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

export default function SearchIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
    >
      <path
        id="Path_58308"
        data-name="Path 58308"
        d="M30.6,29.616,25.15,24.163a10.5,10.5,0,1,0-.987.987L29.616,30.6a.7.7,0,0,0,.987-.987ZM10.861,23.694a9.074,9.074,0,1,1,6.416,2.658,9.016,9.016,0,0,1-6.416-2.658Z"
        transform="translate(-6.808 -6.808)"
        fill={colors.white || color}
      />
    </svg>
  );
}
