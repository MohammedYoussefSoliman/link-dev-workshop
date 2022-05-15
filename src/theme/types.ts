export type ResponsiveSettings = {
  xSmall: string;
  small?: string;
  medium?: string;
  large?: string;
  xLarge?: string;
  xxLarge?: string;
  hd?: string;
};

type FontSizes = {
  [key: string]: ResponsiveSettings;
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
