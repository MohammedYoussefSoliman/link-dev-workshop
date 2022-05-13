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
  h1: ResponsiveSettings;
  h2: ResponsiveSettings;
  h3: ResponsiveSettings;
  h4: ResponsiveSettings;
  h5: ResponsiveSettings;
  p1: ResponsiveSettings;
  p2: ResponsiveSettings;
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
