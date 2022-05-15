import React from "react";
import { useTheme } from "@emotion/react";
import Typography from "components/Typography";
import StyledCard from "./styles";
import { BenefitCardPropsType } from "../types";

export default function BenefitCard({
  title,
  Icon,
  iconSize,
  className,
}: BenefitCardPropsType) {
  const theme = useTheme();

  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledCard
        direction="column"
        justify="center"
        align="center"
        className={className}
        gap="25px"
      >
        <Icon
          color={hover ? theme.colors.primary[300] : theme.colors.white}
          size={iconSize}
        />
        <Typography.Small
          className="title"
          text={title}
          weight={400}
          color={hover ? theme.colors.primary[300] : theme.colors.white}
        />
      </StyledCard>
    </div>
  );
}
