import React from "react";
import { useHTTP } from "app/hooks";
import Wrapper from "./styles";
import HeroSection from "./HeroSection";
import { getHomeBanner, getHomeNews, structureHomeData } from "./services";

export default function Home() {
  const getHomeData = React.useCallback(async () => {
    const response = await Promise.all([getHomeBanner(), getHomeNews()]);
    return structureHomeData(response);
  }, []);
  const { response, isLoading } = useHTTP({ caller: getHomeData });

  if (isLoading) return null;

  return (
    <Wrapper>
      <HeroSection
        slides={response.slides}
        invest={response.invest}
        sectors={response.sectors}
      />
    </Wrapper>
  );
}
