import tinyColor from "tinycolor2";

const colors = {
  primary: {
    100: "#486665",
    200: "#274A48",
    300: "#193F3D",
  },
  secondary: {
    100: tinyColor("#B27208").lighten(15).toString(),
    200: tinyColor("#B27208").lighten(10).toString(),
    300: "#B27208",
  },
  white: "#FFFFFF",
  error: {
    100: tinyColor("#f5251a").lighten(15).toString(),
    200: tinyColor("#f5251a").lighten(10).toString(),
    300: "#f5251a",
  },
};

export default colors;
