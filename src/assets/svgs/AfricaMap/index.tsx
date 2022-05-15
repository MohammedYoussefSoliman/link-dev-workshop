import React from "react";
import MapLayout from "./MapLayout";
import Marker from "./Marker";

type MapPropsType = {
  locations: {
    countrySVGLocation: string;
    value: number;
  }[];
};

function AfricaMap({ locations }: MapPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="654.044"
      height="645.148"
      viewBox="0 0 654.044 645.148"
    >
      <g transform="translate(-1012.739 -1763.984)">
        <MapLayout />
        <g transform="translate(114.552 1100)">
          {locations.map((location) => (
            <Marker
              key={location.countrySVGLocation}
              wrapperTransform={location.countrySVGLocation}
              value={location.value}
            />
          ))}
        </g>
      </g>
    </svg>
  );
}

export default AfricaMap;
