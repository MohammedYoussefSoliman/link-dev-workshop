import React from "react";
import ErrorBoundary from "components/ErrorBoundary";
import { useHTTP } from "app/hooks";
import Wrapper from "./styles";
import HeroSection from "./HeroSection";
import { getHomeBanner, getHomeNews, structureHomeData } from "./services";

export default function Home() {
  const getHomeData = React.useCallback(async () => {
    const response = await Promise.all([getHomeBanner(), getHomeNews()]);
    return structureHomeData(response);
  }, []);
  const { response, error, isLoading } = useHTTP({ caller: getHomeData });

  if (isLoading) return null;

  return (
    <ErrorBoundary error={Boolean(error)}>
      <Wrapper>
        <HeroSection
          slides={response.slides}
          invest={response.invest}
          sectors={response.sectors}
        />
      </Wrapper>
    </ErrorBoundary>
  );
}
