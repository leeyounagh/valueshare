import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Carousel from "component/main/carousel/Carousel";
import LogoSlide from "component/main/logoslide/LogoSlide";
import BestsellerList from "component/main/bestseller/BestsellerList";
import FeaturedBrands from "component/main/featuredBrands/FeaturedBrands";
import Lookbooks from "component/main/lookbook/Lookbooks";
import Customersay from "component/main/customersay/Customersay";
import Membership from "component/main/membership/Membership";
import TopBtn from "component/button/TopBtn";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.white};
`;

function Main() {
  return (
    <SlayOut>
      <Carousel />
      <LogoSlide />
      <BestsellerList />
      <FeaturedBrands />
      <Lookbooks />
      <Customersay />
      <Membership />
      <TopBtn />
    </SlayOut>
  );
}

export default Main;
