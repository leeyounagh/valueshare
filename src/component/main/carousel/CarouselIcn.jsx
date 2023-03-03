import React from "react";
import styled from "styled-components";
import color from "styles/color";

const SlayOut = styled.div`
  display: flex;
  width: 800px
  height: auto;

  div {
    margin-right: 60px;
    border-right: 1px solid ${color.gray4};

    div {
      font-size: 18px;
      font-weight: 600;
      border:none;
      color: ${color.main};
    }
  }
  div:nth-child(3) {
    border:none;
  }
`;

const SmainIcn = styled.img`
  width: 50%;
  height: 100%;
`;

function CarouselIcn() {
  return (
    <SlayOut>
      <div>
        <SmainIcn src="/asset/icn-main1.svg" />
        <p>Monthly unique visit </p>
        <div>30,254,699</div>
      </div>
      <div>
        <SmainIcn src="/asset/icn-main2.svg" />
        <p>Active customers </p>
        <div>33 Million</div>
      </div>
      <div>
        <SmainIcn src="/asset/icn-main3.svg" />
        <p>Products for any need</p>
        <div>100k</div>
      </div>
    </SlayOut>
  );
}

export default CarouselIcn;
