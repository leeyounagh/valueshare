import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import Carousel from "./Carousel";
import LogoSlide from "./Logoslide";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.white};
`;

function MainLayout() {
  return (
    <SlayOut>
      logoslide
      <Carousel />
      <LogoSlide />
    </SlayOut>
  );
}

export default MainLayout;
