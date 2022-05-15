import { Property } from "csstype";
import { ResponsiveSettings } from "theme/types";

export type HoverType = {
  decoration?: Property.TextDecoration;
  color?: Property.Color;
  fontWeight?: Property.FontWeight;
};

export type FontSizeType = ResponsiveSettings | Property.FontSize;

export type TextElementPropsType = {
  text: string | number;
  fontSize?: FontSizeType;
  fontFamily?: Property.FontFamily;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: Property.Color;
  textDecoration?: Property.TextDecoration;
  textAlign?: Property.TextAlign;
  lineHeight?: Property.LineHeight;
  isHeader?: boolean;
  direction?: Property.Direction;
  truncationWidth?: Property.Width;
  capitalizeFirstLetter?: boolean;
  startAdornment?: string;
  className?: string;
  endAdornment?: string;
  textTransform?: Property.TextTransform;
  hover?: HoverType;
  as?: any;
};

export type StyledTextType = Omit<
  TextElementPropsType,
  "text" | "as" | "className"
> & {
  length?: number;
};
