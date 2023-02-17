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
  margin-top: 130px;
  vertical-align: middle;
  h2 {
    font-family: "Rufina", serif;
    font-size: 50px;
    font-weight: 700;
  }

  p {
    font-family: "Montserrat", "Noto Sans KR", sans-serif;
    font-size: 18px;
    line-height: 2;
  }
`;

const SbannerIcon = styled.div`
  display: flex;
  width: auto;
  height: auto;
  margin-top: 40px;
`;

const Sbanner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: space-between;
  justify-content: flex-end;
  margin: 0 10px;

  div > div {
    display: flex;
  }
`;

const Sbanner1 = styled.img`
  width: 198px;
  height: 180px;
  border-radius: 0px 44px 44px 44px;
  margin-right: 10px;
`;

const Sbanner2 = styled.img`
  width: 270px;
  height: 180px;
  background-color: ${color.gray3};
  border-radius: 0px 44px 44px 44px;
`;

const Sbanner3 = styled.img`
  width: 480px;
  height: 380px;
  background-color: ${color.gray3};
  border-radius: 44px;
  margin-top: 20px;
`;

const Sbanner4 = styled.img`
  width: 212px;
  height: 580px;
  background-color: ${color.gray3};
  border-radius: 44px 0 44px 0;
  margin-left: 18px;
`;

function Carousel() {
  return (
    <SlayOut>
      <SbannerText>
        <h2>About value shop</h2>
        <p>
          특별한 날의 명품이 아니라 일상의 명품을 누리세요
          <br />
          브랜드 소개 어쩌고저쩌고... <br />
          쇼핑몰 목적, 소개문구,
        </p>
        <SbannerIcon>
          <CarouselIcn />
        </SbannerIcon>
      </SbannerText>
      <Sbanner>
        <div>
          <div>
            <Sbanner1 src="asset/img-banner1.png" />
            <Sbanner2 src="asset/img-banner2.png" />
          </div>
          <Sbanner3 src="asset/img-banner3.png" />
        </div>
        <Sbanner4 src="asset/img-banner4.png" />
      </Sbanner>
    </SlayOut>
  );
}

export default Carousel;
