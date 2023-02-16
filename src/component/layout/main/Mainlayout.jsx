import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import Carousel from "./Carousel/Carousel";
import LogoSlide from "./Logoslide";
import BestSeller from "./BestSeller/BestSeller";
import FeaturedBrands from "./FeaturedBrands/FeaturedBrands";

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
      <BestSeller />
      <FeaturedBrands />
    </SlayOut>
  );
}

export default MainLayout;
