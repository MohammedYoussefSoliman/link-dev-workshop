import React from "react";
import { useTheme } from "@emotion/react";
import { DirectLink } from "components/Links";
import { Flex } from "components/Wrappers";
import Typography from "components/Typography";
import Wrapper from "./styles";

type InvestCardProps = {
  id: string | number;
  title: string;
};

export default function InvestCard({ id, title }: InvestCardProps) {
  const { colors } = useTheme();

  return (
    <Wrapper direction="column" gap="10px">
      <div className="sticker">
        <Typography.Small text="recentInvest" color={colors.white} />
      </div>
      <Flex gap="16px" fullWidth flex={1}>
        <Typography.H2 text={title} color={colors.white} />
        <DirectLink
          className="link"
          variant="vertical"
          to={`${id}`}
          iconColor={colors.secondary[300]}
        />
      </Flex>
    </Wrapper>
  );
}
