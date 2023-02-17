import React from "react";
import styled from "styled-components";
import Carousel from "./carousel/Carousel";
import LogoSlide from "./logoslide/LogoSlide";
import BestsellerList from "./bestseller/BestsellerList";
import FeaturedBrands from "./featuredBrands/FeaturedBrands";
import Lookbooks from "./lookbook/Lookbooks";
import Customersay from "./customersay/Customersay";
import Membership from "./membership/Membership";
import MultipleItems from "./bestseller/BestsellerSample";

const SlayOut = styled.div`
  width: 100%;
`;

const BgImg1 = styled.img`
  top: 156px;
  position: absolute;
  right: 10px;
  z-index: -1;
`;

const BgImg2 = styled.img`
  position: absolute;
  top: 720px;
  right: 690px;
  z-index: -1;
`;

const BgImg3 = styled.img`
  position: absolute;
  top: 232px;
  right: 424px;
  z-index: -1;
`;

const BgImg4 = styled.img`
  position: absolute;
  top: 542px;
  right: 20px;
`;

function MainLayout() {
  return (
    <SlayOut>
      <Carousel />
      <LogoSlide />
      <MultipleItems />
      <BestsellerList />
      <FeaturedBrands />
      <Lookbooks />
      <Customersay />
      <Membership />
      <BgImg3 src="/asset/bg-Ellipse2.svg" />
      <BgImg4 src="/asset/bg-Ellipse3.svg" />
      <BgImg1 src="/asset/bg-ellipse.svg" />
      <BgImg2 src="/asset/bg-Ellipse1.svg" />
    </SlayOut>
  );
}

export default MainLayout;
