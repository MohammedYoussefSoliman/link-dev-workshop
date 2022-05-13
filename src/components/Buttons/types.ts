import React from "react";
import { Property } from "csstype";

export type IconPropsType = {
  size?: number;
  color?: Property.Color;
};

export type ButtonPropsType = {
  onClick?: () => void;
  children: React.ReactNode;
  color?: Property.Color;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  withBorder?: boolean;
  rounded?: boolean;
};

export type StyledButtonPropsType = Omit<
  ButtonPropsType,
  "children" | "isLoading"
>;

export type IconButtonPropsType = {
  onClick?: () => void;
  Icon: React.ComponentType<IconPropsType>;
  color: Property.Color;
  disabled?: boolean;
  iconColor?: string;
  iconSize?: number;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  className?: string;
  rounded?: boolean;
  withBorder?: boolean;
};

export type StyledIconButtonPropsType = Omit<
  IconButtonPropsType,
  "Icon" | "iconColor" | "iconSize"
>;

export type NavigationButtonPropsType = {
  onClick?: () => void;
  direction: "left" | "right";
  isLoading?: boolean;
  disabled?: boolean;
  iconColor?: string;
  iconSize?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
  withBorder?: boolean;
};

export type StyledNavigationButtonType = Omit<IconButtonPropsType, "direction">;
