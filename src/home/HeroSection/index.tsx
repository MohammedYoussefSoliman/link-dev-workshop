import React from "react";
import Aside from "components/Aside";
import { Flex } from "components/Wrappers";
import HeroWrapper from "./styles";
import HeroSlider from "./HeroSlider";
import InvestCard from "./InvestCard";
import SectorsSection from "./SectorsSection";
import { Slide } from "../types";

type HeroProps = {
  slides: Slide[];
  invest: {
    id: string | number;
    title: string;
  };
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

export default function HeroSection({ slides, invest, sectors }: HeroProps) {
  return (
    <HeroWrapper>
      <Aside className="aside" />
      <Flex
        direction="column"
        justify="flex-end"
        className="hero--content"
        flex={1}
        gap="60px"
        fullWidth
      >
        <HeroSlider slides={slides} />
        <Flex fullWidth>
          <InvestCard {...invest} />
          <SectorsSection sectors={sectors} />
        </Flex>
      </Flex>
    </HeroWrapper>
  );
}
