import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import CarouselIcn from "./CarouselIcn";

const SlayOut = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 780px;
  padding-top: 40px;
`;

const SbannerText = styled.div`
  margin-top: 120px;
  vertical-align: middle;
  h2 {
    font-family: "Rufina", serif;
    font-size: 50px;
    font-weight: 700;
    padding: 10px 0;
  }
  p { 
    sans-serif;
    font-size: 18px;
    line-height: 1.5;
  }
  div {
    p {
      font-size: 16px;
      line-height: 1;
      color: ${color.gray3};
      margin-bottom: 10px;
    }
  }
`;

const SbannerIcon = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 60px;
`;

const Sbanner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: space-between;
  justify-content: flex-end;
  margin: 0 10px;
  z-index: 1;

  div > div {
    display: flex;
  }
`;

const Sbanner1 = styled.img`
  width: 198px;
  height: 180px;
  border-radius: 0px 44px 44px 44px;
  margin-right: 10px;
  z-index: 1;
`;

const Sbanner2 = styled.img`
  width: 270px;
  height: 180px;
  background-color: ${color.gray3};
  border-radius: 0px 44px 44px 44px;
  z-index: 1;
`;

const Sbanner3 = styled.img`
  width: 480px;
  height: 380px;
  background-color: ${color.gray3};
  border-radius: 44px;
  margin-top: 20px;
  z-index: 1;
`;

const Sbanner4 = styled.img`
  width: 212px;
  height: 580px;
  background-color: ${color.gray3};
  border-radius: 44px 0 44px 0;
  margin-left: 18px;
  z-index: 1;
`;

const BgImg1 = styled.img`
  top: 156px;
  position: absolute;
  right: 30px;
`;

const BgImg2 = styled.img`
  position: absolute;
  top: 685px;
  right: 707px;
  opacity: 0.8;
`;

const BgImg3 = styled.img`
  position: absolute;
  top: 232px;
  right: 424px;
`;

const BgImg4 = styled.img`
  position: absolute;
  top: 542px;
  right: 20px;
  z-index: 2;
`;

function Carousel() {
  return (
    <SlayOut>
      <SbannerText>
        <h2>About value share</h2>
        <p>
          특별한 날의 명품이 아니라 일상의 명품을 누리세요
          <br />
          Value Share는 합리적인 소비를 추구하는 <br /> MZ세대를 위한 온라인
          명품 대여 서비스입니다. <br />
        </p>
        <SbannerIcon>
          <CarouselIcn />
        </SbannerIcon>
      </SbannerText>
      <Sbanner>
        <div>
          <div>
            <Sbanner1 src="/asset/img-banner1.png" />
            <Sbanner2 src="/asset/img-banner2.png" />
          </div>
          <Sbanner3 src="/asset/img-banner3.png" />
        </div>
        <Sbanner4 src="/asset/img-banner4.png" />
      </Sbanner>
      <BgImg3 src="/asset/bg-Ellipse2.svg" />
      <BgImg4 src="/asset/bg-Ellipse3.svg" />
      <BgImg1 src="/asset/bg-ellipse.svg" />
      <BgImg2 src="/asset/bg-Ellipse1.svg" />
    </SlayOut>
  );
}

export default Carousel;
