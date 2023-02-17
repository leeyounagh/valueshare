import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Slayout = styled.div`
  width: 100%;

  h2 {
    padding-top: 100px;
    font-family: "Rufina", serif;
    font-size: 50px;
    text-align: center;
  }
`;

const CardList = styled.div`
  width: 100%;
  width: auto;
  height: auto;
  display: flex;
  margin: 40px 3%;
`;

const BgImg1 = styled.img`
  position: absolute;
  left: 30%;
  top: 3220px;
  z-index: -1;
  opacity: 0.6;
  scale: 0.8;
`;

const BgImg2 = styled.img`
  position: absolute;
  right: 30%;
  top: 3220px;
  z-index: -1;
  opacity: 0.6;
`;

function Lookbooks() {
  return (
    <Slayout>
      <h2>This weeks Lookbook</h2>
      <CardList>
        <Card1 />
        <Card2 />
        <Card3 />
      </CardList>
      <BgImg1 src="/asset/bg-Ellipse3.svg" />
      <BgImg2 src="/asset/bg-star.svg" />
    </Slayout>
  );
}

export default Lookbooks;
