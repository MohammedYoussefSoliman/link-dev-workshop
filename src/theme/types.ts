export type FontSize = {
  xSmall: string;
  small?: string;
  medium?: string;
  large?: string;
  xLarge?: string;
  xxLarge?: string;
  hd?: string;
};

type FontSizes = {
  h1: FontSize;
  h2: FontSize;
  h3: FontSize;
  h4: FontSize;
  h5: FontSize;
  p1: FontSize;
  p2: FontSize;
};

type ColorType = {
  [key: number]: string;
};

export type ColorsType = {
  primary: ColorType;
  secondary: ColorType;
  error: ColorType;
  white: string;
};

export interface ThemeType {
  fontSizes: FontSizes;
  colors: ColorsType;
  font: string;
}
