import React from "react";
import styled from "styled-components";

const SlayOut = styled.div`
  display: flex;
  width: 70%;
  height: auto;

  div {
    width: calc(100% / 3);
    padding-right: 60px;

    div {
      font-size: 16px;
      font-weight: 600;

      p {
        font-size: 12px;
      }
    }
  }
`;

const SmainIcn = styled.img`
  width: 100%;
  height: 100%;
`;

function CarouselIcn() {
  return (
    <SlayOut>
      <div>
        <SmainIcn src="../asset/icn-main1.svg" />
        <p>Monthly unique visit </p>
        <div>30,254,699</div>
      </div>
      <div>
        <SmainIcn src="../asset/icn-main2.svg" />
        <p>Active customers </p>
        <div>33 Million</div>
      </div>
      <div>
        <SmainIcn src="../asset/icn-main3.svg" />
        <p>Products for any need</p>
        <div>100k</div>
      </div>
    </SlayOut>
  );
}

export default CarouselIcn;
