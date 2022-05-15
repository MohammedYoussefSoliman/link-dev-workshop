import React from "react";
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import SwiperCore, { Navigation } from "swiper";
import { useTheme } from "@emotion/react";
import { Flex } from "components/Wrappers";
import { DirectLink } from "components/Links";
import Typography from "components/Typography";
import Controller from "./Controller";
import { Slide } from "../../types";

SwiperCore.use([Navigation]);

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const { i18n } = useTranslation();
  const [swiper, setSwiper] = React.useState<SwiperCore | null>(null);
  const lang = i18n.language;
  const [active, setActive] = React.useState(0);

  const { colors } = useTheme();

  const onInit = (s: SwiperCore): void => {
    setSwiper(s);
  };
  return (
    <Flex className="slider--wrapper" gap="60px" align="center">
      {swiper && (
        <div className="controller">
          <Controller
            swiper={swiper}
            activeSlide={active}
            slidesLength={slides.length}
          />
        </div>
      )}
      <div className="slider">
        <Swiper
          dir={lang === "ar" ? "rtl" : "ltr"}
          slidesPerView={1}
          spaceBetween={20}
          onBeforeInit={onInit}
          onSlideChange={(currentSwiper) => {
            setActive(currentSwiper.activeIndex);
          }}
          freeMode
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Flex direction="column" gap="30px">
                <Flex direction="column">
                  <Typography.P1
                    textTransform="uppercase"
                    text={slide.label}
                    color={colors.white}
                    weight={300}
                  />
                  <div className="truncation">
                    <Typography.H1
                      text={slide.title}
                      color={colors.white}
                      lineHeight={1.25}
                      capitalizeFirstLetter
                    />
                  </div>
                </Flex>
                <DirectLink to={`/${slide.id}`} variant="vertical" />
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Flex>
  );
}
