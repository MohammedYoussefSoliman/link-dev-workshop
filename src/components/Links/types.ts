import { Property } from "csstype";
import React from "react";

export type LinkTypeProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  color?: Property.Color;
  callback?: () => void;
  relative?: boolean;
};
export type NavLinkTypeProps = {
  to: string;
  children: string;
  className?: string;
  color?: Property.Color;
  callback?: () => void;
  relative?: boolean;
};

export type DirectLinkTypeProps = {
  to: string;
  iconColor?: Property.Color;
  className?: string;
  variant: "vertical" | "horizontal";
};
