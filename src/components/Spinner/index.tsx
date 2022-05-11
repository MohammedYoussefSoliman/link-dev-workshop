import CSS from "csstype";
import MuiCircularProgress, {
  CircularProgressProps,
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import MuiThemeProvider from "components/MuiThemeProvider";
import { useTheme } from "@emotion/react";
import SpinnerWrapper from "./styles";

interface SpinnerProps extends CircularProgressProps {
  bottomColor?: CSS.Property.Color;
  topColor?: CSS.Property.Color;
  margin?: CSS.Property.Padding;
}

export default function Spinner(props: SpinnerProps) {
  const { bottomColor, topColor, margin, size } = props;
  const { colors } = useTheme();

  return (
    <MuiThemeProvider>
      <SpinnerWrapper wrapperPadding={margin} size={`${size}px`}>
        <MuiCircularProgress
          variant="determinate"
          color="inherit"
          sx={{
            color: bottomColor || colors.primary[100],
            animationDuration: "700ms",
            position: "absolute",
            left: 0,
          }}
          size={50}
          thickness={5}
          value={100}
          {...props}
        />
        <MuiCircularProgress
          variant="indeterminate"
          color="inherit"
          sx={{
            color: topColor || colors.primary[300],
            animationDuration: "700ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={50}
          thickness={5}
          {...props}
        />
      </SpinnerWrapper>
    </MuiThemeProvider>
  );
}
