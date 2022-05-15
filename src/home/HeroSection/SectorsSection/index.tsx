import React from "react";
import { useTheme } from "@emotion/react";
import { DirectLink } from "components/Links";
import {
  CaseIcon,
  HomeIcon,
  HeartbeatIcon,
  EnergyIcon,
  IndustryIcon,
  AgricultureIcon,
} from "assets/svgs";
import { Flex } from "components/Wrappers";
import { BenefitCard } from "components/Cards";
import Typography from "components/Typography";
import Wrapper from "./styles";

type InvestCardProps = {
  sectors: {
    id: string | number;
    title: string;
    icon:
      | "CaseIcon"
      | "HomeIcon"
      | "HeartbeatIcon"
      | "HeartbeatIcon"
      | "EnergyIcon"
      | "IndustryIcon"
      | "AgricultureIcon";
  }[];
};

const icons = {
  CaseIcon,
  HomeIcon,
  HeartbeatIcon,
  EnergyIcon,
  IndustryIcon,
  AgricultureIcon,
};

export default function SectorsSection({ sectors }: InvestCardProps) {
  const { colors } = useTheme();

  return (
    <Wrapper direction="column" gap="30px" flex={1}>
      <Flex justify="space-between" fullWidth>
        <div className="sticker">
          <Typography.Small text="investSectors" color={colors.white} />
        </div>
        <DirectLink className="link" variant="horizontal" to="/sectors" />
      </Flex>
      <Flex justify="space-between" fullWidth flex={1}>
        {sectors.map((sector) => (
          <BenefitCard
            key={sector.id}
            Icon={icons[sector.icon]!}
            title={sector.title}
          />
        ))}
      </Flex>
    </Wrapper>
  );
}
