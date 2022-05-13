import styled from "@emotion/styled";
import { HeroBg, SubtractionTwo } from "assets/images";

export const Wrapper = styled.div`
  label: home-wrapper;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Background = styled.div`
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
`;
