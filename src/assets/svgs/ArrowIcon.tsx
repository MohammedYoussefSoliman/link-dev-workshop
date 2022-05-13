import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
  direction?: "left" | "right";
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function ArrowIcon({ size, color, direction }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.5627;
  const height = size ? calculateProperty(size, heightCoefficient) : 38.208;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "67.9"}
      height={height}
      viewBox="0 0 67.9 38.208"
    >
      <path
        id="arrow"
        d="M49.923,8.534l-3.211,3.211L60.335,25.368H1.125v4.541H60.333L46.71,43.531l3.211,3.211,19.1-19.1Z"
        transform={
          direction === "left"
            ? "translate(69.025 46.742) rotate(180)"
            : "translate(-1.125 -8.534)"
        }
        fill={colors.primary[300] || color}
      />
    </svg>
  );
}
