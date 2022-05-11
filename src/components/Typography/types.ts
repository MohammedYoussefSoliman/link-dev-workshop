import { Property } from "csstype";
import { FontSize } from "theme/types";

export type HoverType = {
  decoration?: Property.TextDecoration;
  color?: Property.Color;
  fontWeight?: Property.FontWeight;
};

export type FontSizeType = FontSize | Property.FontSize;

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
  hover?: HoverType;
  as?: any;
};

export type TextPropsType = {
  localCode: string | number;
  fontSize?: FontSizeType;
  fontFamily?: Property.FontFamily;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: Property.Color;
  capitalizeFirstLetter?: boolean;
  textDecoration?: Property.TextDecoration;
  textAlign?: Property.TextAlign;
  direction?: Property.Direction;
  lineHeight?: Property.LineHeight;
  truncationWidth?: Property.Width;
  startAdornment?: string;
  endAdornment?: string;
  hover?: HoverType;
  isHeader?: boolean;
  length?: number;
};

export type StyledTextType = Omit<
  TextElementPropsType,
  "text" | "as" | "className"
> & {
  length?: number;
};
