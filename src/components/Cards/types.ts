import React from "react";
import { Property } from "csstype";

type IconPropsType = {
  size?: number;
  color?: Property.Color;
};

export type BenefitCardPropsType = {
  className?: string;
  title: string;
  Icon: React.ComponentType<IconPropsType>;
  iconSize?: number;
};
