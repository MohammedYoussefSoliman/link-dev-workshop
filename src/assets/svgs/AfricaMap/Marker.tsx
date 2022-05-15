import React from "react";

type PropsType = {
  wrapperTransform: string;
  value: number;
};

function Marker({ wrapperTransform, value }: PropsType) {
  return (
    <g transform={wrapperTransform}>
      <g transform="translate(887.58 1260.8)">
        <path
          id="md-pin-96"
          fill="#b27208"
          d="M43.959 2.25C23.492 2.25 6.75 18.658 6.75 38.715c0 27.349 37.209 67.72 37.209 67.72s37.209-40.371 37.209-67.72C81.167 18.658 64.425 2.25 43.959 2.25zm0 49.489a13.027 13.027 0 110-26.049 13.027 13.027 0 110 26.049z"
          data-name="md-pin"
          transform="translate(342.67 426.4)"
        />
      </g>
      <circle
        id="Ellipse_394-48"
        cx="26.5"
        cy="26.5"
        r="26.5"
        fill="#fff"
        data-name="Ellipse 394"
        transform="translate(1248 1701)"
      />
      <text
        id="_287-48"
        fill="#193f3d"
        data-name="287"
        fontFamily="SegoeUI-Bold, Segoe UI"
        fontSize="24"
        fontWeight="700"
        direction="ltr"
        transform="translate(1253 1737)"
      >
        <tspan x="0" y="0">
          {value}
        </tspan>
      </text>
    </g>
  );
}

export default Marker;
