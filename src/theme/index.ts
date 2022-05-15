import colors from "./colors";
import { ThemeType } from "./types";

const theme: ThemeType = {
  fontSizes: {
    h1: {
      xSmall: "24px",
      small: "32px",
      medium: "36px",
      large: "40px",
      xLarge: "50px",
      xxLarge: "60px",
      hd: "70px",
    },
    h2: {
      xSmall: "26px",
      xLarge: "30px",
      xxLarge: "36px",
      hd: "42px",
    },
    h3: {
      xSmall: "22px",
      xLarge: "28px",
      xxLarge: "32px",
      hd: "36px",
    },
    h4: {
      xSmall: "18px",
      xLarge: "21px",
      xxLarge: "26px",
      hd: "30px",
    },
    h5: {
      xSmall: "16px",
      xLarge: "19px",
      xxLarge: "24px",
      hd: "28px",
    },
    p1: {
      xSmall: "14px",
      xLarge: "16px",
      xxLarge: "20px",
      hd: "22px",
    },
    p2: {
      xSmall: "12px",
      xLarge: "16px",
      xxLarge: "18px",
      hd: "20px",
    },
    small: {
      xSmall: "10px",
      xLarge: "14px",
      xxLarge: "16px",
      hd: "18px",
    },
  },
  font: "segeoUI",
  colors,
};

export default theme;
