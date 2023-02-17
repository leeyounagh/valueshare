import React from "react";
import styled from "styled-components";
import color from "../../styles/color";
import Carousel from "./carousel/Carousel";
import LogoSlide from "./logoslide/LogoSlide";
import BestsellerList from "./bestseller/BestsellerList";
import FeaturedBrands from "./featuredBrands/FeaturedBrands";
import Lookbooks from "./lookbook/Lookbooks";

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
      <BestsellerList />
      <FeaturedBrands />
      <Lookbooks />
    </SlayOut>
  );
}

export default MainLayout;
