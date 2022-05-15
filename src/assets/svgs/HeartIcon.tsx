import { Property } from "csstype";
import { useTheme } from "@emotion/react";

type SVGPropsType = {
  size?: number;
  color?: Property.Color;
  filled?: boolean;
};

const calculateProperty = (size: number, coefficient: number) =>
  size * coefficient;

export default function HeartIcon({ size, color, filled }: SVGPropsType) {
  const { colors } = useTheme();
  const heightCoefficient = 0.9431;
  const height = size ? calculateProperty(size, heightCoefficient) : 27.35;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "29"}
      height={height}
      viewBox="0 0 29 27.35"
    >
      {filled ? (
        <path
          id="ic_favorite_24px"
          d="M16.5,30.35l-2.1-1.967C6.93,21.422,2,16.831,2,11.2A8.01,8.01,0,0,1,9.975,3,8.589,8.589,0,0,1,16.5,6.115,8.589,8.589,0,0,1,23.025,3,8.01,8.01,0,0,1,31,11.2c0,5.634-4.93,10.225-12.4,17.2Z"
          transform="translate(-2 -3)"
          fill={color || colors.primary[300]}
        />
      ) : (
        <path
          id="ic_favorite_border_24px"
          d="M23.025,3A8.589,8.589,0,0,0,16.5,6.115,8.589,8.589,0,0,0,9.975,3,8.01,8.01,0,0,0,2,11.2c0,5.634,4.93,10.225,12.4,17.2l2.1,1.953,2.1-1.967C26.07,21.422,31,16.831,31,11.2A8.01,8.01,0,0,0,23.025,3Zm-6.38,23.177-.145.149-.145-.149C9.453,19.753,4.9,15.5,4.9,11.2A5.026,5.026,0,0,1,9.975,5.981,5.668,5.668,0,0,1,15.151,9.5h2.711a5.633,5.633,0,0,1,5.162-3.517A5.026,5.026,0,0,1,28.1,11.2C28.1,15.5,23.547,19.753,16.645,26.177Z"
          transform="translate(-2 -3)"
          fill={color || colors.primary[300]}
        />
      )}
    </svg>
  );
}
