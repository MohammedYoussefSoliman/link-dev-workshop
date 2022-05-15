import CSS from "csstype";
import React from "react";

export type FlexPropsType = {
  children: React.ReactNode;
  width?: CSS.Property.Width;
  height?: CSS.Property.Height;
  direction?: CSS.Property.FlexDirection;
  justify?: CSS.Property.JustifyContent;
  align?: CSS.Property.AlignItems;
  gap?: CSS.Property.Gap;
  flex?: CSS.Property.Flex;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  as?: any;
};

export type StyledFlexWrapper = Omit<FlexPropsType, "children" | "as">;
