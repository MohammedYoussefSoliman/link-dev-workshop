import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function TwitterIcon({ size, color }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.8123266253;
  const height = size ? calculateProperty(size, heightCoefficient) : 16.106;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "19.827"}
      height={height}
      viewBox="0 0 19.827 16.106"
    >
      <path
        id="twitter-bird"
        d="M19.827,1.908a8.236,8.236,0,0,1-2.032,2.1q.012.233.012.526a11.684,11.684,0,0,1-1.929,6.4,12.358,12.358,0,0,1-2.328,2.649A10.38,10.38,0,0,1,10.3,15.42a11.864,11.864,0,0,1-4.066.686A11.322,11.322,0,0,1,0,14.278a8.8,8.8,0,0,0,.97.056,7.975,7.975,0,0,0,5.052-1.742,3.947,3.947,0,0,1-2.362-.812A4,4,0,0,1,2.225,9.767,4.066,4.066,0,0,0,4.062,9.7,3.964,3.964,0,0,1,1.727,8.3,3.936,3.936,0,0,1,.8,5.712v-.05a4.014,4.014,0,0,0,1.843.509A4.041,4.041,0,0,1,1.32,4.721,3.969,3.969,0,0,1,.832,2.787,4,4,0,0,1,1.382.743a11.581,11.581,0,0,0,3.709,3A11.3,11.3,0,0,0,9.764,4.994a3.977,3.977,0,0,1-.107-.926,3.918,3.918,0,0,1,1.192-2.875,4.069,4.069,0,0,1,5.845.091A8.1,8.1,0,0,0,19.276.3,3.933,3.933,0,0,1,17.49,2.547a8.129,8.129,0,0,0,2.337-.639Z"
        fill={colors.white || color}
      />
    </svg>
  );
}
