import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function FacebookIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 2.0575;
  const height = size ? calculateProperty(size, heightCoefficient) : 18.106;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "8.8"}
      height={height}
      viewBox="0 0 8.8 18.106"
    >
      <path
        id="facebook"
        d="M2.247,18.106V9.61H0V6.551H2.247V3.939C2.247,1.886,3.573,0,6.631,0A18.565,18.565,0,0,1,8.784.119L8.712,2.975s-.933-.009-1.952-.009c-1.1,0-1.279.508-1.279,1.351V6.551H8.8L8.656,9.61H5.481v8.5H2.247"
        fill={color || colors.white}
      />
    </svg>
  );
}
