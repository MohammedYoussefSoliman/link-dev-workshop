import React from "react";
import SwiperCore from "swiper";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { NavigationButton } from "components/Buttons";
import Typography from "components/Typography";
import { SliderControllerWrapper } from "../styles";

type SliderControlPropsType = {
  slidesLength: number;
  activeSlide: number;
  swiper: SwiperCore;
};

export default function SliderController({
  swiper,
  slidesLength,
  activeSlide,
}: SliderControlPropsType) {
  const prevButton = React.useRef<HTMLButtonElement | null>(null);
  const nextButton = React.useRef<HTMLButtonElement | null>(null);

  const theme = useTheme();

  React.useEffect(() => {
    if (typeof swiper.params.navigation !== "boolean") {
      const { navigation } = swiper.params;
      navigation!.prevEl = prevButton.current;
      navigation!.nextEl = nextButton.current;
      // eslint-disable-next-line no-param-reassign
      swiper.navigation = {
        ...swiper.navigation,
        prevEl: prevButton.current!,
        nextEl: nextButton.current!,
      };
    }
  }, [swiper]);

  return (
    <SliderControllerWrapper direction="column" align="center" justify="center">
      <Flex align="center" gap="15px">
        <NavigationButton
          ref={prevButton}
          disabled={activeSlide === 0}
          onClick={() => swiper.slidePrev()}
          direction="left"
          iconSize={68}
          iconColor={theme.colors.secondary[300]}
        />

        <Typography
          text={activeSlide + 1}
          fontSize="135px"
          color={theme.colors.secondary[300]}
          lineHeight={1}
        />
        <NavigationButton
          ref={nextButton}
          disabled={activeSlide === slidesLength - 1}
          direction="right"
          iconSize={68}
          iconColor={theme.colors.secondary[300]}
          onClick={() => swiper.slideNext()}
        />
      </Flex>
      <Typography.H2
        startAdornment="/"
        text={slidesLength}
        weight={400}
        color={theme.colors.white}
      />
    </SliderControllerWrapper>
  );
}
