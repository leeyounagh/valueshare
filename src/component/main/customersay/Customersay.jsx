import React from "react";
import styled from "styled-components";
import CustomerLine from "./CustomerLine";

const Slayout = styled.div`
  width: 100%;
  height: auto;

  h2 {
    padding-top: 100px;
    padding-bottom: 40px;
    font-family: "Rufina", serif;
    font-size: 50px;
    text-align: center;
  }
`;

const CardList = styled.div`
  width: 100%;
  width: auto;
  height: auto;
  background-color: #f5e5c7;
`;

const BgImg1 = styled.img`
  position: absolute;
  right: 35%;
  top: 4100px;
  z-index: -1;
  opacity: 0.6;
  scale: 0.8;
`;

const BgImg2 = styled.img`
  position: absolute;
  right: 45%;
  top: 4120px;
  z-index: -1;
  opacity: 0.6;
`;

function Lookbooks() {
  return (
    <Slayout>
      <h2>Customer say</h2>
      <CardList>
        <CustomerLine />
        <CustomerLine />
      </CardList>
      <BgImg1 src="/asset/bg-Ellipse3.svg" />
      <BgImg2 src="/asset/bg-star.svg" />
    </Slayout>
  );
}

export default Lookbooks;
