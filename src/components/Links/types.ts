import { Property } from "csstype";
import React from "react";

export type LinkTypeProps = {
  to: string;
  children: React.ReactNode;
};

export type NavLinkTypeProps = {
  to: string;
  iconColor?: Property.Color;
  variant: "vertical" | "horizontal";
};
