import styled from "@emotion/styled";
import { HeroBg, SubtractionTwo } from "assets/images";
import { Flex } from "components/Wrappers";
// import devices from "theme/devices";

const HeroWrapper = styled(Flex)`
  label: hero-bg;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      90deg,
      rgba(51, 65, 64, 1) 0%,
      rgba(51, 65, 64, 0) 100%
    ),
    linear-gradient(180deg, rgba(51, 65, 64, 1) 0%, rgba(51, 65, 64, 0) 25%),
    url(${HeroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${SubtractionTwo});
    background-position: left;
    background-repeat: no-repeat;
  }
  > * {
    z-index: 10;
    height: calc(100vh - 125px);
    margin-top: 125px;
  }
  .hero--content {
    padding-left: 90px;
    .slider--wrapper {
      margin-left: -380px;
      .slider {
        max-width: 800px;
        .truncation {
          width: 100%;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      }
    }
  }
`;

export const SliderControllerWrapper = styled(Flex)`
  width: 330px;
  height: 330px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export default HeroWrapper;
